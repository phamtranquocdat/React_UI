import React from 'react';
import Title from './Title.js';
import Newblog from './Newblog.js';

class News extends React.Component {
    render() {
        const style = {
            //fontSize: '50px',
           
            //backgroundColor: '#ffff1f' ,
            
            //width: '100%',
            flex: '1',
            flexDirection: 'column',
            paddingLeft: '0px',
            paddingRight: '0px',
            fontSize: '12px',
            
        };
        return (
            <div style={style}>
                <h1>BAI VIET MOI</h1>
                <Newblog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />

                <Newblog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />

                <Newblog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />

                <Newblog
                    linkImg = "./logo192.png"
                    title="HUONG DAN HOC REACTJS"
                    postBy="Posted by Nguyen Van A | Th5 8,2020 | Javascript"
                    content = "This is content..."
                />
            </div>
        );
    }
}

export default News;