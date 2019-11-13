import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "~/components/Box";
import Image from "~/components/Image";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";
import Button from "~/components/Button";
import { BETA_FEATURE } from "~/data";
import { JoinUsSectionWrapper, FeatureSection } from "./joinUsSection.style";
import Link from "next/link";

const JoinUsSection = ({
  row,
  title,
  description,
  sectionSubTitle,
  featureTitleStyle,
  featureDescriptionStyle,
  btnStyle
}) => {
  return (
    <JoinUsSectionWrapper id="joinUsSection">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="button">
          <Link href="https://staging.app.acquity.io">
            <a>
              <Button
                title="GET STARTED"
                className="mainButton"
                {...btnStyle}
              />
            </a>
          </Link>
        </Box>
        <Box >
          <FeatureSection>
            {BETA_FEATURE.map((item, index) => (
              <Fade key={`feature-${index}`} up>
                <div className="featureWrapper">
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
              </Fade>
            ))}
          </FeatureSection>
        </Box>
      </Container>
    </JoinUsSectionWrapper>
  );
};

// Transactions style props
JoinUsSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  row: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
  btnStyle: PropTypes.object
};

// Trusted default style
JoinUsSection.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center"
  },

  title: {
    content: "Join us now",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    textAlign: ["center", "center"]
  },

  description: {
    content: "Get the trade you deserve.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"]
  },
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["1", "1", "1", "1", "1"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"]
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"]
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default JoinUsSection;
