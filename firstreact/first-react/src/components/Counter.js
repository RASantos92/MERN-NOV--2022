import React from 'react'

// named export
// import {Counter} from "./components/Counter"  
export class Counter extends React.Component {

    constructor(props) {
        super(props)

        // must be called 'state' to keep track of component data that could change

        this.state = {
            count: this.props.start || 0,
            clickDates: []
        }
    }



    render() {
        return (
            <>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + this.props.step || this.state.count + 1,
                            clickDates: [new Date(), ...this.state.clickDates]
                        })
                    }}>
                    Count {this.state.count} - {this.props.title}
                </button>
                <ul>
                    {this.state.clickDates.map((clickdate, i) => {
                        return <li key={i}>{clickdate.toString()}</li>
                    })}
                </ul>
            </>
        )
    }
}

// default export which will be imported like:
// import callWhatEverYouWant from "./components/Counter"
// export default Counter;