import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  padding-bottom: 100px;

  &>button {
    margin-top: 50px;
    width: 100%;
    height: 60px;
  }
`

export const Table = styled.table`
  width: 100%;
  text-align: left;
  width: 100%;

  button {
    width: 100%;
  }
`
