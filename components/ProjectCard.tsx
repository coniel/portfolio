import React from 'react';
import { Image } from './Image';
import { GrabBox } from './Carousel';
import { styled } from '../stitches.config';

interface ProjectCardProps {
  imgLight: string;
  imgDark: string;
  title: string;
  description: string;
}

const Container = styled('div', {
  display: 'block',
  flex: '1 0 auto',
  width: 460,
  height: 370,
});

const ImageContainer = styled('div', {
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 4,
  width: 460,
  height: 287,
});

const Title = styled('h3', {
  display: 'block',
  fontSize: '15px',
  lineHeight: '22px',
  marginTop: 15,
  fontWeight: 600,
  userSelect: 'none',
});

const Description = styled('p', {
  display: 'block',
  fontSize: '15px',
  lineHeight: '23px',
  fontWeight: 400,
  userSelect: 'none',
});

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imgLight,
  imgDark,
  title,
  description,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          srcLight={imgLight}
          srcDark={imgDark}
          width={460}
          height={287}
          alt="Screenshot"
        />
      </ImageContainer>
      <GrabBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </GrabBox>
    </Container>
  );
};
