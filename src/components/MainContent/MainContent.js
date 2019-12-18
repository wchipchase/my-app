import React, { Component } from "react";
import './MainContent.css';

class MainContent extends Component {
    render() {
        return(
            <div className = "mainContent">  
                <label> To Do Item 1<input type="checkbox" name="todo1" value="todo1"/></label> <br />
                <label> To Do Item 2<input type="checkbox" name="todo2" value="todo2"/> </label> <br />
                <label> To Do Item 3<input type="checkbox" name="todo3" value="todo3"/></label> <br />
            </div>
        )
    }
}

export default MainContent;
