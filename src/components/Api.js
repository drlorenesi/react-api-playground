import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import config from '../config.json';
import http from '../services/httpService';
import 'react-toastify/dist/ReactToastify.css';
// Modal
import Modal from './Modal';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Api() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const { data: posts } = await http.get(config.apiEndpoint);
        setLoading(false);
        setPosts(posts);
      } catch (err) {
        setLoading(false);
        setPosts([]);
      }
    }
    getPosts();
  }, []);

  const addPost = async () => {
    // Copy array of original posts
    const originalPosts = [...posts];
    // Optimistic post
    const newPost = {
      title: 'a',
      body: 'b',
    };
    setPosts([newPost, ...posts]);
    try {
      await http.post(config.apiEndpoint, newPost);
      throw new Error('Test error...');
    } catch (ex) {
      // Check for a specific error
      if (ex.response && ex.response.status === 400)
        alert('The post could not be added.');
      setPosts(originalPosts);
    }
  };

  // NEEDS FURTHER REVIEW...
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
      await http.put(`${config.apiEndpoint}/${post.id}`, post);
      throw new Error('Test error...');
    } catch (ex) {
      // Check for a specific error
      if (ex.response && ex.response.status === 400)
        alert('The post could not be updated.');
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
      await http.delete(`${config.apiEndpoint}/${post.id}`);
    } catch (ex) {
      // Check for a specific error
      if (ex.response && ex.response.status === 404)
        alert('This post has already been deleted.');
      // Revert to original state
      setPosts(originalPosts);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer newestOnTop />
      <h1>JSONPlaceholder</h1>
      <button className='btn btn-primary' onClick={() => addPost()}>
        Add
      </button>
      {loading ? (
        <FontAwesomeIcon className='spinner' icon={faSpinner} size='lg' spin />
      ) : (
        <table className='table table-sm table-striped table-hover'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete 1</th>
              <th>Delete 2</th>
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
                <td>
                  <Modal data={post.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
}

export default Api;
