import styled from "styled-components";

export const FWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.light};
  border-bottom: 8px solid ${({ theme }) => theme.colors.dark};
`;

export const FContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
  }

  ul {
    list-style: none;
    margin: 3rem 0;
  }
  .inputs {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
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

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 30px 20px;
  }
`;

export const FList = styled.li`
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
  height: ${({ open }) => (open === true ? "12rem" : "4rem")};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    height: 4rem;
    outline: none;
    border: none;
    // padding: 1rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 2rem;
      transition: all 0.3s ease-in-out;
    }
    .open {
      transform: rotate(-45deg);
    }
  }

  .faq-content {
    transition: all 0.5s ease-in-out;
    text-align: justify;
  }
`;
