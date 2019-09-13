import styled from 'styled-components'

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    grid-gap: 30px;

    @media(max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`

export default StyledHeader