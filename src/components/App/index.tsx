import React, { FC } from 'react';
import { Container } from 'dots';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

import About from 'sections/About';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';

const Component: FC = () => {
  return (
    <>
      <Header />
      <Hero />

      <Container>
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default Component;
