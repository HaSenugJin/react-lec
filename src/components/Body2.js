import React, { useState } from "react";

function Body2(props) {
    let {username, password} = props;
    const [user, setUser] = useState({
    name: "홍길동",
    number: "0102222"
    });

    const changeUser = () => {
    setUser({ name:"임꺽정", number: "0105555"});
    };

    return (
    <div>
        <div>
            유저네임 : {username}, 패스워드 : {password}
        </div>
        <div>이름 : {user.name}</div>
        <div>전화번호 : {user.number}</div>
        <button onClick={() => changeUser()}>유저정보변경</button>
    </div>
    );
}

export default Body2;