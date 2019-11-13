import React from 'react';
import './CreatePost.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

interface Props { }
interface State {
  title: string;
  description: string;
  img: any;
  imgSrc: any;
  [name: string]: any;
}

class CreatePost extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      img: '',
      imgSrc: ''
    }

  }
  onChangeFile = (event: any) => {
    const uploadImgs = event.target.files[0];
    const render = new FileReader();
      render.readAsDataURL(uploadImgs)
      render.onload = () => {
        this.setState({
          ...this.state,
          imgSrc: render.result
        }, () => {console.log(this.state)})
        
      }
    this.setState({
      ...this.state,
      img: uploadImgs
    }, () => console.log(this.state))

    // render.readAsDataURL(uploadImgs)

  };
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

    const inputsCreatePost = inputs.map((input, index) => {
      return <Input name={input.name} type={input.type} placeholder={input.placeholder} textarea={input.textarea} key={index} onChange={this.handleChange} />
    });
    return inputsCreatePost;
  };

  render() {
    
    
    return (
      <div className="create-post-wrapper">
        <div className="post-inputs-wrapper">
          {this.renderInputs()}
        </div>
        <div className="post-buttons-wrapper">
          <Button text="Create Post"/>
          <div className="file-upload">
            <label htmlFor="file">
              <Button text="Upload"/>
            </label>
            <input type="file" id="file" onChange={(event) => {this.onChangeFile(event)}} />
          </div>
        </div>
      </div>
    )
  }
};

export default CreatePost;