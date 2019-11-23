import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "~/components/Box";
import Image from "~/components/Image";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";
import { PRINCIPLES } from "~/data";
import { PrinciplesWrapper, FeatureSection } from "./principles.style";
import Button from '~/components/Button';

const PrinciplesSection = ({
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
    <PrinciplesWrapper id="principles">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <Fade up>
              <div className="TrustedImageBtn">
                  <a href="https://github.com/acquity/api" target="_blank">
                    <Button
                      title="SEE THE DOCS"
                      className="mainButton"
                      {...btnStyle}
                    />
                  </a>
              </div>
            </Fade>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {PRINCIPLES.map((item, index) => (
                <div key={`feature-${index}`} className="featureWrapper">
                  <Image src={item.image} alt={item.title} />
                  <Box className="contextPortion">
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.des} {...featureDescriptionStyle} />
                  </Box>
                </div>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </PrinciplesWrapper>
  );
};

// Transactions style props
PrinciplesSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object
};

// Trusted default style
PrinciplesSection.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Trusted section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center"
  },

  // Trusted section title default style
  title: {
    content: "Guiding principles of our system and algorithm",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    // fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"]
  },
  // Trusted section description default style
  description: {
    content:
      "We do our best to make the experience as fair as possible for everyone. To achieve that, these are the key principles that guide our decisions.",
    fontSize: "16px",
    // fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"]
  },
  sectionSubTitle: {
    content: "How we ensure fairness",
    as: "span",
    textAlign: "left",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "'Nexa Bold','Poppins'",
    // fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f",
    textAlign: ["left", "left"]
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    // fontWeight: "500"
  },
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["1", "1", "1", "1", "1"],
    // fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"]
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    // fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"]
  }
};

export default PrinciplesSection;
