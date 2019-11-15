import React from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../../store/actions/user.actions';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

interface Props { 
  signIn: (userData: any) => void;
}
interface State {
  email: string;
  password: string;
  [name: string]: string;
}

class SignIn extends React.Component<Props, State> {
  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  renderInputs = () => {
    const inputs = [
      {
        name: 'email',
        type: 'text',
        placeholder: 'email',
      },
      {
        name: 'password',
        placeholder: 'password',
        type: 'password'
      }
    ];
    return inputs.map((input, index) => {
      return <Input name={input.name} type={input.type} placeholder={input.placeholder} onChange={this.handleChange} key={index}/>
    });
  };
  signIn = () => {
    this.props.signIn(this.state)
  }
  render() {
    return (
      <div className="sign-in-wrapper">
        <div className="inputs">
          {this.renderInputs()}
        </div>
        <div className="control-btn">
          <Button text="Sign-in" onClick={this.signIn}/>
          <Link to="/auth/sign-up"><Button text="SignUp" /></Link>
          <Link to="/auth/forgot-password"><Button text="ForgetPassword" /></Link>
        </div>
      </div>
    )
  }

};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signIn: (userData: any) => dispatch(signIn(userData))
  }
};

export default connect(null, mapDispatchToProps)(SignIn);