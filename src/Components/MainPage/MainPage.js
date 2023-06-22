import React, { Component } from 'react'
import Post from '../Pos/Post';

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