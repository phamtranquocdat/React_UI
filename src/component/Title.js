import React from 'react';

class Title extends React.Component {
    render() {
        const style = {

            textAlign: 'left',
            fontSize: '28px',
            fontWeight: 'bolder'
        
        };
        return(
            <div style={style}>
                <p>HOC REATCTJS TU CO BAN DEN NANG CAO</p>
            </div>
        );
    }
}

export default Title;