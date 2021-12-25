import React, { Component } from "react";

const Like = (props) => {
  const likeClass = props.liked ? "fa fa-heart" : "fa fa-heart-o";

  return <i className={likeClass} onClick={props.onLike}></i>;
};

export default Like;
