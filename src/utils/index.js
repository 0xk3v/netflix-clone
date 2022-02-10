import styled, { css } from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 7px 17px;
  cursor: pointer;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 400;

  ${({ btnStyle }) =>
    btnStyle === "lg" &&
    css`
      padding: 17px 41px;
      border-radius: 0;

      @media (max-width: 500px) {
        padding: 13px 25px;
      }
      @media (max-width: 413px) {
        padding: 12px 15px;
      }
    `}
`;

export const Input = styled.input`
  outline: none;
  border: none;
  ${({ inputStyle }) =>
    inputStyle === "lg" &&
    css`
      padding: 18px 60px;
      @media (max-width: 500px) {
        padding: 14px 40px;
      }
      @media (max-width: 413px) {
        padding: 12px 20px;
      }
    `}
`;
