import React, { Component } from 'react';


class TodoItems extends Component {
  
  render(){
    return(
      <div className = "todoitems">
      <input type = "checkbox" checked={this.props.completed}/>
        <p>Id: {this.props.id}</p>
        <p>Text: {this.props.text}</p>
        <p> Price: {this.props.price}</p>
        <p>Completed: {this.props.completed}</p>
      </div>
    )
  }
}

export default TodoItems;