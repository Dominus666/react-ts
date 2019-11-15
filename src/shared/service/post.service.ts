import Firebase from '../../firebase';

class PostService {
  
  static getPosts = async () => {
    let posts: object[] = [];
    const getPosts = await Firebase.firestore().collection('posts').get();
    getPosts.forEach(post => {
      posts.push(post.data())
    });
    return posts;
  };

  static getPostById = async (id: string) => {
    const getPostById = await Firebase.firestore().collection('posts').doc(id).get();
    const postById = getPostById.data();
    return postById;
  };

  static createPost = async (data: any) => {
    let post = {
      title: data.title,
      description: data.description,
    }
    const createPost = await Firebase.firestore().collection("posts").add(post);
		const createImgPost = await Firebase.storage().ref(`post-img/${createPost.id}`).put(data.img);
    const imgSrc = await Firebase.storage().ref().child(createImgPost.ref.fullPath).getDownloadURL();
    await Firebase.firestore().collection('posts').doc(createPost.id).update({ imgSrc, id: createPost.id })
    
    return {
      ...post,
      id: createPost.id,
      imgSrc
    }
  }
}

export default PostService;