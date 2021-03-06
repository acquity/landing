import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Box from '~/components/Box';
import Text from '~/components/Text';
import Heading from '~/components/Heading';
import FeatureBlock from '~/components/FeatureBlock';
import Container from '~/components/UI/Container';
import { FeatureSliderWrapper } from './slide.style';
import Image1 from '~/assets/image/crypto/login.png';
import Image2 from '~/assets/image/crypto/mainapp.png';
import Image3 from '~/assets/image/crypto/creation.png';
import Image4 from '~/assets/image/crypto/chat.png';

const images = [
  {
    original: `${Image1}`,
  },
  {
    original: `${Image2}`,
  },
  {
    original: `${Image3}`,
  },
  {
    original: `${Image4}`,
  }
];

const FeatureSlider = ({ row, title, description, sectionSubTitle }) => {
  return (
    <FeatureSliderWrapper id="product">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Text {...sectionSubTitle} />
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={false}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// Transactions style props
FeatureSlider.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
};

// Trusted default style
FeatureSlider.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    flexBox: true,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  title: {
    content: 'A trusted matching platform for equity',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    // fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center'],
  },

  description: {
    content:
      'Find the trade you want within the week and start spending time on actually trading.',
    fontSize: '16px',
    // fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  sectionSubTitle: {
    content: 'Seamless experience from end-to-end',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: "'Nexa Bold', 'Poppins'",
    // fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: ['center', 'center'],
  },
};

export default FeatureSlider;
