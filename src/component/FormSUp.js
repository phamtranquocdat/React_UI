import React from 'react';

class FormSUp extends React.Component {
    render() {
        const style = {
            backgroundColor: '#F47555', 
            marginBottom: '30px',
            width: '100%',
            flex: '1',
            marginTop: '34px'
           
        };
        return(
            <div style = { style }>
                <div id="headerSUp">DANG KY DE NHAN BAI VIET MOI</div>
                <div id ="intro">cong nghe dang thay doi nhanh chong, 
                    hay cung nhau vuon ra the gioi
                    voi nhung bai viet chat luong
                    tu Fullstack Station ban nhe
                </div>
                <div id ="formInput">
                    <input id ="ten" value="Nhap ten ban"></input>
                    <input id ="email" value="Nhap email cua ban"></input>
                </div>
                <div id="check">
                    <input type="checkbox"></input>
                    <label id ="lable">Toi dong y dieu khoan</label>
                </div>
                <div>
                    <button id = "btnDK">Dang ky</button>
                </div>

                <div id = "thongbao">
                    Ban se nhan duoc email thong bao
                    khi co bai viet moi, minh khong spam
                    vi minh cung rat ghet :)
                </div>
            </div>
                
        );
    }
}

export default FormSUp;