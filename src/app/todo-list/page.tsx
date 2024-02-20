'use client'
import React, {useState} from 'react'; // importing FunctonComponent

const Page: React.FC<{}> = () => {
  const [inputVal, setInputVal] = useState('')
  const [todoList, setTodoList] = useState(['a', 'b', 'c'])
      
  const submitItem = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    let newTodoList = [...todoList, inputVal]
    setTodoList(newTodoList)
    setInputVal('')
  }
      return (
        <>
        <h2>Todo Title</h2>
        <h3>Another title</h3>
        <form onSubmit={submitItem}>
          <input type="text" value={inputVal}  onChange={e => setInputVal(e.target.value)}></input>
        </form>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>

            )
            
          })}
        </ul>
    </>
  )
}

export default Page;