/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Post from './Post';

const App: React.FC = () => {
  const [posts, setPosts] = useState([] as string[]);
  const [newPost, setNewPost] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPosts([newPost, ...posts]);
    setNewPost('');
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPost(e.target.value);
  }
  return (
    <div>
      <h1>Crie seu Post abaixo:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newPost} onChange={handleTextChange} />
        <button type="submit">Criar Post</button>
      </form>
      <hr />
      {posts.map((post, index) => {
        return <Post key={index} title={post} />;
      })}
    </div>
  );
};

export default App;
