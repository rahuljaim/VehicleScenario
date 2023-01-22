import React, { Component } from "react";
import background from "../grid-back.jpg";
import MovingObject from "./MovingObject";
export class Canvas extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgray",
          position: "relative",
          height: "500px",
          width: "920px",
          backgroundImage: `url(${background})`,
        }}
      >
        {this.props.vehicle.map((e, i) => {
          return (
            <MovingObject
              key={i}
              id={e.id}
              name={e.name}
              x={e.positionX}
              y={e.positionY}
              speed={e.speed}
              direction={e.direction}
              backcolor={"#".concat(
                Math.floor(Math.random() * 16777215).toString(16)
              )}
            />
          );
        })}
      </div>
    );
  }
}

export default Canvas;
