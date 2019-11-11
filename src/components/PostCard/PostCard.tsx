import React from 'react';

interface Props {
  title: string;
  description: string;
  imgSrc: string;
}

const PostCard: React.FC<Props> = (props) => {
  return(
    <div className="post-card-wrapper">
      <div className="post-card-img">
        <img src={props.imgSrc} alt={props.title}/>
      </div>
      <div className="post-card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="post-card-description">
        {props.description}
      </div>
    </div>
  )
};

export default PostCard