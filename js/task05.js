import React, {Component} from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  name: "",
      correctName: true,
      mail:'',
      correctMail: true,
      message: "",
      correctMessage: true,
      validationPassed: false
    }
  }

  handleValidation = e => {
if (this.state.name.length < 2){
this.setState({
      correctName: false,
    }

)
} else if (this.state.name.length >= 2){
  this.setState({
    correctName: true,
  })
}
    if (this.state.mail.length < 3 || !this.state.mail.includes("@")){
      this.setState({
            correctMail: false,
          }

      )
    } else if (this.state.mail.length >= 3){
      this.setState({
        correctMail: true,
      })
    }

    if (this.state.message === ""){
      this.setState({
            correctMessage: false,
          }

      )
    } else{
      this.setState({
        correctMessage: true,
      })
    }
    if(this.state.correctName && this.state.correctMail && this.state.correctMessage){
      this.setState({
        validationPassed: true
      })
    }

  }

  handleNameChange = e => {
    this.setState({name: e.target.value});

  };

  handleMailChange = e => {
    this.setState({mail: e.target.value});

  };

  handleMessageChange = e => {
    this.setState({message: e.target.value});

  };

  handleSubmit = e => {
e.preventDefault();
    this.handleValidation()
  };

  render() {
    const komunikat1 = <p>Pole imię musi zawierać co najmniej 2 znaki</p>;
    const komunikat2 = <p>Pole email musi zawierać znak @ i co najmniej 3 znaki</p>;
    const komunikat3 = <p>Pole wiadomość musi zostać uzupełnione</p>;
    const komunikat4 = <p style={{color: "green"}}>Dziękujemy za wiadomość</p>;

    return (
        <>
          {this.state.correctName ? null : komunikat1}
          {this.state.correctMail ? null : komunikat2}
          {this.state.correctMessage ? null : komunikat3}
          {this.state.validationPassed ? komunikat4 : null}
          <form onSubmit={this.handleSubmit}>
          <input  value={this.state.name} onChange={this.handleNameChange}  type="text" className="form-control" />
          <input className="form-control" type="text" value={this.state.mail} onChange={this.handleMailChange}/>
          <textarea className="form-control" value={this.state.message} onChange={this.handleMessageChange} />
          <button className="btn btn-primary" type="submit"> Wyślij</button>
          </form>
          </>
    );
  }
}


function App(){
  return <ContactForm/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  ContactForm
};