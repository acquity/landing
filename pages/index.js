import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "~/assets/theme";
import { ResetCSS } from "~/assets/css/style";
import { GlobalStyle, ContentWrapper } from "~/containers/containers.style";
import { DrawerProvider } from "~/contexts/DrawerContext";
import Navbar from "~/containers/Navbar";
import Banner from "~/containers/BannerSection";
import BannerSlider from "~/containers/BannerSlider";
import AboutSections from "~/containers/AboutSection";
import RoundSections from "~/containers/RoundSection";
import PrinciplesSections from "~/containers/PrinciplesSection";
import TeamSections from "~/containers/TeamSection";
import SlideSections from "~/containers/SlideSection";
import JoinUsSections from "~/containers/JoinUsSection";
import ContactSections from "~/containers/Contact";
import Footer from "~/containers/Footer";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>acquity | Acquire private equity.</title>
          <meta name="Description" content="acquity. Acquire private equity." />
          <meta name="theme-color" content="#ec5555" />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&swap=true"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="~/assets/fonts/stylesheet.css"
            type="text/css"
            charset="utf-8"
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
          <AboutSections />
          <RoundSections />
          <PrinciplesSections />
          <TeamSections />
          <SlideSections />
          <JoinUsSections />
          <ContactSections />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
