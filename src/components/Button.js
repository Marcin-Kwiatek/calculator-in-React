import React,{Component} from 'react';
import './Button.css';

class Button extends Component {
  render(){
    return (
      <div className={`button ${this.isOperator
      (this.props.children) ? "" : "operator"}`}
      onClick={() => this.props.handleClick(this.props.children)}
      >
          {this.props.children}
      </div>
    )}
    isOperator = val => {
      return !isNaN(val) || val ==='.' || val ==='='
  }
}

export default Button;
