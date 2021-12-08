import React, { Component } from 'react';
import TaoBot from './images/TaoBot.png'
import newgroup from './images/newgroup.png'
import newgroup2 from './images/newgroup2.png'
import chatq from './images/chatq.png'
import ketqua from './images/ketqua.png'
class HDTaoBot extends Component {
    render() {
        return (
            <div>
                <h1 style={{fontSize:30,color:'#34495e'}} >Hướng dẫn tạo BOT và gửi thông báo Telegram</h1>
                <p style={{fontSize:15,color:'#2980b9'}} >Tạo bot telegram</p>
                <p>Bạn đăng nhập vào Telegram và tim BotFather, sau đó gõ /newbot để tạo và đặt tên cho bot như hình dưới. Sau khi xong bạn sẽ nhận được 1 mã token.</p>
                <img src={TaoBot} />
                <p style={{marginTop:35,marginBottom:35}} >Sau khi tạo BOT xong bạn thêm bot vào 1 Group để nhận thông báo từ bot</p>
                <img src={newgroup} />
                <img src={newgroup2} />
                <p style={{marginTop:35,marginBottom:35}}>Tiếp theo bạn cần khởi động bot bằng cách chat với bot trong Group :  /my_id @TenCuaBot</p>
                <img src={chatq} />
                <p style={{marginTop:35,marginBottom:35}}> Để gửi thông báo về Group bạn cần phải có thêm Chat ID, để lấy CHAT ID bạn truy cập vào link bên dưới, thay token bạn vào</p>
                <p style={{color:"#e67e22"}}>https://api.telegram.org/bot"token"/getUpdates</p>
                <p>Kết quả trả về sẽ có phần chat id như ảnh (bạn có thể chọn id chat để nhận thông báo , 1 là của group ,2 là của bot)</p>
                <img src={ketqua} />
                <p style={{marginTop:35,marginBottom:35}}>Sau khi có Token và Chat ID - bạn hãy đến phần Cấu hình Bot để cài đặt và test bot</p>
            </div>
        );
    }
}

export default HDTaoBot;