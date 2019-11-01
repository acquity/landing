import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '~/components/Box';
import Text from '~/components/Text';
import Image from '~/components/Image';
import Heading from '~/components/Heading';
import Select from '~/components/Select';
import Container from '~/components/UI/Container';
import FooterWrapper, { List, ListItem, BgImageWrapper } from './footer.style';
import { menuWidget, Language_NAMES } from '~/data';
import AppImage from '~/assets/image/ride/footerapp.svg';
import PlaystoreImage from '~/assets/image/ride/footerplay.svg';
import FooterBG from '~/assets/image/crypto/footer-bg.svg';

const Footer = ({ row, col, colOne, colTwo, titleStyle }) => {
  return (
    <FooterWrapper id="footerSection">
      <BgImageWrapper>
        <Image src={FooterBG} alt="Footer background" />
      </BgImageWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box className="row mainRow" {...row}>
          {/* End of footer logo column */}
          <Box {...colOne} className="footer-cols">
            {menuWidget.map(widget => (
              <Box className="col" {...col} key={widget.id}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map(item => (
                    <ListItem key={`list__item-${item.id}`}>
                      <Link href={item.url}>
                        <a className="ListItem">{item.text}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
        <Box className="row copyRight" {...row}>
          <Text
            content="Copyright © 2019 Acquity."
            className="copyRightText"
          />
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '20%', '20%', '20%'],
    mb: ['0px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['auto', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: ['90px', '15px'],
    mb: ['30px', '30px'],
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Poppins',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Lato',
  },
};

export default Footer;
