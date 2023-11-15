import React from 'react';
import styled from 'styled-components';
import image1 from '../../assets/image/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg';
import image2 from '../../assets/image/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg';


const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 90px;
  padding: 20px;
  height: fit-content;

`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 100%; // Ensures the image takes up the full width of the card
  border-radius: 8px; // Optional: if you want rounded corners
  width: 100%; // This will make the image fill the container width
  height: 200px; // Set a fixed height for all images
  object-fit: cover; // This will cover the area without stretching the image
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
    imgSrc: image1,
    title: "Project One",
    description: "UI, Art direction React"
  },
  {  
    id: "id2",
    imgSrc: image2,
    title: "Project Two",
    description: "UX, Frontend Development"
  },
  // ... more projects
];




const FrontNewJobComponent = () => {
  return (
    <Gallery>
      {projects.map((projects) => (
       <Card key={projects.id}>
        <ProjectImage src={projects.imgSrc} alt={projects.title}/>
        <ProjectTitle>{projects.title}</ProjectTitle>
        <ProjectDescription>{projects.description}</ProjectDescription>
       </Card>
      ))}
    </Gallery>
  );
};

export default FrontNewJobComponent;
