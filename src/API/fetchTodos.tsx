import type {Todo} from "../data/types"

async function fetchTodos
(URL: string, setTodos: (todos: Todo[]) => void, setTotal: (total: number) => void) {
    const response = await fetch(URL)
    const total = Number(response.headers.get('x-total-count'))
    setTotal(total)

    const data = await response.json() as Todo[]
    setTodos(data)
}

export default fetchTodos