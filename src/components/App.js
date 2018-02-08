import React, { Component } from 'react';
import MyChart from './MyChart';

const createData = (index, amount) => ({
    name: index,
    amount,
});

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                createData(0, 2000),
                createData(1, 3000),
                createData(2, 2500),
            ],
        }
    }

    render(){
        return (
            <div>
            <MyChart data={this.state.data}/>
            </div>
        );
    }
};

export default App;