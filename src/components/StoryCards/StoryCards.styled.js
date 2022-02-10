import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.light};
`;

export const CardItem = styled.div`
  border-bottom: 8px solid ${({ theme }) => theme.colors.dark};
  padding: 50px 45px;
  overflow: hidden;

  .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;

    .desc {
      width: 52%;
      h1 {
        font-size: 3.2rem;
        font-weight: 600;
        margin: 1rem 0;
      }

      @media (max-width: 915px) {
        h1 {
          font-size: 2.5rem;
        }
        h2 {
          font-size: 1rem;
        }
      }
    }
    .media {
      width: 48%;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 2;
      }
      .tv-animation {
        position: absolute;
        top: 20%;
        left: 13%;
        width: 100%;
        height: 100%;
        max-width: 73%;
        max-height: 54%;
        video {
          width: 100%;
          height: 100%;
        }
      }
      .card {
        padding: 1rem;
        width: 60%;
        height: 100px;
        position: absolute;
        bottom: 5%;
        left: 20%;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${({ theme }) => theme.colors.black};
        border: 2px solid ${({ theme }) => theme.colors.dark};
        border-radius: 8px;

        .icon {
          width: 30%;
          img {
            height: 4.5rem;
            width: auto;
          }
        }
        .details {
          width: 60%;
          h4 {
            font-weight: bold;
          }
          p {
            color: ${({ theme }) => theme.colors.blueColor};
            font-size: 14px;
          }
        }
        &::after {
          content: "";
          width: 3em;
          height: 3.75rem;
          //background-color: red;
          background: url("/img/download-icon.gif") center center no-repeat;
          background-size: 100%;
          display: block;
        }
      }
    }

    @media (max-width: 575px) {
      flex-direction: column-reverse;
      .desc {
        width: 100%;
        text-align: center;
      }
      .media {
        width: 100%;

        .card {
          width: 80%;
          height: 80px;
          left: 10%;
          .icon {
            img {
              height: 2.8rem;
            }
          }
        }
      }
    }
    @media (max-width: 810px) {
      .media {
        .card {
          width: 80%;
          height: 80px;
          left: 10%;
          .icon {
            img {
              height: 2.8rem;
            }
          }
        }
      }
    }
  }
`;
