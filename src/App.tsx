import {useEffect, useState} from 'react'
import fetchTodos from './API/fetchTodos'
import Pagination from './components/Pagination'
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'
import type {Todo} from './data/types'
import getPagesArray from './utils/getPagesArray'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const limit = 10
  const URL = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
  const pages = getPagesArray(total, limit)

  useEffect(() => {
    fetchTodos(URL, setTodos, setTotal)
  }, [page])

  

  return (
    <>
        <TodosForm setTodos={setTodos} />
        <TodosList todos={todos} setTodos={setTodos} />
        <Pagination pages={pages} setPage={setPage} />
    </>
  )
}

export default App
