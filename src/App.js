import React from "react"
import Joke from './components/Joke/Joke';
import jokesData from '../src/Data/jokesData';
// import ContactCard from "./components/ContactCard/ContactCard";

function App() {
    const jokeComponents = jokesData.map(joke => {
        return<Joke key={joke.id} question = {joke.question} answer= {joke.answer} />
    })
    return (

        <div>
            {jokeComponents}
        </div>
        // <div className="contacts">
        //     <ContactCard 
        //         contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
        //     />
        //     <ContactCard 
        //         contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/500/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
        //     />
        //     <ContactCard 
        //         contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
        //     />
        //     <ContactCard 
        //         contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
        //     />
        // </div>
    )
}

export default App