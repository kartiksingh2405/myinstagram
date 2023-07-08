import React, { Component } from 'react'
import "./MainPage.css";
import Post from '../Pos/Post';
import uploadImage from "../../images/upload.png";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadTask} from 'firebase/storage';

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
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"123456",
                "likes":"1234"
           },
           {
                "postId":"123456",
                "userName": "kkkk",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"123456",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName": "kkkk",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"123456",
                "likes":"1234"
            }
       ];
       this.setState({postArray:  data});
    }   



upload = (event) => {
  let image = event.target.files[0];
  if (image == null || image == undefined)
    return;
    const storage = getStorage();
  var storageRef = ref(storage, "images/" + image.name);
  var uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on(
    "state_changed",
    function (snapshot) {
      // Progress updates can be handled here
    },
    function (error) {
      // Error handling can be done here
    },
    function () {
      getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
        // Handle the download URL here
      });
    }
  );
};   
            

    render() {
        return (
            <div>
                <div className="mainpage__container ">
                    <div className="mainpage__divider"></div>
                    <div className="fileupload">
                        <label for="file-upload">
                            <img className="mainpage__uploadicon" src={uploadImage} alt=""/>
                        </label>
                        <input onChange={this.upload} id="file-upload" type="file"/>
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