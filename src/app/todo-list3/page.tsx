"use client"
import React, {useState, useEffect} from "react"

const page = () => {
  const [newItem, setNewItem] = useState("")
  // const [todoList, setTodoList] = useState([
  //   {id:"123", value: "123", completed: false},
  //   {id:"456", value: "456", completed: true},
  //   {id:"789", value: "789", completed: false}
  // ])
  const [todoList, setTodoList] = useState(()=> {
    return JSON.parse(localStorage.getItem("todoList"))
  })

  // useEffect(() => {
  //   setTodoList(localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList") || "{}") : [])
  // }, [])


  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])


  function addItem(e){
    e.preventDefault()

    if (newItem) {

      // let updatedTodoList = [...todoList, {id: crypto.randomUUID(), value: newItem, completed: false}]
      // setTodoList(updatedTodoList)

      setTodoList(currentTodos => {
        return [...currentTodos, {id: crypto.randomUUID(), value: newItem, completed: false}]
      })


      // localStorage.setItem("todoList", JSON.stringify(updatedTodoList))

      setNewItem("")
    }
  }

  function deleteItem(id){
    // setTodoList(currentTodos => {
    //   return currentTodos.filter( item => {
    //     if (item.id !== id){
    //       return item
    //     }
    //     return
    //     }
    //   )
    // })


    // let updatedTodoList = [...todoList.filter(item => item.id !== id)]
    // setTodoList(updatedTodoList)
    // localStorage.setItem("todoList", updatedTodoList)



    setTodoList(currentTodos => {
      return currentTodos.filter(item => item.id !== id)
    })
  }

  function toggleComplete(id){
    // setTodoList(currentTodos => {
    //   return (
    //     currentTodos.map(item => {
    //       if (item.id === id){
    //         return (
    //           {...item, completed: !item.completed}
    //         )
    //       } else {
    //         return item
    //       }
    //     })
    //   )
    // })
    setTodoList(currentTodos =>{
      return currentTodos.map(item => {
        if (item.id === id){
          return {...item, completed: !item.completed}
        }
        return item
      })
    })
  }

  return (
    <>
      <h2>Hello World</h2>
      <form onSubmit={addItem}>
        <input type="text" value={newItem} onChange={(e) => {setNewItem(e.target.value)}} className="border"></input>
      </form>
      <ul>
        {todoList.map((item)=>{
          return (
            <>
              <li key={item.id}>
                <button onClick={()=> {deleteItem(item.id)}}>x</button>
                <button onClick={()=> {toggleComplete(item.id)}} className={item.completed? "line-through" : ""}>
                  {item.value}
                </button>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )

}

export default page