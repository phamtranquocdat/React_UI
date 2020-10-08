import React from 'react';

class Blog extends React.Component {
    render() { 
        const style = {
            //fontSize: '50px',
            textAlign: 'left',
            backgroundColor: '#ffffff',
            display: 'flex' ,
            paddingBottom: '10px',
            marginBottom: '20px'

        };
        return(
            <div style={style}>

                <img id = "img" src={this.props.linkImg}></img> 
                <div  id = "blog">
                    <div id ="title">{this.props.title}</div> 
                    <div id ="postBy">{this.props.postBy}</div> 
                    <div id = "content">{this.props.content}</div>
                    <div id = "button"> 
                        <button>Read More</button>
                    </div> 
                </div>
                
            </div>
        );
    }
}


export default Blog;