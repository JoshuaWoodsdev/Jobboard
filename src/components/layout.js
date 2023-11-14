
import React from "react";
import styled from 'styled-components';
import NavBar from "./Nav.js";
import "../styles/global.css";


const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  width: 100%;
  flex: 1;
`;

const Layout = ({ children }) => (
  <SiteContainer>
    <NavBar />
    <ContentWrapper>{children}</ContentWrapper>
  </SiteContainer>
);

export default Layout;