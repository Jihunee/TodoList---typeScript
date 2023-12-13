import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Warpper>
      <Title>TodoList</Title>
      <Title>TypeScript</Title>
    </Warpper>
  );
}

export default Header;

const Warpper = styled.div`
  width: 100%;
  height: 100px;
  background-color: salmon;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: blanchedalmond;
`;
