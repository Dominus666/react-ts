import React from 'react';
import './SignIn.scss';
import Firebase from '../../../firebase';
import { connect } from 'react-redux';
import userModel from '../../../models/user.models';
import notificationsModel from '../../../models/notifications.models';
import * as actionsAuth from '../../../redux/actions/auth.actions';
import * as actionsNotification from '../../../redux/actions/common.actions';
import Inputs from '../../shared/Inputs/Inputs';
import Buttons from '../../shared/Buttons/Buttons';

interface State {
  email: string;
  password: string;
  confirmPassword: string;
  role: 0;
}
interface Props { 
  setNotification: (notification: notificationsModel) => void;
}


class SignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
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
  signUp = async () => {
    try {
      
      await Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    }catch(err) {
      this.props.setNotification({type: 'error', message: err.message})
    }  
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
        name: 'userName',
        type: 'text',
        placeholder: 'userName',
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
        text: 'signUp',
        className: 'btn',
        onClick: this.signUp
      },
    ];
    const inputsSignIn = inputsInit.map((input, index) => {
      return <Inputs name={input.name} type={input.type} placeholder={input.placeholder} key={index} onChange={input.onChange} />
    });
    const buttonsSignIn = buttonsInit.map((btn, index) => {
      return <Buttons text={btn.text} className={btn.className} onClick={btn.onClick} key={index} />
    });
    return (
      <div className="sign-up-wrapper">
        <div className="sign-up-form">
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
  signIn: (user: userModel) => dispatch(actionsAuth.signIn(user)),
  setNotification: (notification: notificationsModel) => dispatch(actionsNotification.setNotification(notification))
});

export default  connect(mapStateToProps, mapDispatchToProps)(SignUp);