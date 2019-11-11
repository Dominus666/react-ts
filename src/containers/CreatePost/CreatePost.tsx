import React from 'react';
import './CreatePost.scss'
import Input from '../../components/Input/Input';

interface Props {}
interface State {
  title: string;
  description: string;
  [name: string]: any;
}

class CreatePost extends React.Component<Props, State> {
  public inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: 'title',
    },
    {
      name: 'description',
      placeholder: 'description',
      textarea: true
    }
  ];
  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    const inputsCreatePost = this.inputs.map((input, index) => {
      return <Input name={input.name} type={input.type} placeholder={input.placeholder} textarea={input.textarea} key={index} onChange={this.handleChange}/>
    });
    return (
      <div className="create-post-wrapper">
        {inputsCreatePost}
      </div>
    )
  }
};

export default CreatePost;