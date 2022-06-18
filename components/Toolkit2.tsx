import React from 'react';
import { styled, keyframes } from '../stitches.config';
import { ContentContainer } from './ContentContainer';
import { SectionHeader } from './SectionHeader';
import { ToolkitCard } from './ToolkitCard';

const scrollLeft = keyframes({
  '0%': {
    left: 0,
  },
  '100%': {
    left: 300 * 8 - 20,
  },
});

const scrollLeft2 = keyframes({
  '0%': {
    left: -300 * 8,
  },
  '100%': {
    left: 0,
  },
});

const scrollRight = keyframes({
  '0%': {
    left: 0,
  },
  '100%': {
    left: -300 * 9 - 20,
  },
});

const scrollRight2 = keyframes({
  '0%': {
    left: 300 * 9 - 20,
  },
  '100%': {
    left: 0,
  },
});

const Container = styled('div', {
  paddingTop: 80,
  paddingBottom: 60,
  background: '$backgroundToolkit',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const Carousel = styled('div', {
  position: 'relative',
  height: 206,
  marginBottom: 20,
});

const FirstGroup = styled('div', {
  transform: 'translateZ(0)',
  willChange: 'left',
  display: 'flex',
  columnGap: 20,
  position: 'absolute',
  left: 0,
});

const SecondGroup = styled('div', {
  transform: 'translateZ(0)',
  willChange: 'left',
  display: 'flex',
  columnGap: 20,
  position: 'absolute',
});

const TopRow: React.FC = () => (
  <>
    <ToolkitCard
      icon="typescript.svg"
      name="Typescript"
      description="TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
    />
    <ToolkitCard
      icon="react.svg"
      name="React"
      description="React is a declarative, efficient, and flexible JavaScript library for building component based user interfaces."
    />
    <ToolkitCard
      icon="aws-light.svg"
      iconDark="aws-dark.svg"
      name="AWS"
      description="AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon."
    />
    <ToolkitCard
      icon="jest.svg"
      name="Jest"
      description="Jest is a delightful JavaScript Testing Framework with a focus on simplicity."
    />
    <ToolkitCard
      icon="stripe.svg"
      name="Stripe"
      description="Stripe enables businesses and individuals to accept payments using their rich API and robust platform."
    />
    <ToolkitCard
      icon="slate-light.svg"
      iconDark="slate-dark.svg"
      name="Slate JS"
      description="A completely customizable framework for building rich text editors."
    />
    <ToolkitCard
      icon="radix-light.svg"
      iconDark="radix-dark.svg"
      name="Radix UI"
      description="Unstyled, accessible components for building high‑quality design systems and web apps in React."
    />
    <ToolkitCard
      icon="couchdb.svg"
      name="CouchDB"
      description="CouchDB is a JSON based  database with seamless multi-master sync and an Intuitive API designed for Reliability."
    />
  </>
);

const BottomRow: React.FC = () => (
  <>
    <ToolkitCard
      icon="google-cloud.svg"
      name="Google Cloud"
      description="A suite of cloud computing services that runs on the same infrastructure that Google uses internally."
    />
    <ToolkitCard
      icon="storybook.svg"
      name="Storybook"
      description="Storybook is an open source tool for building UI components and pages in isolation."
    />
    <ToolkitCard
      icon="pouchdb.svg"
      name="PouchDB"
      description="PouchDB is an open-source JavaScript database that is designed to run well within the browser."
    />
    <ToolkitCard
      icon="firebase.svg"
      name="Firebase"
      description="Firebase is a platform developed by Google for creating mobile and web applications."
    />
    <ToolkitCard
      icon="hygen.svg"
      name="Hygen"
      description="Hygen is a scalable code generator that that lives in your project."
    />
    <ToolkitCard
      icon="stitches-light.svg"
      iconDark="stitches-dark.svg"
      name="Stitches"
      description="CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience."
    />
    <ToolkitCard
      icon="react.svg"
      name="React Native"
      description="React Native combines the best parts of native development with React, a JavaScript library for building user interfaces."
    />
    <ToolkitCard
      icon="mongodb.svg"
      name="MongoDB"
      description="A document-oriented NoSQL database used for high volume data storage."
    />
    <ToolkitCard
      icon="mui.svg"
      name="Material UI"
      description="MUI offers a comprehensive suite of UI tools to help you ship new features faster."
    />
  </>
);

export const Tooltkit: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <SectionHeader overline="Tooltkit" title="Tools of my trade" />
      </ContentContainer>
      <Carousel>
        <FirstGroup
          style={{
            animation: `${scrollLeft} 60s linear infinite`,
          }}
        >
          <TopRow />
        </FirstGroup>
        <SecondGroup
          style={{
            animation: `${scrollLeft2} 60s linear infinite`,
            left: -300 * 8,
          }}
        >
          <TopRow />
        </SecondGroup>
      </Carousel>
      <Carousel>
        <FirstGroup
          style={{
            animation: `${scrollRight} 60s linear infinite`,
          }}
        >
          <BottomRow />
        </FirstGroup>
        <SecondGroup
          style={{
            animation: `${scrollRight2} 60s linear infinite`,
            left: 300 * 9,
          }}
        >
          <BottomRow />
        </SecondGroup>
      </Carousel>
    </Container>
  );
};
