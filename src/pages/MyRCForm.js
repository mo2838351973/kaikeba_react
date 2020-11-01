import React, { Component } from "react";
// import {createForm} from "rc-form";
// import Input from "../components/Input";

// @createForm()
class MyRCForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'omg',
      password: ''
    };
  }
  // submit = () => {
  //   const {getFieldsValue} = this.props.form;
  //   console.log("submit", getFieldValue());
  // };
  render(){
    // console.log("props", this.props)
    // const {username, password} = this.state;
    // const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <h3>MyRCForm</h3>
        {/* (
          getFieldDecorator('usename')(<Input placeholder="Username" />)
          getFieldDecorator('password')(<Input placeholder="Password" />)
        )
        <button onClick={this.submit}>submit</button> */}
      </div>
    );
  }
}
export default MyRCForm;
