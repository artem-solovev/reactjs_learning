import React from 'react'
import Article from './Article'

export default function CommentsList( {comments} ) {
    const commentElements = comments.map( (comment) => <li key = {comment.id}><i>{ comment.user }</i><br />{ comment.text }</li> )

    return (
        <ul>
            {commentElements}
        </ul>
    )
}