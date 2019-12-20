import React from "react"
import TodoItems from './components/TodoItems/TodoItems';
import todosItemsData from './Data/todosData';
// import ContactCard from "./components/ContactCard/ContactCard";

function App() {
    const todosItems = todosItemsData.map(item =>  <TodoItems key={item.id} id = {item.id} text = {item.text} completed = {item.completed} />
    )
    return (

        <div className = "todo-list">
            {todosItems}
        </div>
    )
}

export default App