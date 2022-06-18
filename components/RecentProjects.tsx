import React from 'react';
import { styled } from '../stitches.config';
import { ContentContainer } from './ContentContainer';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';
import {
  Carousel,
  CarouselSlideList,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';

const Container = styled('div', {
  paddingTop: 80,
  paddingBottom: 120,
  background: '$backgroundProjects',
  position: 'relative',
});

export const RecentProjects: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <SectionHeader overline="Recent projects" title="My latest work" />
      </ContentContainer>
      <Carousel>
        <CarouselSlideList>
          <CarouselSlide>
            <ProjectCard
              title="MindDrop"
              description="A visual workspace for organising your projects, studies, research, and ideas."
              imgLight="/minddrop-light.png"
              imgDark="/minddrop-dark.png"
            />
          </CarouselSlide>
          <CarouselSlide>
            <ProjectCard
              title="Whim"
              description="A highly customisable block based rich text editor inspired by Notion."
              imgLight="/whim-light.png"
              imgDark="/whim-dark.png"
            />
          </CarouselSlide>
          <CarouselSlide>
            <ProjectCard
              title="StudyRabbit"
              description="A visual workspace for organising your projects, studies, research, and ideas."
              imgLight="/studyrabbit-light.png"
              imgDark="/studyrabbit-dark.png"
            />
          </CarouselSlide>
          <CarouselSlide>
            <ProjectCard
              title="21st Night"
              description="a studying app built around memory."
              imgLight="/21stnight-light.png"
              imgDark="/21stnight-dark.png"
            />
          </CarouselSlide>
        </CarouselSlideList>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </Container>
  );
};
