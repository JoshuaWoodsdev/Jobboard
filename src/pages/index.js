import * as React from "react";
import Layout from "../components/layout";
import Index_IntroCopy from "../components/dataComponents/Index_IntroCopy";
import FrontNewJobComponent from "../components/compComponents/frontNewJobsComponent";
import Signup_Component from "../components/dataComponents/signupComponent";

const IndexPage = () => {
  return (
    <Layout>
      <>
       <Index_IntroCopy/>
       <FrontNewJobComponent/>
       <Signup_Component/>
      </>
    </Layout>

  )
};

export default IndexPage

export const Head = () => <title>Home Page</title>
