/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Comment from './Comment';

interface IPostProps {
  title: string;
}

const Post: React.FC<IPostProps> = ({ title }) => {
  const [comments, setComments] = useState([] as string[]);
  const [newComment, setNewComment] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setComments([newComment, ...comments]);
    setNewComment('');
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewComment(e.target.value);
  }

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newComment} onChange={handleTextChange} />
        <button type="submit">Comentar</button>
      </form>
      {comments.map((comment, index) => {
        return <Comment key={index} text={comment} />;
      })}
    </div>
  );
};

export default Post;
