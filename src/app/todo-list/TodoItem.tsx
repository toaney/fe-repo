'use client'

interface TodoItemProps {
  key: string;
  item: TodoItemInterface;
  deleteItem: DeleteItem;
  toggleItem: ToggleItem;
}

const TodoItem: React.FC<TodoItemProps> = ({item, deleteItem, toggleItem}) => {
  return (
    <li className="flex flex-row my-3"> 

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7 mr-2" onClick={()=> deleteItem(item.id)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <button onClick={() => toggleItem(item.id)}  className={item.completed? "line-through" : ""}>
        {item.value}
      </button>

    </li>
  )
}

export default TodoItem