import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: #757575;
  border-bottom: 8px solid ${({ theme }) => theme.colors.dark};
`;

export const FooterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 70px;
  p {
    font-size: 1rem;
    margin: 2rem 0;
  }
  .footer-lists {
    display: flex;
    justify-content: space-between;

    ul {
      list-style: none;
      li {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 30px 20px;
  }
`;
