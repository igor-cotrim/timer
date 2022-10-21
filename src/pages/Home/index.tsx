import { Play } from 'phosphor-react'

import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </S.HomeContainer>
  )
}

export default Home
