import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const AddTodo = () => {

    const [title, setTitle] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title !== '') {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false
            })
            setTitle('')
        }
    }
  return (
    <div>
      Add Todo

      <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-center gap-3'>
                <input 
                    type='text'
                    placeholder='Enter todo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div>
                    <button>Add</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default AddTodo
