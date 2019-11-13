import React from "react";
import PropTypes from "prop-types";
import Box from "~/components/Box";
import Fade from "react-reveal/Fade";
import Image from "~/components/Image";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import Button from "~/components/Button";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";
import { ABOUT_FEATURES } from "~/data";
import { AboutWrapper, FeatureSection } from "./about.style";
import Link from "next/link";

const AboutSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle
}) => {
  return (
    <AboutWrapper id="about">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              button={
                <Link href="https://app.acquity.io">
                  <a>
                    <Button title="GET STARTED" {...btnStyle} />
                  </a>
                </Link>
              }
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {ABOUT_FEATURES.map((item, index) => (
                <Fade key={`feature-${index}`} up>
                  <div className="featureWrapper">
                    <Image src={item.image} alt={item.title} />
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.des} {...featureDescriptionStyle} />
                  </div>
                </Fade>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </AboutWrapper>
  );
};

// Transactions style props
AboutSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object
};

// Transactions default style
AboutSection.defaultProps = {
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
    content: "Our system is designed for the serious trader",
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
      "Acquity seeks to enhance your trading experience by finding you matches every week.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["30px", "30px", "40px", "40px", "55px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"]
  },
  sectionSubTitle: {
    content: "How Acquity works",
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
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["25px", "27px", "27px", "27px", "27px"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"]
  },
  // Transactions section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"]
  }
};

export default AboutSection;
