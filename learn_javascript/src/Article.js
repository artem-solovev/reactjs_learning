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
            isArticleOpen: false,
            isCommentsOpen: false
        }
    }

    render() {
        const { article } = this.props;
        const { comments } = article;

        const { isArticleOpen } = this.state;
        const { isCommentsSectionOpen } = this.state;

        return (

            <Card>
                <CardHeader
                title = { article.title }
                subtitle = { article.subtitle }
                actAsExpander = { true }
                showExpandableButton = { false }
                />

                <CardActions>
                    <FlatButton label="Open" onClick = { this.toggleArticleOpen }/>
                    <FlatButton label="Show comments" onClick = { this.toggleCommentsOpen }/>
                </CardActions>

                { this.getArticleBody() }
            </Card>
        )
    }

    getArticleBody() {
        if ( !this.state.isArticleOpen ) {
            return null;
        }

        const { article } = this.props;

        return <div>
                    <CardText expandable={true}>{ article.text }</CardText>
                    { this.getCommentsBody() }
                </div>;
    }

    getCommentsBody() {
        if ( !this.state.isCommentsSectionOpen ) {
            return null;
        }
        
        const { comments } = this.props.article;
        
        return <List><CommentsList comments = { comments } /></List>
    }

    
    toggleArticleOpen = () => {
        this.setState( {
            isArticleOpen: !this.state.isArticleOpen
        } )
    }

    toggleCommentsOpen = () => {
        this.setState( {
            isCommentsSectionOpen: !this.state.isCommentsSectionOpen
        } )
    }
}