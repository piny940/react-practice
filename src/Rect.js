import { Component } from "react/cjs/react.production.min";

export class ClickRect extends Component {
    color = 'white';
    borderRadius = '2px';
    size = '20';
    data = [];
    area = {
        width: "500px",
        height: "500px",
        border: "1px white solid",
    }

    constructor (props) {
        super();
        this.state = {
            data: this.data
        };
        this.addRect = this.addRect.bind(this);
    }

    draw(data) {
        const style = {
            position: 'absolute',
            backgroundColor: this.color,
            borderRadius: this.borderRadius + 'px',
            width: this.size + 'px',
            height: this.size + 'px',
            left: data.x,
            top: data.y,
        };
        return <div style={style} key={data.id}></div>;
    }

    addRect(e) {
        const id = this.data.length;
        this.data.push({id: id, x: e.pageX, y: e.pageY})
        this.setState(state => ({
            data: this.data
        }))
    }

    render() {
        return <div>
            <div style={this.area} onClick={this.addRect}>
                {this.data.map(value => this.draw(value))}
            </div>
        </div>
    }
}

export default ClickRect
