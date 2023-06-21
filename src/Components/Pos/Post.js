import React, { Component } from 'react'
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import postimage from "../../images/post.jpg"; 

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="post__container">
                {/* Header */}
                <div className="post__header">
                    <Avatar className="post__image" src="" />
                    <div className="post__username">Username</div>
                </div>
                {/* Image */}
                <div></div>
                {/* Analytics */}
                <div></div>
                {/* Comment Section */}
                <div></div>

            </div>
        );
    }
}

export default Post;