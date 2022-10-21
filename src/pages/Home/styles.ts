import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${theme.gray100};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
  `}
`

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${theme.gray100};
    display: flex;
    gap: 1rem;

    span {
      background: ${theme.gray700};
      padding: 2rem 1rem;
      border-radius: 8px;
    }
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme.green500};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
  `}
`
