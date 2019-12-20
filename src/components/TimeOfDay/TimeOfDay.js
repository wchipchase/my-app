import React, {Component} from 'react';

class TimeOfDay extends Component {

    render() {

        const date = new Date();
        const hours = date.getHours();
        let timeOfDay
        const styles={
            fontSize: "30px"
        }
            if (hours < 12) {
                timeOfDay = "morning"
                styles.color="#04750F"
            } else if (hours >=12 && hours < 17){
                timeOfDay = "afternoon"
                styles.color="purple"
            } else {
                timeOfDay = "night"
                styles.color="#D90000"
            }

        return(
            <h1 style={styles}>Good {timeOfDay} </h1>
        )
    }
}

export default TimeOfDay;