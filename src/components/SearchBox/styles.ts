import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #202124;
  input {
    width: 90%;
    font-size: 30px;
    background-color: #bababa;
    outline: none;
    padding: 20px;
    border-radius: 10px;
    border: none;
  }
  .search-icon {
    position: fixed;
    top: 35px;
    right: 70px;
    z-index: 2;
    font-size: 50px;
    color: gray;
    opacity: 0.5;
  }
`
