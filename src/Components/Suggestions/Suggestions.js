import React, { Component } from 'react'
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';
import imageSrc from "../../images/pp1.png"

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div>Suggestions for you</div>
                    </div>
                    <div>
                        <Avatar src={imageSrc} className="info__image"/>
                        <div>Friend 1</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Suggestions;