import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginWithEmail } from '../redux/authActions';

import { AppDispatch } from '../redux/store';

import type { Login } from '../types/todo'


const initialsState: Login = {
    email: '',
    password: ''
}
const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<Login>(initialsState)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

    const result = await dispatch(loginWithEmail(formData))

    setFormData(initialsState)
    if (result) navigate('/loginsuccess')
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100"> 

      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 

              type="email"
              id="email" 
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label 
                htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Mật khẩu
            </label>
            <input
              type="password"

              id="password"
              value={formData.password}
              onChange={(e) => setFormData((prev) => ({...prev, password: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 
 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
