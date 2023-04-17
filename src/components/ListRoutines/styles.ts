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

export const Empty = styled.div`
  border: dashed 4px #d0c9c9;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
