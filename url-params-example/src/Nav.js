import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    let foods = ["burrito", "salad", "sushi", "pasta"];
    return (
      <ul>
        {foods.map(food => (
          <li key={food}>
            <Link to={`/food/${food}`}>Show me the {food}!</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;
