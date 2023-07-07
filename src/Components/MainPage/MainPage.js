import React, { Component } from 'react'
import "./MainPage.css";
import Post from '../Pos/Post';
import uploadImage from "../../images/upload.png";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray:[] 
        };
    }
    
    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{ //API backend
        let data=[
           {
                "postId":"123456",
                "userName": "kkkk",
                "postImageURL":"https://cdn-0.practicaltyping.com/wp-content/uploads/2022/04/leviacker.jpg",
                "timeStamp":"123456",
                "likes":"1234"
           },
           {
                "postId":"123456",
                "userName": "kkkk",
                "postImageURL":"https://cdn-0.practicaltyping.com/wp-content/uploads/2022/04/leviacker.jpg",
                "timeStamp":"123456",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName": "kkkk",
                "postImageURL":"https://cdn-0.practicaltyping.com/wp-content/uploads/2022/04/leviacker.jpg",
                "timeStamp":"123456",
                "likes":"1234"
            }
       ];
       this.setState({postArray:  data});
   }   

    render() {
        return (
            <div>
                <div className="mainpage__container ">
                    <div className="mainpage__divider"></div>
                    <div className="fileupload">
                        <label for="file-upload">
                        <img className="mainpage__uploadicon" src={uploadImage} alt=""/>
                        </label>
                        <input id="file-upload" type="file" />
                    </div>
                    <div className="mainpage__divider"></div>  
                </div>
                {
                     this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;