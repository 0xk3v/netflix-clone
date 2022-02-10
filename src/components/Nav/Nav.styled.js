import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 12vh;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  .logo {
    width: 10.4375rem;
    height: 2.8125rem;
    z-index: 2;

    img {
      width: 100%;
    }
  }

  .btns {
    z-index: 2;
  }
  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;
