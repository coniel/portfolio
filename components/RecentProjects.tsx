import React from 'react';
import { styled } from '../stitches.config';
import { ContentContainer } from './ContentContainer';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

const Container = styled('div', {
  paddingTop: 80,
  paddingBottom: 120,
  background: '$backgroundProjects',
});

const Carousel = styled('div', {
  display: 'flex',
  columnGap: 50,
  overflowX: 'visible',
});

export const RecentProjects: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <SectionHeader overline="Recent projects" title="My latest work" />
        <Carousel>
          <ProjectCard
            title="MindDrop"
            description="A visual workspace for organising your projects, studies, research, and ideas."
            imgLight="/minddrop-light.png"
            imgDark="/minddrop-dark.png"
          />
          <ProjectCard
            title="Whim"
            description="A highly customisable block based rich text editor inspired by Notion."
            imgLight="/whim-light.png"
            imgDark="/whim-dark.png"
          />
          <ProjectCard
            title="StudyRabbit"
            description="A visual workspace for organising your projects, studies, research, and ideas."
            imgLight="/studyrabbit-light.png"
            imgDark="/studyrabbit-dark.png"
          />
          <ProjectCard
            title="21st Night"
            description="a studying app built around memory."
            imgLight="/21stnight-light.png"
            imgDark="/21stnight-dark.png"
          />
        </Carousel>
      </ContentContainer>
    </Container>
  );
};
