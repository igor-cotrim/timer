import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    background: ${theme.gray800};
    border-radius: 8px;
  `}
`
