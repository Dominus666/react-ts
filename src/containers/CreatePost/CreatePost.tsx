import React from 'react';
import './CreatePost.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

interface Props { }
interface State {
  title: string;
  description: string;
  img: any[];
  [name: string]: any;
}

class CreatePost extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      img: []
    }

  }
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
  public buttons = [
    {
      text: 'Create Post',
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
      return <Input name={input.name} type={input.type} placeholder={input.placeholder} textarea={input.textarea} key={index} onChange={this.handleChange} />
    });
    const buttonsCreatePost = this.buttons.map((button, index) => {
      return <Button text={button.text} key={index} />
    });
    return (
      <div className="create-post-wrapper">
        <div className="post-inputs-wrapper">
          {inputsCreatePost}
        </div>
        <div className="post-buttons-wrapper">
          {buttonsCreatePost}
          
        </div>
      </div>
    )
  }
};

export default CreatePost;