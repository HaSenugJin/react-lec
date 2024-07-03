import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SyNav = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Nav(props) {
  return (
    <SyNav>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/login">로그인화면가기</Link>
    </SyNav>
  );
}

export default Nav;