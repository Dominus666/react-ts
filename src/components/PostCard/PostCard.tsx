import React from 'react';
import './PostCard.scss';
import { withRouter, RouteComponentProps, Link} from 'react-router-dom';
import Button from '../Button/Button';

interface Props extends RouteComponentProps<any>{
  title: string;
  description: string;
  imgSrc: string;
  id: string;
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
      <Link to={`/post/${props.id}`}><Button text="Read More"/></Link>
    </div>
  )
};

export default withRouter(PostCard)