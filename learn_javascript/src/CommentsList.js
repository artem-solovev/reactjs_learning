import React from 'react'
import Article from './Article'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
  );
  
  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
  );

export default function CommentsList( {comments} ) {
    let logo = <Avatar src = { require( "./images/user_avatar.png" ) } />

    const commentElements = comments.map( (comment) =>
        <div key = {comment.id}>
            <ListItem
                    leftAvatar={logo}
                    rightIconButton={rightIconMenu}
                    primaryText="Some theme"
                secondaryText={
                    <p>
                    <span style={{color: darkBlack}}>{ comment.user }</span> -- 
                    { comment.text }
                    </p>
                }
                secondaryTextLines={1}
                />,
                <Divider inset={true} />
        </div>
    )

    return (
        <List>
            <Subheader>Comments</Subheader>
            {commentElements}
        </List>
    )
}