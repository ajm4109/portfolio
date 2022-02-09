import Head from 'next/head';
import Layout from '../../components/layout';
import { sanityClient } from '../../lib/sanity';

const Projects = ({ project }) => {
  return (
    <>
      <Head>
        <title>AJM - {project.name}</title>
        <meta
          name='description'
          content='AJ is showcasing his skills by building this site using Next.js, Tailwind CSS and Sanity on the back end!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main
          style={{
            background:
              "linear-gradient(rgba(0 0 0 /.7), rgba(0 0 0 /.9)),url('/BGs/bgGreen.png')",
          }}
          className='h-screen'>
          <section>
            <h1 className=' text-5xl md:text-6xl text-white font-lexe py-10'>
              Past Projects
            </h1>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Projects;

export const getStaticPaths = async () => {
  const query = `*[_type=='projects']{
        _id,
        slug{
            current
        }
    }`;

  const projects = await sanityClient.fetch(query);

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type =='projects' && slug.current == $slug][0]{
        _id,
        name,
        mainImage,
        slug,
        body
    }`;

  const project = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};
