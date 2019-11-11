import Firebase from '../../firebase';

class Post {
  static getPosts = async () => {
    let posts: object[] = [];
    const getPosts = await Firebase.firestore().collection('posts').get();
    getPosts.forEach(post => {
      posts.push(post.data())
    });
    return posts;
  };
}

export default Post;