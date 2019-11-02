import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Countdown from "react-countdown-now";
import Box from "~/components/Box";
import Fade from "react-reveal/Fade";
import Card from "~/components/Card";
import Image from "~/components/Image";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import Button from "~/components/Button";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";
import { RoundWrapper } from "./roundSection.style";
import ControlImage from "~/assets/image/crypto/round.svg";

const Completionist = () => (
  <span className="readMore">You are good to go!</span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="countPortion">
        <div className="countSingle">
          {days} <span className="countText">Days</span>
        </div>
        <div className="countSingle">
          {hours} <span className="countText">Hours</span>
        </div>
        <div className="countSingle">
          {minutes} <span className="countText">Minutes</span>
        </div>
        <div className="countSingle">
          {seconds} <span className="countText">Seconds</span>
        </div>
      </div>
    );
  }
};
const RoundSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  btnTitle
}) => {
  return (
    <RoundWrapper id="control">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Image
              src={ControlImage}
              className="roundImage"
              alt="Round Section Image"
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <Box className="btnSection">
              <Text {...btnTitle} />
            </Box>
            <Fade up>
              <Box className="countDownSection">
                <Countdown
                  date={Date.now() + 309999999}
                  renderer={renderer}
                  completed={false}
                />
              </Box>
            </Fade>
            <Box className="countDownButton">
              <Link href="https://app.acquity.io">
                <a>
                  <Button
                    title="JOIN THE ROUND"
                    className="countDownMainButton"
                    {...btnStyle}
                  />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </RoundWrapper>
  );
};

// Transactions style props
RoundSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  btnTitle: PropTypes.object,
  btnStyle: PropTypes.object
};

// Transactions default style
RoundSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Transactions section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center"
  },

  // Transactions section title default style
  title: {
    content: "Take control of your identity in our round-based system",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"]
  },
  // Transactions section description default style
  description: {
    content:
      "Acquity uses weekly rounds to collect anonymised bids and asks, before matching them with our algorithm. Simply join before the round ends and get notified when you match.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["30px", "30px", "35px", "35px", "45px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"]
  },
  sectionSubTitle: {
    content: "Effortless trading for everyone",
    as: "span",
    textAlign: "left",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "'Nexa Bold','Poppins'",
    fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f",
    textAlign: ["left", "left"]
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  },
  btnTitle: {
    content: "Round is currently open.",
    as: "span",
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["25px", "27px", "27px", "27px", "27px"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"]
  }
};

export default RoundSection;
