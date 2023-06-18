import Head from "next/head";

const SEO = ({ SEO_DATA }) => {
  return (
    <Head>
      <title>{`${SEO_DATA.title}`}</title>
      <meta name="description" content={`${SEO_DATA.description}`} />
      <meta name="keywords" content={`${SEO_DATA.keywords}`} />
      <link rel="canonical" href={`${SEO_DATA.url}`} />
    </Head>
  );
};
export default SEO;
