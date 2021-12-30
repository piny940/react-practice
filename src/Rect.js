import { Component } from "react/cjs/react.production.min";

class Rect extends Component {
    color = 'black';
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

export default Rect
