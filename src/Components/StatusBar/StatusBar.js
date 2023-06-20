import React, { Component } from 'react'
import "./StatusBar.css";
import Avatar from '@mui/material/Avatar';
import statusimg from "../../images/pp1.png";
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="statusbar__container">
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg} />
                        <div className="statusbar__text">Kartik</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;