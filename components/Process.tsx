import React, { useState } from 'react';
import { styled } from '../stitches.config';
import { CodeWindow } from './CodeWindow';
import { ContentContainer } from './ContentContainer';
import { ProcessStep } from './ProcessStep';
import { SectionHeader } from './SectionHeader';

const Container = styled('div', {
  paddingTop: 80,
  paddingBottom: 120,
  background: '$backgroundProcess',
});

const Content = styled('div', {
  display: 'flex',
  columnGap: 65,
});

const LeftColumn = styled('div', {
  width: 435,
});

const Description = styled('div', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '26px',
  marginBottom: 25,
});

const Steps = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 5,
  marginLeft: -15,
});

export const Process: React.FC = () => {
  const [active, setActive] = useState('document');

  return (
    <Container>
      <ContentContainer>
        <Content>
          <LeftColumn>
            <SectionHeader
              overline="Process"
              title="Four steps to quality code"
            />
            <Description>
              One of my main goals as a developer is to craft human-friendly,
              future-proof code. Code that anyone can pick up with ease at any
              point.
            </Description>
            <Steps>
              <ProcessStep
                title="Document"
                description="I begin by documenting the functionality which I'm about to implement. This helps me identify the requirements and leads to a well-documented project."
                active={active === 'document'}
                onClick={() => setActive('document')}
              />
              <ProcessStep
                title="Specify"
                description="I create a test which checks that a specific requirement functions as expected. This provides an implementation objective and leads to a well-tested project."
                active={active === 'specify'}
                onClick={() => setActive('specify')}
              />
              <ProcessStep
                title="Implement"
                description="I write the simplest code that passes the new test and nothing more. This keeps the code simple and on point."
                active={active === 'implement'}
                onClick={() => setActive('implement')}
              />
              <ProcessStep
                title="Refactor"
                description="I refactor the code as needed for readability and maintainability, separating out complex or re-usable code into separate functions."
                active={active === 'refactor'}
                onClick={() => setActive('refactor')}
              />
            </Steps>
          </LeftColumn>
          <CodeWindow fileName="rich-text-element.mdx" />
        </Content>
      </ContentContainer>
    </Container>
  );
};
