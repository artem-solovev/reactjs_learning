import React, { Component } from 'react';
import Article from './Article';
import Comment from './Comment';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import FlatButton from 'material-ui/FlatButton';


class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const text = this.state.isOpen ? 'hide comments' : 'show comments';

        return (
            <List>
                <Subheader>Comments</Subheader>
                <FlatButton label = { text } onClick = { this.toggleOpen }/>
                { this.getBody() }
            </List>
        )
    }

    getBody() {
        if ( !this.state.isOpen ) {
            return null;
        }

        const { comments } = this.props;

        if ( !comments || !comments.length ) {
            return ( 
                <List>
                    <Subheader>No comments yet</Subheader>
                </List>
            )
        }

        return (
            <List>
                { comments.map( comment => <div key = {comment.id}><Comment comment = { comment } /></div> ) }
            </List>
        )

    }

    toggleOpen = ev => this.setState( {
        isOpen: !this.state.isOpen
    } )
}

export default CommentList;