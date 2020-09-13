import React from 'react';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            text:'',
            todos:[],
            input:''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
        this.state.todos.push(this.state.text);
        this.state.text = "";
    }

    onChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    deleteItem = (index) => {
        const item = this.state.todos.splice(index, 1);
        this.setState({
            item
        })
    }

    render() {
        const listItems = this.state.todos.map((item, index) => 
            <li id={index}><span>{item}</span> <button onClick={this.deleteItem.bind(this, index)}>Delete</button></li>
        );
        return(
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <input value={this.state.text} onChange={this.onChange}/>
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default TodoApp;

