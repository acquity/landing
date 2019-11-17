import React from "react";
import PropTypes from "prop-types";
import Box from "~/components/Box";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import Button from "~/components/Button";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";

import { SectionMainWrapper } from "./contact.style";

const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
  title,
  description,
  colornote
}) => {
  return (
    <SectionMainWrapper>
      <Box {...sectionWrapper}>
        <Container className="containerClass">
          <Box {...secTitleWrapper}>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
          </Box>
          <Box {...row}>
            <Box {...contactForm}>
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"className="form-container">
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-style">
                  <label className="label-left">
                    Your Name:<br/><input type="text" name="name" />
                  </label>
                  <label className="label-right">
                    Your Email:<br/><input type="email" name="email" />
                  </label>
                </p>
                <p className="form-style">
                  <label>
                    Message:<br/><textarea name="message"></textarea>
                  </label>
                </p>
                <p>
                  <Button {...button} title="SEND MESSAGE" />
                </p>
              </form>
              <br/>
              <Box className="contactdes">
                <Text
                  as="span"
                  {...note}
                  content="We will get back to you as soon as possible!"
                />
                {/* <Link href="#">
                  <a className="">Join us on Telegram. </a>
                </Link> */}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </SectionMainWrapper>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  colornote: PropTypes.object
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: "contact",
    as: "section",
    pt: ["8px", "80px", "80px", "80px"],
    pb: ["0", "80px", "80px", "80px", "80px"]
  },
  secTitleWrapper: {
    mb: ["10px", "10px", "10px"],
    p: ["0 15px", 0, 0, 0, 0]
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: `${2}`,
    letterSpacing: "0.15em",
    fontWeight: `${6}`,
    color: "primary",
    mb: `${3}`
  },
  secHeading: {
    textAlign: "center",
    fontSize: [`${6}`, `${8}`],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: `${0}`
  },
  row: {
    flexBox: true,
    justifyContent: "center"
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2]
  },
  button: {
    type: "submit",
    fontSize: `${2}`,
    fontWeight: "600",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
    height: `${4}`
  },
  note: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"]
  },
  colornote: {
    fontSize: "16px",
    fontWeight: "500",
    color: "rgb(106, 82, 253)",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"]
  },
  title: {
    content: "Contact Us",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    textAlign: ["center", "center"]
  },

  description: {
    content: "Let us know if you have any queries!",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"]
  }
};

export default ContactSection;
