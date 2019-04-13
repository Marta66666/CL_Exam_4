import React from "react";
import ReactDOM from "react-dom";

function UserCard(props){

  if (props.name === "" || props.surname === "" || props.address === "" || props.city === "")
  { if (props.postcode.length !== 5 || props.postcode.length !==6) {
    return (<div className="alert alert-danger">
      Dane są nieprawidłowe!
    </div>)
  }
  } else {
    console.log( props.postcode.length)
    return (
      <div className="card">
        <div>
          <h5>{props.name} {props.surname}</h5>
          <div>{props.address}</div>
          <div>{props.postcode} {props.city}</div>
        </div>
      </div>
  )
}
}
function App(){

  return <UserCard name="Jan" surname="Kowal" address="ul ABCD 1" postcode="123456" city="warszawa"/>
}
/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  UserCard
};