import React from 'react';
import './Posts.scss';
import {connect} from 'react-redux';

import UserService from '../../shared/service/user.service';
import { getPosts } from '../../store/actions/post.actions';
import Post  from '../../shared/models/post.model';
import PostCard from '../../components/PostCard/PostCard';

interface Props {
  getPosts: any;
  state: any;
  loading: boolean;
}

class Posts extends React.Component<Props> {
  componentDidMount = () => {
    this.props.getPosts();
    UserService.autoLogin();
    console.log(this.props)
  };
  renderPostCard = () => {
    const posts = this.props.state.posts.map((post: Post, index: any) => {
      return <PostCard 
              title={post.title} 
              id={post.id} 
              description={post.description} 
              imgSrc={post.imgSrc} 
              key={index} 
            />
    })
    return posts
  };
  render() {
    return(
        !this.props.loading 
        ? <div className="posts-wrapper">
          {this.renderPostCard()}
        </div>
        : <div>Loading...</div>
    )
  }
};

const mapStateToProps = (state: any) => ({
  state: state.PostReducer,
  loading: state.CommonReducer.loading
});
function mapDispatchToProps(dispatch: any) {
	return {
		getPosts: () => dispatch(getPosts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);