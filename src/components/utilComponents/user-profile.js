import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.section`
  width: 100%;
  margin: auto;
  background: #fff;
  padding: 4rem;
  background-color: white;
`;

const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding:10px;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-right: 2rem;
`;

const UserName = styled.h1`
  margin: 0;
`;

const UserTitle = styled.h2`
  font-weight: normal;
  color: #666;
  margin: 0;
`;

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #0056b3;

  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  padding: 2rem 0;
`;

const Biography = styled.p`
  line-height: 1.6;
`;

const SectionTitle = styled.h3`
  color: #0056b3;
  margin-bottom: 1rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
`;

const ExperienceTitle = styled.h4`
  font-weight: bold;
`;

const ExperienceCompany = styled.div`
  font-weight: normal;
  color: #666;
`;

const ExperienceDescription = styled.p`
  color: #333;
`;

const userData = {
    id: "sam-beacon",
    name: "Sam Beacon",
    title: "Front-end Developer",
    bio: "Sam Beacon is a seasoned Front-end Developer with over 10 years of experience in building accessible, performant web applications. A strong advocate for web standards and accessibility, Sam has contributed to open-source projects and spoken at numerous tech conferences. In their free time, Sam enjoys hiking and landscape photography.",
    imageUrl: "/static/image/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg",
    experience: [
      {
        companyName: "TechCorp",
        role: "Senior Front-end Developer",
        startDate: "Jan 2018",
        endDate: "Present",
        description: "Leading the front-end team, implementing modern web technologies to improve user experience, and optimizing application performance.",
      },
      // More experience entries...
    ],
    education: [
      {
        institution: "State University",
        degree: "B.S. in Computer Science",
        startDate: "Sep 2006",
        endDate: "May 2010",
      },
      // More education entries...
    ],
    links: [
      { name: "Resume", url: "/resume" },
      { name: "Work", url: "/work" },
      { name: "Contact Info", url: "/contact" },
      // Additional links...
    ],
  };
  
// The UserProfile component, which uses the styled components
const UserProfiles = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage src={userData.imageUrl} alt={userData.name} />
        <div>
          <UserName>{userData.name}</UserName>
          <UserTitle>{userData.title}</UserTitle>
        </div>
      </ProfileHeader>
      <Nav>
        <NavList>
          {userData.links.map(link => (
            <NavItem key={link.name}>
              <NavLink href={link.url}>{link.name}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      <MainContent>
        <Biography>{userData.bio}</Biography>
        <>
  <SectionTitle>Experience</SectionTitle>
  {userData.experience.map((job, index) => (
    <ExperienceItem key={index}>
      <ExperienceTitle>{job.role}</ExperienceTitle>
      <ExperienceCompany>{job.companyName} - {job.startDate} to {job.endDate}</ExperienceCompany>
      <ExperienceDescription>{job.description}</ExperienceDescription>
    </ExperienceItem>
  ))}
  {/* Repeat for Education and other sections */}
</>
      </MainContent>
    </ProfileContainer>
  );
};

export default UserProfiles;
