import React from 'react';

class Newblog extends React.Component {
    render() { 
        const style = {
            //fontSize: '50px',
            textAlign: 'left',
            backgroundColor: '#ffffff',
            display: 'flex' ,
            paddingBottom: '7px',
            marginBottom: '5px'

        };
        return(
            <div style={style}>

                <img id = "imgNew" src={this.props.linkImg}></img> 
                <div  id = "blogNew">
                    <div id ="titleNew">{this.props.title}</div> 
                    <div id ="postByNew">{this.props.postBy}</div> 
                    <div id = "contentNew">{this.props.content}</div>
                    
                </div>
                
            </div>
        );
    }
}


export default Newblog;