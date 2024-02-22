"use client"
import React, {useState, useEffect} from "react"; // importing FunctonComponent
import TodoItem from "./TodoItem"

const Page: React.FC<{}> = () => {
  const [inputVal, setInputVal] = useState<string>("")
  const [todoList, setTodoList] = useState<Array<TodoItemInterface>>( () => {
    
    const savedTodoList = localStorage.getItem("todos")

    if (savedTodoList) {
      return JSON.parse(savedTodoList)
    } else {
      return []
    }
})
      
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  const submitItem = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // let newTodo = {
    //   "key": crypto.randomUUID(),
    //   "value": inputVal
    // }

    // let newTodoList = [...todoList, newTodo]
    // setTodoList(newTodoList)

    setTodoList(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), value: inputVal, completed: false }
      ]
    })

    setInputVal("")
  }

  const toggleItem = (id: string, completed: boolean) => {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return { ...todo, completed}
        }

        return todo
      })
    })
  }

  const deleteItem = (id: string) => {
    setTodoList(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    // <div className="flex">
      <div className="flex flex-col items-center text-lg">
        <h1 className="mt-10">Todo List</h1>
        <form onSubmit={submitItem} className="my-3">
          <input type="text" className="border-solid border border-black rounded-2xl h-11 px-3 shadow-lg w-96" value={inputVal} onChange={e => setInputVal(e.target.value)}></input>
        </form>
        <ul className="flex flex-col items-start w-96">
          {todoList.map((item) => {
            return (
              <TodoItem key={item.id} item={item} toggleItem={toggleItem} deleteItem={deleteItem}/>
            )
            
          })}
        </ul>

      </div>
    // </div>
  )
}

export default Page;