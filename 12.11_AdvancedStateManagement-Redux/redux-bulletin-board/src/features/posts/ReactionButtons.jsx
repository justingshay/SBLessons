import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍' ,
    wow: '😮' ,
    heart: '💟',
    rocket: '🚀',
    coffee: '🥤'
}

import React, { use } from 'react';

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                className='reaction-btn'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons;