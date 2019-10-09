import React from 'react';
import './SignIn.scss';
import Inputs from '../../shared/Inputs/Inputs';

interface State {
  email: string,
  password: string
}
interface Props { }


class SignIn extends React.Component<Props, State> {
  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    } as Pick<State, keyof State>);
    console.log(this.state)
  }

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
    ]
    const inputsSignIn = inputsInit.map((input, index) => {
      return <Inputs name={input.name} type={input.type} placeholder={input.placeholder} key={index} onChange={input.onChange}/>
    });
    return (
      <div className="sign-in-wrapper">
        <div className="sign-in-form">
          <div className="inputs">
            {inputsSignIn}
          </div>
          <div className="btn-controlls">

          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;