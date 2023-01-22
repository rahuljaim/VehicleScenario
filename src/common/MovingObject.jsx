import React, { Component } from "react";

export class MovingObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
      display: "visible",
    };
  }
  componentDidMount() {
    switch (this.props.direction) {
      case "Towards":
        this.timer = setInterval(() => {
          this.setState({ x: this.state.x + 1 });
          this.draw();
        }, this.props.speed + 100);
        break;
      case "Backwards":
        this.timer = setInterval(() => {
          this.setState({ x: this.state.x - 1 });
          this.draw();
        }, this.props.speed + 100);
        break;
      case "Upwards":
        this.timer = setInterval(() => {
          this.setState({ y: this.state.y + 1 });
          this.draw();
        }, this.props.speed + 100);
        break;
      case "Downwards":
        this.timer = setInterval(() => {
          this.setState({ y: this.state.y - 1 });
          this.draw();
        }, this.props.speed + 100);
        break;

      default:
        break;
    }
  }
  componentDidUpdate() {
    if (
      this.state.x === 0 ||
      this.state.x === 925 ||
      this.state.y === 0 ||
      this.state.y === 501
    )
      this.clearVal();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  clearVal = () => {
    clearInterval(this.timer);
  };
  draw = () => {
    return (
      <div
        style={{
          left: `${this.state.x}`.concat("px"),
          bottom: `${this.state.y}`.concat("px"),
          position: "absolute",
          color: "red",
          fontWeight: "bolder",
          padding: "2px",
          borderRadius: "40%",
          height: "25px",
          width: "20px",
          backgroundColor: this.props.backcolor,

          display:
            this.state.x === 0 ||
            this.state.x === 925 ||
            this.state.y === 0 ||
            this.state.y === 501
              ? "none"
              : this.state.display,
        }}
      >
        {this.props.id}
      </div>
    );
  };
  render() {
    return this.draw();
  }
}

export default MovingObject;
