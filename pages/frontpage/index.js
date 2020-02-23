import React from "react";
import styled, { keyframes } from "styled-components";
import Head from "next/head";
import { GlobalStyle } from "ui/global";
import { LandingSection } from "./landing-section";
import { GalerySection } from "./galery-section";
import { CoursesSection } from "./courses-section";
import { NewsSection } from "./last-news-section";
import { ContactSection } from "./contact-section";
import { Footer } from "cmp/footer";
import { Spinner } from "cmp/spinner";
import { Companies } from "./companies";

export default class FrontPage extends React.PureComponent {
  state = {
    spinner: true
  };

  // componentDidMount() {
  //   setTimeout(() => this.setState({ spinner: false }), 3000);
  // }

  render() {
    const { spinner } = this.state;
    // if (spinner) {
    //   return (
    //     <div>
    //       <Spinner />
    //     </div>
    //   );
    // }
    return (
      <Outer>
        <GlobalStyle />
        <LandingSection />
        <CoursesSection />
        <GalerySection />
        <Companies />
        <NewsSection />
        <ContactSection />
        <Footer />
      </Outer>
    );
  }
}
const loading = keyframes`
0%{
  opacity: 0;
}
90%{
  opacity: 0.9;
}
100{
  opacity: 1;
}
`;
const Outer = styled.div`
  /* animation: ${loading} 1.2s ease-in; */
`;
