import React from 'react';

interface ICommentProps {
  text: string;
}

const Comment: React.FC<ICommentProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default Comment;
