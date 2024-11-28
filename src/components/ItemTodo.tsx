import React from 'react'


interface TodoItem {
    id: string;
    title: string;
    [key: string]: unknown
}

interface ItemTodoProps {
    item: TodoItem;
}

const ItemTodo: React.FC<ItemTodoProps> = ({ item }) => {
  return (
    <div>
      <h1>
        {item.title}
      </h1>
    </div>
  )
}

export default ItemTodo
