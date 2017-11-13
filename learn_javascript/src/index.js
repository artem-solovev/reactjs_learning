import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArticleList from './ArticleList'
import {articles} from './fixtures'

render(
    <MuiThemeProvider>
        <ArticleList articles = {articles}/>
    </MuiThemeProvider>,
    document.getElementById('container')
)