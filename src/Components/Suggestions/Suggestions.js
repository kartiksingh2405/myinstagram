import React, { Component } from 'react'
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';
import imageSrc1 from "../../images/pp1.png"
import imageSrc2 from '../../images/pp2.png'
import imageSrc3 from '../../images/pp3.jpeg'

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="suggestions__container">
                    <div className="suggestions__header">
                        <div>Suggestions for you</div>
                    </div>
                    <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">Friend 1</div>
                    </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Suggestions;