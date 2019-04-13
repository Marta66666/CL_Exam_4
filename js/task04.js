import React, {Component} from "react";
import ReactDOM from "react-dom";

class LoadingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    }
  }
componentDidMount() {
  this.intervalId = setInterval(() => {
    this.setState({
          width: ++this.state.width,
        }
    )
  }, 100);

}
componentWillUnmount() {
    clearInterval(this.intervalId)
}

  render() {
    let style = {
      width: this.state.width + "%"
    }

        if(this.state.width >= 100){
          return (
           <h1>Dane Załadowane!</h1>
          )
        }
        else {
          return (
          <div className="progress">
            <div className="progress-bar" style={style}></div>
          </div>
          )
        }
  }
}


function App(){
  return (
      <LoadingData />
  )
}
/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  LoadingData
};