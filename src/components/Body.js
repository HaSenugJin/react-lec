import React, { useState } from "react";
function Body() {
  const [number, setNumber] = useState("0102222");
  const changeNumber = () => {
    setNumber("0103333");
  };
  return (
    <div>
      <div>이름 : 홍길동</div>
      <div>전화번호 : {number}</div>
      <button onClick={changeNumber}>전화번호변경</button>
    </div>
  );
}
export default Body;