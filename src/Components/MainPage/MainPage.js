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
                <Post />
            </div>
        );
    }
}

export default MainPage;