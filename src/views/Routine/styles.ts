import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  padding-bottom: 100px;
  text-align: center;

  h1 {
    margin-bottom: 0px;
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 40px;
  }
`

export const ListSessions = styled.div`
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.08);
  background: #fff;
  padding: 15px;
  margin-top: 50px;
  border-radius: 5px;
`

export const Item = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.active ? '#fff' : '#000'};
  background: ${props => props.active ? '#1976d2' : '#fff'};
`
