import React, { Component } from 'react'

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
            <div>
                <h3>{ article.title }</h3>
                <button onClick = { this.toggleArticleOpen }>open</button>
                { this.getArticleBody() }
            </div>
        )
    }

    getArticleBody() {
        if ( !this.state.isArticleOpen ) {
            return null;
        }

        const { article } = this.props;

        return <div>
                    <section>{ article.text }</section>
                    <a href="#" onClick = { this.toggleCommentsOpen }>Show comments</a>
                    { this.getCommentsBody() }
                </div>;
    }

    getCommentsBody() {
        if ( !this.state.isCommentsSectionOpen ) {
            return null;
        }
        const { comments } = this.props.article;

        const commentsElements = comments.map( (comment) => <li key = {comment.id}><i>{ comment.user }</i><br />{ comment.text }</li> )
        
        return (
            <ul>
                {commentsElements}
            </ul>
        )
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