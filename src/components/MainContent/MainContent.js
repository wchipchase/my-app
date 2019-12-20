import React, { Component } from "react";
import './MainContent.css';

class MainContent extends Component {
    render() {
        return(
            <div className = "todo-list">
                <div className = "todo-item">
                    <input type="checkbox" />
                    <p>Placeholder Text</p>  
                </div>
            </div>
        )
    }
}

export default MainContent;
