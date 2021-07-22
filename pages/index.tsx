import AuthBlock from "../components/AuthBlock";
import AuthStateBlock from "../components/AuthStateBlock";
import BlockSpacer from "../components/BlockSpacer";
import Layout from "../components/Layout";
import RegisterBlock from "../components/RegisterBlock";

const IndexPage = () => {
  return (
    <Layout>
      <BlockSpacer />
      <AuthStateBlock />
      <BlockSpacer />
      <AuthBlock />
      <BlockSpacer />
      <RegisterBlock />
      <BlockSpacer />
    </Layout>
  );
};
export default IndexPage;
