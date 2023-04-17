import styled from 'styled-components'

type SidebarProps = {
  open: boolean
}

export const Container = styled.div<SidebarProps>`
  min-width: ${props => (props.open ? '240px' : '60px')};
  weight: ${props => (props.open ? '240px' : '60px')};
  display: block;


  @media (max-width: 768px) {
    position: fixed;
    background: ${props => (props.open ? '#fff' : 'transparent')};
    z-index: 1;
    height: 100vh;
  }
`

export const ToggleBtn = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 48px;
  padding: 0 20px;
  color: var(--color-1);
  cursor: pointer;
  margin-bottom: 50px;
  
  svg {
    transform: ${props => (props.open ? 'rotate(0deg)' : 'rotate(180deg)')};
  }

  @media (max-width: 768px) {
    background: #fff;
    border-radius: 0 0 10px 0;
  }
`

export const List = styled.div<SidebarProps>`
  display: block;

  a {
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 20px;
    border-bottom: 1px solid #F5F5F5;
    position: relative;
    transition: all 0.2s;

    &:first-child {
      border-top: 1px solid #F5F5F5;
    }

    svg {
      fill: var(--color-1);
    }

    p {
      font-weight: 300;
      font-size: 16px;
      color: #323232;
      margin: 0;
      margin-left: 8px;
      display: ${props => (props.open ? 'block' : 'none')};
    }

    &.active {
      background: #eff3f9;
      box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.08);
      &::before {
        content: '';
        display: block;
        width: 4px;
        height: 100%;
        background: var(--color-1);
        position: absolute;
        left: 0;
      }

      p {
        font-weight: 700;
      }
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'block' : 'none')};
  }
`

export const Logo = styled.img<SidebarProps>`
  height: 50px;
  position: fixed;
  bottom: 20px;
  left: 12px;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'block' : 'none')};
  }
`
