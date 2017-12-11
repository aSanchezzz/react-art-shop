import React from 'react';

const PostDescription = ({item}) =>{
  return(
    <div className="post_description">
      <h3>{item.title}</h3>
      <div>
        {item.feed}
      </div>
    </div>
  )
}

export default PostDescription;
