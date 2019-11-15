import React from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../../store/actions/post.actions';
 
interface Props {
  match: any;
  getPostById(id: string): void;
  state: any;
 };

class Post extends React.Component<Props> {
  componentDidMount = () => {
    this.props.getPostById(this.props.match.params.id);
  };
  render() {
    return (
      <div className="post-card-wrapper">
      <div className="post-card-img">
        <img src={this.props.state.imgSrc} alt={this.props.state.title}/>
      </div>
      <div className="post-card-title">
        <h3>{this.props.state.title}</h3>
      </div>
      <div className="post-card-description">
        {this.props.state.description}
      </div>
    </div>
    )
  }
};
const mapPropsToState = (state: any) => ({
  state: state.PostReducer.post,
});
const mapPropsToDispatch: any = {
  getPostById 
}

export default connect(mapPropsToState, mapPropsToDispatch)(Post);