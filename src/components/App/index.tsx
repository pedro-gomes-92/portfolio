import React, { FC, useState } from 'react';
import { Container } from 'dots';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

import About from 'sections/About';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';

const Component: FC = () => {
  const [offsetScroll, setOffsetScroll] = useState<number>(0);

  const [about, setAbout] = useState<HTMLElement>();
  const [projects, setProjects] = useState<HTMLElement>();
  const [contact, setContact] = useState<HTMLElement>();

  const elements = [about, projects, contact].filter(element => element !== undefined) as HTMLElement[];

  return (
    <>
      <Header
        reference={element => {
          const offset = element ? element.clientHeight : 0;
          setOffsetScroll(offset);
        }}
        elements={elements}
        offsetScroll={offsetScroll}
      />
      <Hero nextElement={about} offsetScroll={offsetScroll} />

      <Container>
        <About reference={element => setAbout(element)} />
        <Projects reference={element => setProjects(element)} />
        <Contact reference={element => setContact(element)} />
      </Container>
      <Footer />
    </>
  );
};

export default Component;
