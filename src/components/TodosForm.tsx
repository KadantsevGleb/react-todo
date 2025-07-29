import {useState, type Dispatch, type FormEvent, type SetStateAction} from "react"
import type {Todo} from "../data/types"

interface TodosFormProps {
	setTodos: Dispatch<SetStateAction<Todo[]>>
}

function TodosForm({ setTodos }: TodosFormProps) {
	const [inputValue, setInputValue] = useState("")

	function addTodo(e: FormEvent<HTMLFormElement>, value: string) {
		e.preventDefault()

		if (value) {
			setTodos(prev => [...prev, { id: Math.random(), title: value, completed: false }])
		}

		setInputValue('')
	}

	return (
		<form
			className="form"
			onSubmit={e => addTodo(e, inputValue)}
		>
			<input
				type="text"
				className="form__input"
				placeholder="Введите ваш Todo"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button className="form__add">Добавить</button>
		</form>
	)
}

export default TodosForm
