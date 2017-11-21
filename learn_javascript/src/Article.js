import React, { Component } from 'react'
import CommentsList from './CommentsList'
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
  

export default class Article extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;

        return (
            <Card>
                <CardHeader
                title = { article.title }
                subtitle = { article.subtitle }
                actAsExpander = { true }
                showExpandableButton = { false }
                />

                <CardActions>
                    <FlatButton label="Open" onClick = { this.toggleOpen }/>
                </CardActions>

                { this.getBody() }
            </Card>
        )
    }

    getBody() {
        if ( !this.state.isOpen ) {
            return null;
        }
        
        const { article } = this.props;

        return <div>
                    <CardText expandable = { true }>{ article.text }</CardText>
                    <List><CommentsList comments = { article.comments } /></List>
                </div>;
    }
    
    toggleOpen = () => {
        this.setState( {
            isOpen: !this.state.isOpen
        } )
    }
}