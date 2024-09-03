import React, { useEffect, useState } from 'react'
import './App.css'

import ToDoForms from './components/TodoComponents/ToDoForms'
import ToDoList from './components/TodoComponents/ToDoList'
import NavBar from './components/Templates/NavBar'


function App() {

  
  const [toDo, setToDo] = useState(() => {

    // Verifica o valor armazenado no localStorage sob a chave "ITEMS".
    const localValue = localStorage.getItem("ITEMS")
    
    // Se localValue não for uma string válida para JSON, retorna um array vazio.
    if(localValue == null || localValue === ""){
      return [];
    }

    try{
      // Tenta analisar o valor como JSON.
      return JSON.parse(localValue)

    } catch (error){

      // Se JSON.parse falhar, retorna um array vazio.
      console.log('Erro ao analisar JSON do localstorage ', error);
      return [];

    }
    

  })
  
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    
    // Armazena o valor atualizado de 'ToDo' no localStorage,
    console.log("Salvndo no localStorage: ", toDo)
    localStorage.setItem("ITEMS", JSON.stringify(toDo))

    const count = toDo.filter(task => task.completed).length;
    setCompletedCount(count)
    
  }, [toDo]) // O array de dependências [ToDo] indica que este efeito só deve ser executado *QUANDO* o estado 'ToDo' for modificado.
  
  function addToDo(title) {

    // Atualiza o estado 'ToDo' usando a função 'setToDo'.
    setToDo(currentToDo => {

      const taskExists = currentToDo.some(toDo => toDo.title === title);
      if(taskExists) return currentToDo;

      return [
        ...currentToDo, // Retorna um novo array que inclui todas as tarefas existentes

        // Adiciona um novo objeto representando a tarefa.
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
    
  }

  function upDateToDo(id, completed, title) {
    
    // Atualiza o estado 'toDo' com base na função de callback passada para 'setToDo'.
    setToDo(currentToDo =>

      // Mapeia a lista de tarefas atual para criar uma nova lista atualizada.
      currentToDo.map(toDo => {

        // Verifica se o ID da tarefa atual corresponde ao ID da tarefa a ser atualizada.
        if (toDo.id === id) {  
          
          // Retorna uma nova tarefa com os valores atualizados para 'completed' e 'title'.
          return { ...toDo, completed, title };  
        }
        // Se o ID não corresponder, retorna a tarefa atual sem alterações.
        return toDo;
      })
    );
  }
  

  function DeleteToDo(id) {

    // Atualiza o estado 'toDo' com base na função de callback passada para 'setToDo'.
    setToDo(currentToDo => {
      
      // Filtra a lista de tarefas atual para remover a tarefa com o ID fornecido.
      return currentToDo.filter(toDo => toDo.id !== id);
    });
  }


  return (
    <div className="bg-[#0D0D0D] min-h-screen px-4 sm:px-6 lg:px-8">
      <NavBar />
      <ToDoForms onSubmit={addToDo} className="my-4" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-center mx-auto mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <h1 className="text-[#4EA8DE] mr-2">Tarefas criadas</h1>
          <div className="text-[#D9D9D9] bg-[#333333] w-10 rounded-2xl flex items-center justify-center">
            {toDo.length}
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#4EA8DE] mr-2">Concluídas</h1>
          <div className="text-[#D9D9D9] bg-[#333333] w-10 rounded-2xl flex items-center justify-center">
            {completedCount}/{toDo.length}
          </div>
        </div>
      </div>

      <ToDoList toDo={toDo} upDateToDo={upDateToDo} DeleteToDo={DeleteToDo} />
    </div>
  );
}

export default App