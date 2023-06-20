import React, { Component } from 'react'
import "./StatusBar.css";
import Avatar from '@mui/material/Avatar';
import statusimg from "../../images/pp1.png";

 
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList: []
         }
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
         let data=[
            {
                 "username":"kartik",
                 "imageURL":"../../images/pp1.png"
            },
            {
               "username":"abcs",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"abcs",
                 "imageURL":"../../images/pp1.png"
             },
             {
                "username":"abcs",
                 "imageURL":"../../images/pp1.png"
             },
             {
                "username":"abcs",
                 "imageURL":"../../images/pp1.png"
             },
        ]
        this.setState({statusList: data})
    }
    render() {
        return (
            <div>
                <div className="statusbar__container">
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className="statusbar__status" src={item.path} />
                                <div className="statusbar__text">{item.userName}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default StatusBar;