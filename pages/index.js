import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/assets/theme';
import { ResetCSS } from '~/assets/css/style';
import { GlobalStyle, ContentWrapper } from '~/containers/containers.style';
import { DrawerProvider } from '~/contexts/DrawerContext';
import Navbar from '~/containers/Navbar';
import Banner from '~/containers/BannerSection';
import BannerSlider from '~/containers/BannerSlider';
import Transactions from '~/containers/Transaction';
import ControlSections from '~/containers/ControlSection';
import TrustedProofSections from '~/containers/TrustedProof';
import ScalableSections from '~/containers/ScalableSection';
import SlideSections from '~/containers/SlideSection';
import JoinUsSections from '~/containers/JoinUsSection';
import ContactSections from '~/containers/Contact';
import Footer from '~/containers/Footer';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>acquity | Acquire private equity.</title>
          <meta name="Description" content="acquity. Acquire private equity." />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700|Lato&swap=true"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <BannerSlider />
          <Transactions />
          <ControlSections />
          <TrustedProofSections />
          <ScalableSections />
          <SlideSections /> 
          <JoinUsSections />
          {/* <ContactSections /> */}
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
