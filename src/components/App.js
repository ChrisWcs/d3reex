import React, { Component } from 'react';
import MyChart from './MyChart';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [

            ],
            value: "",
            index: 0,
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOnChange(event){
        const {value} = event.target;
        this.setState( () => {
            return {
                value,
            };
        });
        console.log(this.state);
    }

    handleClick(){
        this.setState( (prevState) => ({
            data: [ ...prevState.data, {
                name: "" + prevState.index,
                uv: parseInt(prevState.value)
            }],
            value: "",
            index: prevState.index + 1
        }));
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <MyChart data={this.state.data}/>
                <input type="text" value={this.state.value} onChange={this.handleOnChange}/>
                <button onClick={this.handleClick}>add</button>
            </div>
        );
    }
};

export default App;