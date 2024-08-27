import { useEffect, useState } from 'react'
import ToDoForms from './components/ToDoForms'
import './App.css'

function App() {

  const [ToDo, setToDo] = useState(() => {

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
    localStorage.setItem("ITEMS", JSON.stringify(ToDo))
    
  }, [ToDo]) // O array de dependências [ToDo] indica que este efeito só deve ser executado *QUANDO* o estado 'ToDo' for modificado.
  
  function addToDo(title) {

    // Atualiza o estado 'ToDo' usando a função 'setToDo'.
    setToDo(currentToDo => {
      return [
        ...currentToDo, // Retorna um novo array que inclui todas as tarefas existentes

        // Adiciona um novo objeto representando a tarefa.
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
    
  }

  return (
    <>
      <ToDoForms onSubmit={addToDo}/>
    </>
  )
}

export default App