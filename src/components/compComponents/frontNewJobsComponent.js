import React from 'react';
import styled from 'styled-components';

const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 90px;
  padding: 20px;
  background-color:grey;

`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 100%; // Ensures the image takes up the full width of the card
  border-radius: 8px; // Optional: if you want rounded corners
`;

const ProjectTitle = styled.h3`
  margin-top: 8px;
  font-size: 1rem;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const FrontNewJobComponent = () => {
  return (
    <Gallery>
      {/* Repeat this block for each project */}
      <Card>
        <ProjectImage src="/logo.png" alt="Project" />
        <ProjectTitle>The Olfactive</ProjectTitle>
        <ProjectDescription>UI, Art direction React</ProjectDescription>
      </Card>
      <Card>
      <ProjectImage src="/logo.png" alt="Project" />
        <ProjectTitle>The Olfactive</ProjectTitle>
        <ProjectDescription>UI, Art direction React</ProjectDescription>
      </Card>
      <Card>
      <ProjectImage src="/logo.png" alt="Project" />
        <ProjectTitle>The Olfactive</ProjectTitle>
        <ProjectDescription>UI, Art direction React</ProjectDescription>
      </Card>
      <Card>
      <ProjectImage src="/logo.png" alt="Project" />
        <ProjectTitle>The Olfactive</ProjectTitle>
        <ProjectDescription>UI, Art direction React</ProjectDescription>
      </Card>
      <Card>
      <ProjectImage src="/logo.png" alt="Project" />
        <ProjectTitle>The Olfactive</ProjectTitle>
        <ProjectDescription>UI, Art direction React</ProjectDescription>
      </Card>
      <Card>
      <ProjectImage src="../logo.png" alt="Project" />
        <ProjectTitle>The Olfactive</ProjectTitle>
        <ProjectDescription>UI, Art direction React</ProjectDescription>
      </Card>
      {/* ... other project cards */}
    </Gallery>
  );
};

export default FrontNewJobComponent;
