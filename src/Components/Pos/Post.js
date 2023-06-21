import React, { Component } from 'react'
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import postimage from "../../images/post.jpg"; 
import love from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 

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
                <div>
                    <img src={postimage} width="615px" alt="" /> 
                </div>
                {/* Analytics */}
                <div>
                <div style={{"marginLeft":"10px"}}>
                  <img src={love} className="post_reactimage" alt=""/>
                  <img src={comment} className="post_reactimage" alt=""/>
                  <img src={share} className="post_reactimage" alt=""/>
                </div>
                <div style={{ "fontWeight":"bold","marginLeft":"20px  "}}>
                  7798 likes     
                </div>
                </div>
                {/* Comment Section */}
                <div></div>

            </div>
        );
    }
}

export default Post;