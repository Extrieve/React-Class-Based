import React, { Component } from 'react'

interface SampleProps {
    increment?: number
}

type SampleState = {
    count: number
    increment: number
}

class ExampleComponent extends Component<SampleProps, SampleState> {

    state: SampleState = {
        count: 0,
        increment: this.props.increment || 1 // set default value here
    }

    // Constructor version
    // constructor(props: SampleProps) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //         increment: this.props.increment || 1 // set default value here
    //     }
    //    this.modifyCount = this.modifyCount.bind(this); // bind this to the function 
    //    -> Required for older versions of React ########################################
    // }

    modifyCount = (amount: number) => () => {
        this.setState((prevState) => ({
            count: prevState.count + amount
        }));

        // This is the same as above
        // this.setState((state) => {
        //     return {
        //         count: state.count + amount
        //     }
        // })
    }

    render() {
        return (
            <div>
                <h2>Hello From Example Component</h2>
                <h3>Hello this is {this.state.count}</h3>
                <button onClick={this.modifyCount(this.state.increment)}>Increment by {this.state.increment}</button>
                <button onClick={this.modifyCount(-this.state.increment)}>Decrement by {this.state.increment}</button>
            </div>
        )
    }
}


export default ExampleComponent;