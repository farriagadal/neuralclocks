import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid #000; */
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

export const ItemCreate = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;


  button {
    height: 55px;
    padding: 0 50px;
  }

  &>div:first-child {
    width: 100%;
  }

  &>div:nth-child(2) {
    width: 85px;
    min-width: 85px;
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
