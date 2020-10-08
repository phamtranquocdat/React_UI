import React from 'react';
import Title from './Title.js';
import Blog from './Blog.js';

class Contain extends React.Component {
    render() {
        const style = {
            flex: 6.5,
            //backgroundColor: '#ECF0F5', 
            flexDirection: 'column',
            paddingLeft: '10px',
            paddingRight: '10px'
        };
        return(
            <div style={style} id = "contain">
                <Title></Title>
                <Blog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />

                <Blog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />

                <Blog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />

                <Blog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />
                
            </div>       
        );
    }
}

export default Contain;