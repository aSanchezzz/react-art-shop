import React from 'react'

import PostDescription from './post_description';

//create functional component since not changing state
const ItemList = (props) => {

  //map helper allows a loop like: for(i=0; i < array.legnth; i++){...}
  const items = props.news.map((item)=>{
    return(
      <PostDescription key={item.id} item={item}/>
    )
  })

  return(
    <div>
      {items}
    </div>
  )
}

export default ItemList;
