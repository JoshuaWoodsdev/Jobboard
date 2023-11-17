import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import backgroundImage from "../../assets/image/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg";

const ArticleHolder = styled.article`
display: flex;
min-width: 100%; 
background-image: url(${backgroundImage});
background-size: cover;
background-position: center;  
background-repeat: no-repeat; 
margin-top: 300px;
`;

const ImageArea= styled.div`
background-color: red;
width: auto;
height: 100%;
color: blue;
`;
const Article = styled.article`
  width: 60%; /* Equivalent to Tachyons' mw7 */
  padding: 2rem 2rem;
  text-align: center;
  border-radius: 0.5rem; /* Example border radius */
  background-color: #eff3f6; /* A light blue, as an example */
  color: #000080; /* Navy blue */
  margin:40px;
`;

const Title = styled.h1`
  font-weight: 600; /* Semi-bold */
  font-size: 2rem; /* f3 equivalent */
  line-height: 1.25; /* Title line height */
  margin-top: 0;
  margin-bottom: 1rem;
  @media screen and (min-width: 30em) {
    font-size: 2.5rem; /* f2-ns equivalent */
  }
`;

const Subtitle = styled.h2`
  font-weight: 400; /* Normal weight */
  font-size: 1.5rem; /* f4 equivalent */
  line-height: 1.5; /* Copy line height */
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-weight: 300; /* Lighter weight */
  font-size: 1.25rem; /* f5 equivalent */
  margin-top: 0;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 1rem; /* f6 equivalent */
  border-radius: 9999px; /* Fully rounded edges for pill shape */
  background-color: #0074d9; /* Blue */
  color: white;
  border: 1px solid #0074d9; /* Same as background for solid look */
  padding: 0.5rem 1rem; /* Vertical and horizontal padding */
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none; /* Removes underline from links */
  &:hover {
    background-color: #0064c8; /* A slightly darker blue for hover */
  }
`;

const SecondaryLink = styled(StyledLink)`
  background-color: transparent;
  color: #0074d9;
  border: 1px solid #0074d9;
  margin-right: 0;
  &:hover {
    background-color: #e6f3ff; /* A very light blue for hover on secondary button */
    color: white;
  }
`;


const SigninSignup = () => {
  return (
    <ArticleHolder>
    <Article>
      <Title>Job Search. For you</Title>
      <Subtitle>
        We keep it simple. No frills, no fuss—just the jobs you're looking for, right at your fingertips.
        Start your journey with us today and discover your next career adventure.
      </Subtitle>
      <Description>
        Sign up for beta access or learn more about x.
      </Description>
      <div>
        <StyledLink to="/jobs">Search Jobs</StyledLink>
        <SecondaryLink to="/jobs">Post Job</SecondaryLink>
      </div>
    </Article>
          
    </ArticleHolder>
  );
}

export default SigninSignup;
