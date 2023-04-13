import styled from 'styled-components'

type ButtonProps = {
  width?: string
  disabled?: boolean
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-1);
  border-radius: 8px;
  border: none;
  color: rgb(255, 255, 255);
  font-weight: 900;
  font-size: 17px;
  padding: 12px 24px;
  width: ${props => props.width ? `${props.width}` : 'fit-content'};
  height: fit-content;
  pointer-events: ${props => props.disabled ? 'none' : 'initial'};
  cursor: pointer;
  transition: filter 0.2s;
  opacity: ${props => props.disabled ? '0.7' : '1'};

  &:hover {
    filter: brightness(0.6);
  }

  &:active {
    filter: brightness(0.8);
  }

  img {
    margin-left: 8px;
    height: 20px
  }
`
