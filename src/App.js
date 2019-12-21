import React, { Component } from "react";
import Wayne from './components/Wayne/Wayne';


// #1
class App extends Component {
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render(){
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <Wayne answer={this.state.answer}/>
            </div>
        )
    }
}

// #2
class Header extends Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
class Greeting extends Component {

    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

export default App