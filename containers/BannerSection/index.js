import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "~/components/Box";
import Text from "~/components/Text";
import Heading from "~/components/Heading";
import Button from "~/components/Button";
import Image from "~/components/Image";
import FeatureBlock from "~/components/FeatureBlock";
import Container from "~/components/UI/Container";
import Particles from "../Particle";
// import { Icon } from 'react-icons-kit';
// import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
// import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import BannerBG from "~/assets/image/crypto/white_bg1.svg";
import BannerWrapper, { BgImageWrapper } from "./bannerSection.style";
import Link from "next/link";

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Link href="https://app.acquity.io">
        <a>
          <Button title="Get Started" {...btnStyle} />
        </a>
        {/* <Button
        title="Download Whitepaper"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      /> */}
      </Link>
    </Fragment>
  );
  // const ShareButtonGroup = () => (
  //   <Fragment>
  //     <Button
  //       title="Share on Twitter"
  //       variant="textButton"
  //       iconPosition="left"
  //       icon={<Icon icon={socialTwitter} />}
  //       {...outlineBtnStyle}
  //       className="btnWithoutColor"
  //     />
  //     <Button
  //       title="Share on Facebook"
  //       variant="textButton"
  //       iconPosition="left"
  //       icon={<Icon icon={facebook2} />}
  //       {...outlineBtnStyle}
  //       className="btnWithoutColor"
  //     />
  //   </Fragment>
  // );
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <BgImageWrapper>
        <Image src={BannerBG} alt="banner background" />
      </BgImageWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="Private equity trading has never been more effortless"
                  {...title}
                />
              }
              description={
                <Text
                  content="Save the time spent finding someone reliable to trade with and spend it on actually trading. Get matched within a week with Acquity."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
            {/* <FeatureBlock button={<ShareButtonGroup />} /> */}
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "100%", "60%", "65%"]
  },
  title: {
    fontSize: ["30px", "34px", "42px", "42px", "47px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31"
  },
  description: {
    fontSize: ["16px", "18px", "20px", "20px", "22px"],
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px"
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "6px"
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    p: "5px 10px"
  }
};

export default BannerSection;
