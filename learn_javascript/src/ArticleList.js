import React from 'react';
import Article from './Article';
import {List, ListItem} from 'material-ui/List';


export default function ArticleList( {articles} ) {
    const articleElements = articles.map( (article) => <div key = {article.id}><Article article = {article} /></div> )

    return (
        <List>
            {articleElements}
        </List>
    )
}