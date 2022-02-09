import Head from 'next/head';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <>
      <Head>
        <title>AJs Porfolio</title>
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
              "linear-gradient(rgba(0 0 0 /.7), rgba(0 0 0 /.9)),url('/BGs/bgRed.png')",
          }}
          className='h-screen'>
          <section></section>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
