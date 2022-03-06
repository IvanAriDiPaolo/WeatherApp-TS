import styled from 'styled-components';

export const StyledSearchBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  @media (max-width: 768px) {
    height: 7vh;
    margin-top: 1rem;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  @media (max-width: 768px) {
    width: 100vw;
  }
  margin: 2rem;
  #searchIcon{
    position: absolute;
    z-index: 1;
    left: 26.5%;
    top: 2.5rem;
    @media (max-width: 768px) {
      top: 1.5rem;
      left: 13%;
    }
  }
  input{
    border-color: transparent;
    padding: .7rem;
    padding-left: 4rem;
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.primary} ;
    font-size: 1.3rem;
    width: 100%;
    background: rgba( 255, 255, 255, 0.15 );
    backdrop-filter: blur( 2px );
    border-radius: 3rem;
    color: ${({ theme }) => theme.colors.typography.primary};
    transition: .4s;
    ::placeholder {
      color:  ${({ theme }) => theme.colors.placeholder.color};
    }
    :focus{
      outline: none;
      color: ${({ theme }) => theme.colors.typography.secondary};
      background: white;
      opacity: 0.5;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      ::-webkit-input-placeholder  {
        color: grey;
        transition: 1s ease-in-out;
      }
    }
  }
`

export const StyledSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: white;
  width: 50vw;  
  @media (max-width: 768px) {
    width: 82vw;  
    top: 4.4rem;
  }
  top: 5.6rem;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;
  z-index: 2;
  opacity: 0.5;
`;

export const StyledSuggestion = styled.a`
  color: ${({ theme }) => theme.colors.typography.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;
  padding: 1rem 1rem;
  text-align: left;
  font-size: 1.2rem;
  display: inline-block;
  position: relative;
  @media (max-width: 768px) {
    font-size: .9rem;
  }
  cursor: pointer;
  :after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }
  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`