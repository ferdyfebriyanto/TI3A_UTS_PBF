import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../actions/actionCreator";
// import { bindActionCreators } from "redux";

export class CreateTransaction extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          todotext: "",
        };
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
      }
    
      onChangeTodoText(e) {
        this.setState({
          todotext: e.target.value,
        });
      }

    render() {
    return (
      <div>CreateTransaction</div>
    )
  }
}

export default CreateTransaction