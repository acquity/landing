import styled from "styled-components";

const JoinUsSectionWrapper = styled.section`
  padding: 30px 0 30px;
  .button {
    display: flex;
    justify-content: center;
    .mainButton {
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
`;
const FeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: flex-start;
  }
  .featureWrapper {
    margin-top: 50px;
    display: flex;
    @media (max-width: 599px) {
      max-width: 100%;
    }
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 20px;
      border-width: 2px;
      border-color: rgb(233, 227, 254);
      border-radius: 10px;
      background-color: rgb(243, 242, 250);
      padding: 8px 10px;
    }
    .contextPortion {
      margin-left: 15px;
    }
  }
`;
export { JoinUsSectionWrapper, FeatureSection };
