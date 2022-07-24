import React from "react";

class App extends React.Component {
  state = {
    count : 0,
  }

  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };

  render() {
    return (
      <div>
        <h1>I'm a class component: {this.state.count}</h1>
        <button onClick={this.add}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div> 
    )
  }
}

export default App;