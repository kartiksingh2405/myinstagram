import React, { Component } from 'react'
import Post from '../Pos/Post';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Post id="1234" username="kartik" postImage="https://cdn-0.practicaltyping.com/wp-content/uploads/2022/04/leviacker.jpg" likes="1234 "/>
                <Post id="1234" username="kartik" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="1234 "/>
                <Post id="1234" username="kartik" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="1234 "/>
                <Post id="1234" username="kartik" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="1234 "/>

                {/*<Post />
                <Post />
                <Post />
        <Post />*/}

            </div>
        );
    }
}

export default MainPage;