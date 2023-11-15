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

const projects = [
  {  
    id: "id1",
    imgSrc: "../images/test.jpg",
    title: "Project One",
    description: "UI, Art direction React"
  },
  {  
    id: "id2",
    imgSrc: "/assets/images/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg",
    title: "Project Two",
    description: "UX, Frontend Development"
  },
  // Add more project objects here
];


const FrontNewJobComponent = () => {
  return (
    <Gallery>
      {projects.map((project) => (
       <Card key={project.id}>
        <ProjectImage src={project.imgSrc} alt={project.title}/>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
       </Card>
      ))}
    </Gallery>
  );
};

export default FrontNewJobComponent;
