import React, { FC, useState } from 'react';
import { Container } from 'dots.js';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

import About from 'sections/About';
import Skills from 'sections/Skills';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';

const Component: FC = () => {
  const [offsetScroll, setOffsetScroll] = useState<number>(0);

  const [about, setAbout] = useState<HTMLElement>();
  const [skills, setSkills] = useState<HTMLElement>();
  const [projects, setProjects] = useState<HTMLElement>();
  const [contact, setContact] = useState<HTMLElement>();

  const elements = [about, skills, projects, contact].filter(element => element !== undefined) as HTMLElement[];

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
        <Skills reference={element => setSkills(element)} />
        <Projects reference={element => setProjects(element)} />
        <Contact reference={element => setContact(element)} />
        <Footer />
      </Container>
    </>
  );
};

export default Component;
