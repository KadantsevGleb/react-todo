import type {Dispatch, SetStateAction} from "react";
import type {Todo} from "../data/types";

interface TodosListProps {
	todos: Todo[];
	setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function TodosList({todos, setTodos}: TodosListProps) {

	function checkToggle(id: number, completed: boolean) {
	    setTodos(prev => prev.map(todo => {
	        return todo.id === id ? { ...todo, completed } : todo
	      }))
	  }

	 function deleteTodo(todo: Todo) {
	   setTodos(prev => prev.filter(curTodo => {
	    if (curTodo !== todo) return curTodo
	   }))
	 }

	return (
		<div className="todos">
			{todos.length > 0 ?
				todos.map(todo =>
			      <div className="todo" key={Math.random()}>
			        <div className="todo__body">
			          <input
			            id={`${todo.id}`}              
			            type="checkbox"
			            checked={todo.completed}
			            onChange={(e) => checkToggle(todo.id, e.target.checked)}
			          />
			          <label htmlFor={`${todo.id}`}>{todo.title}</label>
			        </div>
			        <button className="todo__delete"
			          onClick={() => deleteTodo(todo)}
			        >
			          delete
			        </button>
			      </div>
			    )

				: <div className="no-todo">Добавьте Ваш первый todo</div>
			}
		</div>
	)
}

export default TodosList