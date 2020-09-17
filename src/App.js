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
    // Copy original post
    const index = posts.indexOf(post);
    const originalPost = { ...posts[index] };
    // Optimistic update
    post.title = 'Updated';
    const updatedPosts = [...posts];
    updatedPosts[index] = { ...post };
    setPosts(updatedPosts);
    try {
      await axios.put(`${apiEndpoint}/${post.id}`, post);
      throw new Error('Test error...');
    } catch (err) {
      alert('Something went wrong!');
      console.error(err);
      // Revert to original state
      const revertPosts = [...posts];
      revertPosts[index] = originalPost;
      setPosts(revertPosts);
    }
  };

  const deletePost = async (post) => {
    // Copy array of original posts
    const originalPosts = [...posts];
    // Optimistic Delete
    setPosts(posts.filter((p) => p.id !== post.id));
    try {
      await axios.delete(`${apiEndpoint}/${post.id}`);
      throw new Error('Test error...');
    } catch (err) {
      alert('Something went wrong!');
      console.error(err);
      // Revert to original state
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
