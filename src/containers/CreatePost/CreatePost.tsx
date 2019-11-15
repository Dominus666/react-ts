import React from 'react';
import './CreatePost.scss';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/post.actions';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

interface Props { 
  createPost(data: Object): void;
  loading: boolean;
  history: any;
}
interface State {
  title: string;
  description: string;
  img: any;
  imgSrc: any;
  [name: string]: string;
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
  };
  componentDidUpdate(prevProps:Props) {
    if (this.props.loading !== prevProps.loading && this.props.loading === false) {
      this.props.history.push('/');
    }
  }
  onChangeFile = (event: any) => {
    const uploadImgs = event.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(uploadImgs)
    render.onload = () => {
      this.setState({
        ...this.state,
        imgSrc: render.result,
        img: uploadImgs
      })
    }
  };
  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  createPost = () => {
    this.props.createPost(this.state)
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
          {
            !this.props.loading 
            ? <Button text="Create Post" onClick={this.createPost}/>
            : <div>Loading...</div>
          }
          
          <div className="file-upload">
            <label htmlFor="file">
              Upload
            </label>
            <input type="file" id="file" name="img" onChange={(event) => { this.onChangeFile(event) }} />
          </div>
        </div>
        {
          this.state.imgSrc
            ? <div className="img-wrapper">
              <img src={this.state.imgSrc} alt="img" />
            </div>
            : null
        }
      </div>
    )
  }
};
const mapStateToProps = (state:any) => ({
  loading: state.CommonReducer.loading
});
const mapDispatchToProps = (dispatch: any) => {
	return {
		createPost: (data: Object) => dispatch(createPost(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);