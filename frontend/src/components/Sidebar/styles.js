import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #293949;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;