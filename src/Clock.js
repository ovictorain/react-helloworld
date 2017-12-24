import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  /* Cladd 里不允许放变量。。。只能放方法 */
  // const a = 1;
  // const tick = () => {
  //   this.setState({
  //     date: new Date()
  //   })
  // }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
     clearInterval(this.timerID);
  }

  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock
