import { Component } from "react/cjs/react.production.min"


function mappingState(state) {
    return state;
}

class Message extends Component {
    exCount = 0;
    defaultMessage = 'Hello World';

    constructor(props) {
        super()
        this.msg2 = props.children;
        this.state = {
            msg: this.defaultMessage,
            counter: 0,
        }

        setInterval(() => {
            this.exCount++;
            this.setState(state => {
                let newMessage = '';
                if (this.exCount > 10) {
                    newMessage = this.defaultMessage;
                    this.exCount = 0;
                }
                else {
                    newMessage = state.msg + '!';
                }
                return {
                    msg: newMessage
                }
            })
        }, 500);

        this.doAction = this.doAction.bind(this);
    }

    doAction(e) {
        this.setState(state => ({
            counter: ++state.counter,
        }));
    }

    render() {
        return <div>
                <div>{this.state.msg}</div>
                <div>Counter: {this.state.counter}</div>
                <div>{this.msg2}</div>
                <div>store's message: {this.props.message}</div>
                <button className='btn btn-primary' onClick={this.doAction}>Click!</button>
            </div>
    }
}

Message = connect(mappingState)(Message)

export default Message
