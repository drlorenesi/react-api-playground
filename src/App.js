import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const { data: posts } = await axios.get(apiEndpoint);
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, []);

  const addPost = async () => {
    try {
      const post = {
        title: 'a',
        body: 'b',
      };
      const { data: newPost } = await axios.post(apiEndpoint, post);
      setPosts([newPost, ...posts]);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (post) => {
    const originalPosts = { ...posts };
    // Optimistic Update
    post.title = 'Updated!';
    setPosts([...posts]);
    try {
      await axios.put(`${apiEndpoint}/${post.id}`, post);
      // console.log(originalPosts);
      // const index = posts.findIndex((p) => p.id === post.id);
    } catch (error) {
      alert('Something went wrong!');
      console.error(error);

      // setPosts(originalPosts);
    }
  };

  const deletePost = async (post) => {
    // Review
    const originalPosts = posts;
    // Optimistic Delete
    setPosts(posts.filter((p) => p.id !== post.id));
    try {
      await axios.delete(`${apiEndpoint}/${post.id}`);
    } catch (error) {
      alert('Something went wrong!');
      console.error(error);
      setPosts(originalPosts);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <main className='container-fluid'>
        <h1>React App</h1>
        <button className='btn btn-primary' onClick={() => addPost()}>
          Add
        </button>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className='btn btn-info btn-sm'
                    onClick={() => updatePost(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => deletePost(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
}

export default App;
