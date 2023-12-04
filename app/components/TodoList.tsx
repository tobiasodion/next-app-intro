import Todo from "./Todo"

const TodoList = ({ todos }) => {
    return <div>
        {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
        ))}
    </div>
}

export default TodoList