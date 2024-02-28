import { useState } from 'react'

import './App.css'
import ToDoForm from './components/ToDoForm'
import Table from './components/Table'

function App() {
  return (
    <>
      <div className='bg-indigo-100 px-8 min-h-screen'>
        <nav className='pt-8'>
        <h1 className='text-5x1 text-center'> ToDo List</h1>
        </nav>
        <ToDoForm/>
        <Table/>
      </div>
    </>
  )
}

export default App
