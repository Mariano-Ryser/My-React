import React, {useState, useEffect} from 'react';
import getPosts from './AHelpers/getPosts';
import getUser from './AHelpers/getUser';

// const initialUser = {
//   name:"Mariano",
//   username:"Ryser",
//   email:"rysermariano@gmail.com"
// }

// const initialPosts = [
//   { id:1, title:"Post 1"},
//   { id:2, title:"Post 2"},
// ]

const Act2 = () => {
  const [user, setUser] = useState({});
  const [posts, setsPosts] = useState([]);

  const updateUser = () => {
    getUser()
        .then((newUser) => {
            setUser(newUser);
        })
  }

  const updatePosts = () => {
      getPosts(user.id)
          .then((newPosts)=> {
            setsPosts(newPosts);
          })
  }

  useEffect(() => {
      updateUser();
  }, []);

  useEffect(()=>{
      updatePosts();
  },[user, updatePosts])

  return (
    <div>
      <button onClick={updateUser}>
        Another User
      </button>
      <h1>{user.name + " " + user.username}</h1>
      <h2>{user.email}</h2>

      <br/>

      <h2>Posts - user : {user.id}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default Act2