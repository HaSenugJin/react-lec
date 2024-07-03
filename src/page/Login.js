import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store";

function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function loginProcess() {
    // 1. form 태그 username, password 가져오기

    // 2. 유효성 검증

    // 3. 통신

    // 4. store 상태변경
    dispatch(login());

    // 5. 화면 이동
    navigate("/loginComplete");
  }

  function move() {
    navigate("/loginComplete");
  }

  return (
    <div>
      <button onClick={loginProcess}>로그인</button>
      <button onClick={move}>로그인안하고 넘어가기</button>
    </div>
  );
}

export default Login;