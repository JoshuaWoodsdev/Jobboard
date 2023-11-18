import React from 'react';
import styled from 'styled-components';

const BusinessProfileContainer = styled.section`
  width: 100%;
  margin: auto;
  background: #fff;
  padding: 4rem;
`;

const BusinessHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #0056b3; /* Assuming you want a similar blue header */
  padding: 10px;
  color: white; /* For contrast with the blue background */
`;

const BusinessLogo = styled.img`
  width: 200px; /* Slightly smaller than the profile image */
  height: 200px;
  border-radius: 50%;
  margin-right: 2rem;
  background-color: white; /* In case you want a border-like effect */
  padding: 5px;
`;

const BusinessName = styled.h1`
  margin: 0;
`;

const BusinessInfo = styled.h2`
  font-weight: normal;
  color: #666;
  margin: 0;
`;

const BusinessNav = styled.nav`
  margin-bottom: 2rem;
`;

const BusinessNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const BusinessNavItem = styled.li`
  margin-right: 1rem;
`;

const BusinessNavLink = styled.a`
  text-decoration: none;
  color: white; /* Assuming you want white links to stand out on the blue background */
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  padding: 2rem 0;
`;

const BusinessBio = styled.p`
  line-height: 1.6;
`;

const SectionTitle = styled.h3`
  color: #0056b3;
  margin-bottom: 1rem;
`;

const BusinessExperienceItem = styled.div`
  margin-bottom: 1rem;
`;

const BusinessExperienceTitle = styled.h4`
  font-weight: bold;
`;

const BusinessExperienceDetail = styled.div`
  font-weight: normal;
  color: #666;
`;

const BusinessExperienceDescription = styled.p`
  color: #333;
`;

// ... styled components definitions (as above) ...

// Expanded sample data structure for a business profile
const businessData = {
  id: "techcorp-solutions",
  name: "TechCorp Solutions",
  industry: "Technology Services",
  bio: "TechCorp Solutions has been an innovator in the tech industry for over two decades, providing cutting-edge solutions for businesses globally. Our team of expert engineers and designers work tirelessly to bring you the latest in technology advancements.",
  logoUrl: "/static/image/techcorp-logo.jpg",
  about: "Founded in 2000, TechCorp Solutions has grown from a small startup to a multinational corporation with clients across the globe. We specialize in creating software that improves efficiency, enhances user experience, and boosts overall productivity.",
  services: [
    "Custom Software Development",
    "UI/UX Design",
    "Cloud Services Management",
    // More services
  ],
  contact: {
    phone: "1-800-TECH-CORP",
    email: "info@techcorpsolutions.com",
    address: "123 Silicon Valley, Tech City, 94025"
  },
  socialMedia: {
    linkedIn: "https://www.linkedin.com/company/techcorp-solutions",
    twitter: "https://twitter.com/TechCorpSol",
    // More social links
  },
  // ... any other relevant fields ...
};

// ... styled components definitions (as above) ...

const BusinessProfile = () => {
  return (
    <BusinessProfileContainer>
      <BusinessHeader>
        <BusinessLogo src={businessData.logoUrl} alt={businessData.name} />
        <div>
          <BusinessName>{businessData.name}</BusinessName>
          <BusinessInfo>{businessData.industry}</BusinessInfo>
        </div>
      </BusinessHeader>
      <MainContent>
        <SectionTitle>About Us</SectionTitle>
        <BusinessBio>{businessData.about}</BusinessBio>
        <SectionTitle>Services</SectionTitle>
        <ul>
          {businessData.services.map(service => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <SectionTitle>Contact Us</SectionTitle>
        <p>{businessData.contact.phone}</p>
        <p>{businessData.contact.email}</p>
        <p>{businessData.contact.address}</p>
        <SectionTitle>Follow Us</SectionTitle>
        <a href={businessData.socialMedia.linkedIn}>LinkedIn</a>
        <a href={businessData.socialMedia.twitter}>Twitter</a>
        {/* More social media links */}
      </MainContent>
    </BusinessProfileContainer>
  );
};

export default BusinessProfile;
