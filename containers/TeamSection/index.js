import React, { useState } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "~/components/Box";
import Image from "~/components/Image";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";
import Select from "~/components/Select";
import { TEAM_MEMBERS } from "~/data";
import { TeamWrapper, FeatureSection } from "./team.style";
import Link from "next/link";

const TeamSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
  companiesSelect
}) => {
  const [selectedOption, handleChange] = useState({
    value: "grab",
    label: "Grab"
  });

  return (
    <TeamWrapper id="team">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col}>
            <FeatureSection>
              {TEAM_MEMBERS.filter(
                item => item.company === selectedOption.value
              ).map((item, index) => (
                <div key={`feature-${index}`} className="featureWrapper">
                  <Fade up>
                    <Image src={item.image} alt={item.title} />
                    <Box className="contextPortion">
                      <Heading
                        as="h3"
                        content={item.title}
                        {...featureTitleStyle}
                      />

                      <Text content={item.des} {...featureDescriptionStyle} />
                      <Link href={item.linkedin}>
                        <a style={{ color: "rgb(38, 126, 208)" }}>
                          <Text content="LinkedIn" />
                        </a>
                      </Link>
                    </Box>
                  </Fade>
                </div>
              ))}
            </FeatureSection>
          </Box>

          <Box
            className="colright"
            {...col}
            style={{ flexDirection: "column" }}
          >
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              additionalContent={
                <Select
                  {...companiesSelect}
                  value={selectedOption}
                  onChange={option => handleChange(option)}
                />
              }
            />
          </Box>
        </Box>
        <br />
      </Container>
    </TeamWrapper>
  );
};

// Transactions style props
TeamSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
  companies: PropTypes.object
};

// Scalable default style
TeamSection.defaultProps = {
  // Scalable section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap-reverse",
    ml: "-15px",
    mr: "-15px"
  },
  // Scalable section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center"
  },

  // Scalable section title default style
  title: {
    content: "Meet our teams",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"]
  },
  // Scalable section description default style
  description: {
    content:
      "For every company that uses our system, a team of current or former employees from that company will oversee the rounds and ensure that users onboard smoothly. They have no access to any information about the round, and they do this not for profit, but to improve everyone's experience and prevent any fraudulent activity.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"]
  },
  sectionSubTitle: {
    content: "Worry-free interaction between traders",
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
    lineHeight: ["1", "1", "1", "1", "1"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: 0,
    textAlign: ["left", "left"]
  },
  // Scalable section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"],
    mb: 0
  },
  companiesSelect: {
    labelPosition: "top",
    labelText: "Select company to view:",
    options: [{ value: "grab", label: "Grab" }]
  }
};

export default TeamSection;
