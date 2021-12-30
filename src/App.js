import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Rect from './Rect';
import Message from './Message';

class App extends Component {
    title = "The title is not set."
    message = "This is a sample component."

    constructor(props) {
		super();
		this.title = props.title;
		this.message = props.message;
    }

    render() {
        return <div>
            <h1>{this.title}</h1>
            <p>{this.message}</p>
            <Rect x="800" y = "150" width="200" height="200" r="5" c="cyan" />
            <Rect x="200" y="200" width="150" height="150" r="20" c="blue" />
            <Rect x="400" y="100" width="200" height="200" r="100" c="green" />
            <Message />
        </div>
    }
}

export default App;
