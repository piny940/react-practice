import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Message from './Message';
import ClickRect from './Rect';
import React from 'react';

class App extends Component {
    message = "This is a sample component.";

    constructor(props) {
		super();
		this.message = props.message;
        this.state = {
            isTitleReact: true
        };
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle(e) {
        this.setState(state => ({
            isTitleReact: !state.isTitleReact
        }));
    }

    render() {
        return <div>
            <h1>{this.state.isTitleReact ?
                <div>React</div> : <div>Not React</div>}</h1>
            <p>{this.message}</p>
            <button className='btn btn-primary' onClick={this.changeTitle}>Button for Title</button>
            <TestForm />
            <TestSquare />
            <Rect x="800" y = "150" width="200" height="200" r="5" c="cyan" />
            <Rect x="400" y="500" width="150" height="150" r="20" c="blue" />
            <Rect x="400" y="100" width="200" height="200" r="100" c="green" />
            <ClickRect />
            <Message>お試し!!</Message>
            <Message>お試しです!!</Message>
        </div>
    }
}

class Rect extends Component {
    color = 'blue';
    border = '2px white solid';
    radius = '0';

    constructor(props) {
        super();
        this.x = props.x;
        this.y = props.y;
        this.color = props.c;
        this.radius = props.r;
        this.width = props.width;
        this.height = props.height;
        this.style = {
            backgroundColor: this.color,
            position: 'absolute',
            left: this.x + "px",
            top: this.y + "px",
            borderRadius: this.radius + "px",
            width: this.width + "px",
            height: this.height + "px",
        }
    }

    render() {
        return <div style={this.style}></div>
    }
}

const SquareSize = React.createContext({size: '20'});

class TestForm extends Component {
    static contextType = SquareSize;

    constructor (props) {
        super();
        this.checkInput = this.checkInput.bind(this);
        this.submit = this.submit.bind(this);
        this.inputNumber = this.inputNumber.bind(this);
        this.state = {
            inputText: ''
        }
    };

    checkInput(e) {
        const input = e.target.value;

        this.setState(state => ({
            inputText: input
        }));
    }
    
    inputNumber(e) {
    }

    submit(e) {
        e.preventDefault();
    }

    render() {
        return <form method='POST' onSubmit={this.submit}>
            <div>{this.state.inputText}</div>
            <div><input type="text" name="" id="" onChange={this.checkInput}
                required pattern='[a-zA-Z0-9,]+' minLength='5' maxLength='10' /></div>
            <div><input type="number" onChange={this.inputNumber}></input></div>
            <button type='submit'>送信</button>
        </form>;
    }
}

class TestSquare extends Component {
    static contextType = SquareSize;

    constructor (props) {
        super();
        this.style = {
            color: 'cyan',
        };
    }

    render() {
        return <div style={this.style}>{this.context.size}</div>;
    }
}

export default App;
