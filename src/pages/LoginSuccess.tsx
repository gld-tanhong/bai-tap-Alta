import React, { useEffect, useState } from 'react'

import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUser } from '../redux/authActions';

import { AppDispatch } from '../redux/store';
import { RootState } from '../redux/store';

import AddTodo from '../components/AddTodo';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import ItemTodo from '../components/ItemTodo';

const LoginSuccess = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  interface Todo {
    id: string;
    title: string
    [key: string]: unknown
  }

  const [todos, setTodos] = useState<Todo[]>([])

  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await dispatch(logoutUser())
    if (result) {
      navigate('/login')
    }
  }

  const {user} = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unSub = onSnapshot(q, (querySnapshot) => {
      const todosArray: Todo[] = []
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id, title: doc.data().title})
      })

      setTodos(todosArray)
    })
    return () => unSub()
  }, [])  

  if (todos) {
    console.log(todos)
  }
  

  return (
    <div className='bg-black flex items-center justify-center flex-col h-screen'>
      <div className='bg-teal-400 shadow-lg w-96 h-96 rounded-3xl p-6 flex flex-col items-center justify-center'>
        <div className='text-white flex items-center flex-col justify-center h-full'>
          <h1 className='mb-4 text-3xl'>Login Success</h1>
          <h2>Username: {user?.displayName}</h2>
          
          <form className='mt-2' onSubmit={handleLogout}>
            <button className='hover:text-black' type='submit'>Logout</button>
          </form>
        </div>

        <AddTodo />

        {
          todos &&
          todos.map((item: Todo, index) => {
            return (
              <ItemTodo key={index} item={item} />
            )
          })
        }

      </div>
    </div>
  )
}

export default LoginSuccess
