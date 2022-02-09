import Head from 'next/head';
import Layout from '../components/layout';

const Skills = () => {
  return (
    <>
      <Head>
        <title>AJ's Skills</title>
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
              "linear-gradient(rgba(0 0 0 /.3), rgba(0 0 0 /.9)),url('/BGs/bgWhite.png')",
          }}
          className='h-screen'>
          <section>
            <h1></h1>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Skills;
