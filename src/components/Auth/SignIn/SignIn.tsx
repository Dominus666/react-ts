import React from 'react';
import './SignIn.scss';
import { connect } from 'react-redux';
import userModel from '../../../models/user.models';
import * as actions from '../../../redux/actions/auth.actions';
import Inputs from '../../shared/Inputs/Inputs';
import Buttons from '../../shared/Buttons/Buttons';

interface State {
  email: string;
  password: string;
  role: 0;
}
interface Props { 
  signIn: (user: userModel) => void;
}


class SignIn extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      role: 0
    }
  }
  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    } as Pick<State, keyof State>);
  }
  signIn = () => {
    this.props.signIn(this.state)
  };
  render() {
    const inputsInit = [
      {
        name: 'email',
        type: 'email',
        placeholder: 'email',
        onChange: this.handleChange
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'password',
        onChange: this.handleChange
      }
    ];
    const buttonsInit = [
      {
        text: 'signIn',
        className: 'btn',
        onClick: this.signIn
      }
    ];
    const inputsSignIn = inputsInit.map((input, index) => {
      return <Inputs name={input.name} type={input.type} placeholder={input.placeholder} key={index} onChange={input.onChange} />
    });
    const buttonsSignIn = buttonsInit.map((btn, index) => {
      return <Buttons text={btn.text} className={btn.className} onClick={btn.onClick} key={index} />
    });
    return (
      <div className="sign-in-wrapper">
        <div className="sign-in-form">
          <div className="inputs">
            {inputsSignIn}
          </div>
          <div className="btn-controlls">
            {buttonsSignIn}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
    user: state.AuthReducer,
})
const mapDispatchToProps = (dispatch: any) => ({
  signIn: (user: userModel) => dispatch(actions.signIn(user))
});

export default  connect(mapStateToProps, mapDispatchToProps)(SignIn);