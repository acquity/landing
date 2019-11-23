import styled from "styled-components";

const SectionMainWrapper = styled.section`
  padding: 30px 0 30px;


  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  .containerClass {
    border-radius: 20px;
    padding: 80px 0 0 0;

    .form-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: auto;

      p {
        @media (max-width: 575px){
          margin-bottom: 0;
          margin-top: 0;
        }
      }

      .form-style{
        width: 80%;
        display: flex;
        justify-content: center;



        @media (max-width: 575px) {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }

        label {
          font-size: 14px;
          color: #343d48;
          // font-weight: 500;
          width: 100%;
          @media (max-width: 575px) {
            width: 100%;
            margin-right: 0;
          }
        }

        .label-left{
          padding-right: 10px;
          @media (max-width: 575px) {
            padding-right: 0;
          }
        }

        .label-right{
          padding-left: 10px;
          @media (max-width: 575px) {
            padding-left: 0;
          }
        }

        input {
          width: 100%;
          background: #fff;
          font-family: "Nexa Regular", "Poppins", sans-serif;
          font-size: 16px;
          // font-weight: 500;
          color: #343d48;
          padding: 5px 15px;
          border-color: #dadada;
          border-style: solid;
          border-width: 2px;
          border-color: rgb(233, 227, 254);
          border-radius: 10px;
          background-color: rgb(243, 242, 250);
          height: 60px;

          @media (max-width: 575px){
            margin-bottom: 20px;
          }
        }

        textarea {
          width: 100%;
          background: #fff;
          font-family: "Nexa Regular", "Poppins", sans-serif;
          font-size: 16px;
          // font-weight: 500;
          color: #343d48;
          padding: 5px 15px;
          border-color: #dadada;
          border-style: solid;
          border-width: 2px;
          border-color: rgb(233, 227, 254);
          border-radius: 10px;
          background-color: rgb(243, 242, 250);
          height: 120px;

          @media (max-width: 575px){
            margin-bottom: 20px;
            height: 180px;
          }
        }
      }
    }

    button {
      border-radius: 6px;
        background-image: -moz-linear-gradient(
          29deg,
          rgb(38, 126, 208) 0%,
          rgb(85, 96, 232) 100%
        );
        background-image: -webkit-linear-gradient(
          29deg,
          rgb(38, 126, 208) 0%,
          rgb(85, 96, 232) 100%
        );
        background-image: -ms-linear-gradient(
          29deg,
          rgb(38, 126, 208) 0%,
          rgb(85, 96, 232) 100%
        );
        &:hover {
          box-shadow: -6.691px 7.431px 20px 0px rgba(38, 126, 208, 0.2);
        }
        > span {
          // font-weight: 700;
          letter-spacing: 1px;
        }
      }
    }
    .contactdes {
      text-align: center;
      @media (max-width: 990px) {
        padding: 0 20px;
      }
    }
  
  }
`;
export { SectionMainWrapper };
