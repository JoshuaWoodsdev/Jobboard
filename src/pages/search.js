
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

// Styled components for the page
const PageContainer = styled.div`
  padding: 1rem;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: white;
  color: #ffffff;
  padding: 1rem 0;
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const JobListings = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

const JobCard = styled.article`
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const CompanyName = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

const JobDescription = styled.p`
  color: #333;
`;

// Placeholder data for job listings
const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Co.',
    description: 'Looking for a skilled frontend developer to join our team.'
  },
  // Add more job objects here
];

const JobSearchPage = () => {
  return (
    <Layout>
    <PageContainer>
      <Header>
        <PageTitle>Job Search</PageTitle>
      </Header>
      <JobListings>
        {jobs.map(job => (
          <JobCard key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <CompanyName>{job.company}</CompanyName>
            <JobDescription>{job.description}</JobDescription>
          </JobCard>
        ))}
      </JobListings>
    </PageContainer>
    </Layout>
  );
};

export default JobSearchPage;



