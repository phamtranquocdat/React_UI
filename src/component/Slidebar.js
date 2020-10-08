import React from 'react';
import FormSUp from './FormSUp.js';
import News from './News.js';

class Slidebar extends React.Component {
    render() {
        const style = {
            //fontSize: '50px',
            //float: 'right',
            flex: '2',
            //backgroundColor: '#ECF0F5' ,
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'center',
            //justifyContent: 'space-around',
            alignItems: 'center',
            height: '95vh',
            paddingRight: '50px',
            
            
        };
        return(
            <div id ="slidebar" style={style}>
                <FormSUp></FormSUp>
                <News></News>
            </div>
        );
    }
}

export default Slidebar;