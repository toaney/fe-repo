"use client"
import {useState} from 'react'

const Page = () => {
  const [newItem, setNewItem] = useState("")
  const [todoList, setTodoList] = useState([
    {id: "123", value: "test123", completed: false},
    {id: "456", value: "test456", completed: false},
    {id: "789", value: "test789", completed: false}
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoList(currentTodoList => {
      return [...currentTodoList, {id: crypto.randomUUID(), value: newItem, completed: false}]
    })

    setNewItem("")
  }

  const deleteItem = (id) => {
    console.log(todoList)
    console.log(id)
    setTodoList(list => {
      return list.filter(item => item.id !== id)
    })
  }

  const toggleItem = (id) => {
    console.log(id)
    setTodoList(currentList => {
      return currentList.map(item => {
        if (item.id === id){
          return {...item, completed: !item.completed}
        }

        return item
      })
    })
  }

  return (
    <>
      <h1 className="text-2xl">Todo List 2</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} className="border"></input>
      </form>
        <ul>
          {todoList.map((item)=> {
            return (
              <li key={item.id}>
                <button onClick={() => deleteItem(item.id)}>X</button>
                <button onClick={() => toggleItem(item.id)} className={item.completed? "line-through" : ""}>{item.value}</button>
              </li>
            )
          })}
        </ul>
    </>
  )

}

export default Page