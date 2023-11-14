import * as React from "react";
import Layout from "../components/layout";
import Index_IntroCopy from "../components/dataComponents/Index_IntroCopy";
import FrontNewJobComponent from "../components/compComponents/frontNewJobsComponent";

const IndexPage = () => {
  return (
    <Layout>
      <>
       <Index_IntroCopy/>
       <FrontNewJobComponent/>
       
      </>
    </Layout>

  )
};

export default IndexPage

export const Head = () => <title>Home Page</title>
