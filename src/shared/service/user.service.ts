import Firebase from '../../firebase';
import User from '../models/user.model';
class UserService {

  static signIn = async (userData: any) => {
    const signIn: any = await Firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
    const getUser: any = await Firebase.firestore().collection('users').doc(signIn.user.uid).get();
    const user: User = {
      userName: getUser.data().userName,
      email: getUser.data().email,
      uid: getUser.data().uid
    }
    return user;
  };

  static signUp = async (user: any) => {
    const setUserToAuth: any = await Firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    const newUser: User = {
      userName: user.userName,
      email: user.email,
      uid: setUserToAuth.user.uid
    };
    await Firebase.firestore().collection("users").doc(newUser.uid).set(newUser);
    return newUser;
  };

  static autoLogin = async () => {
    Firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log(user)
      //  Firebase.database().ref(`users/${user.uid}`).once('value').then(user => {
      //     this.$store.dispatch('autoLoginUser', user.val())
      //   })
      }
    })
  }
};;

export default UserService;