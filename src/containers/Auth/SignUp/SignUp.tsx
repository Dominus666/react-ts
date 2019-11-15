import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../../store/actions/user.actions';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

interface Props { 
  signUp: (user: any) => void;
}
interface State {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [name: string]: string;
}

class SignUn extends React.Component<Props, State> {
  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  confirmPassword = (password: string, confirmPassword: string) => {
    if(password === confirmPassword) {
      return password
    }
  };
  signUp = () => {
    const user = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signUp(user)
  };
  renderInputs = () => {
    const inputs = [
      {
        name: 'userName',
        type: 'text',
        placeholder: 'user-name',
      },
      {
        name: 'email',
        type: 'text',
        placeholder: 'email',
      },
      {
        name: 'password',
        placeholder: 'password',
        type: 'password'
      },{
        name: 'confirmPassword',
        placeholder: 'confirm-password',
        type: 'password'
      },
    ];
    return inputs.map((input, index) => {
      return <Input name={input.name} type={input.type} placeholder={input.placeholder} onChange={this.handleChange} key={index}/>
    });
  };
  render() {
    return (
      <div className="sign-up-wrapper">
        <div className="inputs">
          {this.renderInputs()}
        </div>
        <div className="control-btn">
          <Button text="Sign-Up" onClick={this.signUp}/>
        </div>
      </div>
    )
  }

};
const mapDispatchToProps = (dispatch: any) => {
  return {
    signUp: (user: any) => dispatch(signUp(user))
  }
}

export default connect(null, mapDispatchToProps)(SignUn);