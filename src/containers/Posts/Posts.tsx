import React from 'react';
import {connect} from 'react-redux';
import { getPosts } from '../../store/actions/post.actions';
import Post  from '../../shared/models/post.model';
import PostCard from '../../components/PostCard/PostCard';

interface Props {
  getPosts: any;
  state: any;
}

class Posts extends React.Component<Props> {
  componentDidMount = () => {
    this.props.getPosts();
  };
  render() {
    const posts = this.props.state.posts.map((post: Post) => {
      return <PostCard title={post.title} description={post.description} imgSrc={post.imgSrc} key={post.id} />
    })
    return(
      <div className="posts-wrapper">
        {posts}
      </div>
    )
  }
};

const mapStateToProps = (state: any) => ({
  state: state.PostReducer,
});
function mapDispatchToProps(dispatch: any) {
	return {
		getPosts: () => dispatch(getPosts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);