import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'sonner';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
 e.preventDefault();

    console.log('Login attempted with:', formData);
    try{
      const res = await axios.post('http://localhost:3000/auth/register',input,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredential:true
      });
      if(res.data.success){
      toast.success (res.data.message) 
      }
    }catch(error){
      console.log(error);
      toast.error(error.ressponse.data.message)
    }
   
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
     
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-purple-30/10 text-[30rem] font-bold select-none">
          hola
        </div>
      </div>
      
      
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-purple-400">hola'</span> mi amigos
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-red-400 hover:text-purple-300">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-purple-400 hover:bg-purple-500 text-white font-medium transition-colors"
          >
            Sign in
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center py-3 px-4 rounded-md border border-gray-600 hover:border-purple-400 text-white transition-colors"
            >
              Continue with G
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-3 px-4 rounded-md border border-gray-600 hover:border-purple-400 text-white transition-colors"
            >
              Continue with @
            </button>
          </div>

          <div className="text-center text-gray-400">
            Don't have any account?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;