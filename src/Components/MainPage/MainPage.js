import React, { Component } from 'react';
import "./MainPage.css";
import Post from '../Pos/Post';
import uploadImage from "../../images/upload.png";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadTask } from 'firebase/storage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      progressBar: "",
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const thisContext=this;

    //    let data=[
    //       {
    //            "postId":"123456",
    //            "userName": "kkkk",
    //            "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
    //            "timeStamp":"123456",
    //            "likes":"1234"
    //       },
    //       {
    //            "postId":"123456",
    //            "userName": "kkkk",
    //            "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
    //            "timeStamp":"123456",
    //            "likes":"1234"
    //        },
    //        {
    //            "postId":"123456",
    //            "userName": "kkkk",
    //            "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
    //            "timeStamp":"123456",
    //            "likes":"1234"
    //        }
    //   ];

    fetch('http://localhost:8080/post')
            .then(response => response.json())
            .then(data => {
                thisContext.setState({postArray: data});
        });
  }



  upload = (event) => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined)
      return;
    const storage = getStorage();
    var storageRef = ref(storage, "images/" + image.name);
    var uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        thisContext.setState({ progressBar: progress });
      },
      function (error) {
        // Error handling can be done here
      },
      function () {
        getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
          console.log(downloadURL);

          let payload = {

            "postId": Math.floor(Math.random() * 100000).toString(),
            "userId": JSON.parse(localStorage.getItem("users")).uid,
            "postPath": downloadURL,
            "timestamp": new Date().getTime(),
            "likeCount": "0"

          }

          const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }

          fetch("http://localhost:8080/post", requestOptions)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              thisContext.getPost();
            })
            .catch(error => {

            })

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
            <label htmlFor="file-upload">
              <img className="mainpage__uploadicon" src={uploadImage} alt="" />
            </label>
            <input onChange={this.upload} id="file-upload" type="file" />
          </div>
          <div className="mainpage__divider"></div>
          <div className="upload_text">{this.state.progressBar}</div>
        </div>
        {
          this.state.postArray.map((item, index) => (
            <Post key={item.postId} id={item.postId} userName={item.userName} postImage={item.postPath} likes={item.likeCount} />
          ))
        }
      </div>
    );
  }
}

export default MainPage;
