import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -12vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("/img/bg.jpg");
  background-position: center top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};

  border-bottom: 8px solid ${({ theme }) => theme.colors.dark};
  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-top: 4rem;
  }

  h2 {
    font-size: 1.6rem;
    margin: 1rem 0;
  }

  @media (max-width: 575.98px) {
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
  z-index: 1;
  .inputs {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    height: 5rem;
    align-items: center;
    font-size: 1rem;
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 1.8rem;
      // margin-top: 0rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.3rem;
      margin: 2rem 0;
    }
    .inputs {
      flex-direction: column;
      input {
        width: 90%;
        margin-top: 2rem;
      }
      button {
        margin: 1rem 0;
      }
    }
  }
`;
