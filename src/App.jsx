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
  
  useEffect(() => {

    // Armazena o valor atualizado de 'ToDo' no localStorage,
    console.log("Salvndo no localStorage: ", toDo)
    localStorage.setItem("ITEMS", JSON.stringify(toDo))
    
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
    <>
    <div className="bg-[#0D0D0D]">

      <NavBar/>
      <ToDoForms onSubmit={addToDo} className="items-center"/>

      <div className='flex'>

        <h1 className='flex text-center text-[#4EA8DE] items-center mx-auto mr-[100px]'>Tarefas criadas {toDo.length}</h1>
        <h1 className='flex text-center text-[#4EA8DE] items-center mx-auto'>Concluídas {}</h1>

      </div>

      <ToDoList toDo={toDo} upDateToDo={upDateToDo} DeleteToDo={DeleteToDo}/>
    </div>
    </>
  )
}

export default App