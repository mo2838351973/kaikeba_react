import React, {Component} from 'react';

export default function createForm(Cmp){
  return class extends Component {
    constructor(props){
      super(props)
      this.state = {

      }
      this.options = {}
    }
    handleChange = e => {
      const {name, value} = e.target;
      this.setState({[name]: value})
    } 
    getFieldDecorator = (field, option) => InputCmp => {
      this.options[field] = option;
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || '',
        onChange: (e) => this.handleChange(e)
      })
    }
    setFieldsValue = newStore => {
      this.setState(newStore)
    }
    getFieldsValue = () => {
      return this.state
    }
    validateFields = callback => {
      let err = [];
      // 暗号：葡萄
      // 校验规则 this.options
      // 校验的值是this.state
      for(let field in this.options){
        // 判断state[field]是否是undefined
        // 如果是 err.push({[field]:'err'})
        if(!this.state[field]){
          err.push({[field]:'err'})
        }
      }
      if(err.length === 0){
        callback(null, this.state)
      } else {
        callback(err, this.state)
      }
    }
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }
    render(){
      return <Cmp {...this.props} {...this.getForm()} />
    }
  }
}