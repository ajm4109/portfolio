import Head from 'next/head';
import Layout from '../components/layout';
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { FcCommandLine } from 'react-icons/fc';
import { AiTwotoneApi } from 'react-icons/ai';
import { MdMobileFriendly } from 'react-icons/md';
import { RiFlutterFill } from 'react-icons/ri';
import {
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiIonic,
} from 'react-icons/si';

const Skills = () => {
  return (
    <>
      <Head>
        <title>AJs Skills</title>
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
              "linear-gradient(rgba(0 0 0 /.6), rgba(0 0 0 /.9)),url('/BGs/bgWhite.png')",
          }}
          className='min-h-screen'>
          <div className=' max-w-5xl text-white p-5 mx-auto h-full'>
            <section>
              <h1 className='m-0 pt-5 text-5xl'>
                Welcome to the Skills Section
              </h1>
              <p className='m-0'>Skills to (hopefully) pay the bills! Ha!</p>
            </section>
            <section>
              <h2>Preface</h2>
              <p>
                Everything that I{`'`}ve learned, I have done so with Udemy
                courses, YouTube, Google, MDN, StackOverflow and other places
                here or there... Basically where ever I could find the answer
                that I was looking for.
              </p>
              <p>
                So I guess what I{`'`}m really trying to say is that I am self
                taught and still have a lot to learn.
              </p>
              <p>
                Before I go on a long rant, let me show you my very approximated
                time line so far.
              </p>
            </section>
            <section>
              <h2>In the Beginning...</h2>
              <div className='flex items-center justify-evenly max-w-sm mx-auto'>
                <ImHtmlFive className='text-4xl' />
                <ImCss3 className='text-4xl' />
                <SiJavascript className='text-4xl' />
              </div>
              <p>
                In the beginning, I started very sloppy with trying to figure
                out how to even get and use an IDE, thought I wanted to learn
                python and even touched a Jypiter book briefly.
              </p>
              <p>
                But I ended up just learning the vanilla JavaScript and CSS...
                And of course HTML was learn inherantly.
              </p>
              <p>
                It took me a while to learn this as I wasn{`'`}t really trying.
                I would learn a bunch and then go weeks without touching it
                again. But at some point I really started to dive in to it. Over
                all I would say I been at this for 8 months or so all together.
              </p>
              <h1>And then...</h1>
              <div className='flex flex-wrap items-center justify-evenly max-w-lg mx-auto'>
                <SiReact className='text-4xl' />
                <SiStyledcomponents className='text-4xl' />
                <SiNextdotjs className='text-4xl' />
                <SiTailwindcss className='text-4xl' />
                <FcCommandLine className='text-4xl' />
                <SiGithub className='text-4xl' />
                <SiNetlify className='text-4xl' />
                <SiVercel className='text-4xl' />
              </div>
              <p className='text-sm italic mt-2 font-light font-sans text-center'>
                Unfortunately, Sanity doesn{`'`}t have an icon in react-icons
              </p>
              <p>
                Once I learned the basics of JavaScript, such as, ternary
                expressions, short-circuiting, callstack {`&`} heap and arrow
                functions... you know, the basics, I wanted to learn the skills
                to do full stack web dev and that{`'`}s when I started learning
                things like React, Styled-components (which I don{`'`}t use
                anymore) and what the MERN stack is.
              </p>
              <p>
                In my research and development, I learned that there are even
                beter stacks out there and started learning those technologies.
                Things like Next.js, Tailwind CSS and Sanity Headless CMS and
                now that{`'`}s where all my focus is going so that I can be able
                to slap together a good looking site with a backend relatively
                quick and easy.
              </p>
              <p>
                Other things that I had to learn while developing myself in this
                arena was the command line and GitHub. I learned about Netlify
                and Vercel. I would also like to think at this point I become
                pretty comfortable with using vsCode aswell.
              </p>
              <p>
                I have spent probably close to the last 3... maybe 4 months
                working to learn this tech stack and everything I mentioned in
                this section. Today{`'`}s date is Feb 12th, 2022 as I write
                this... Which makes me shake my head because now, I realize, I
                should have, and will, turn this in to a blog post and have a
                better designed and less wordy page that focuses and highlights
                my skills...
              </p>
              <p>
                Anyways, it{`'`}s going to stay like this for a little bit...
                Moving on.
              </p>
              <h1>Things to come...</h1>
              <div className='flex flex-wrap items-center justify-evenly max-w-lg mx-auto'>
                <AiTwotoneApi className='text-4xl' />
                <SiFirebase className='text-4xl' />
                <SiMongodb className='text-4xl' />
                <SiNodedotjs className='text-4xl' />
                <SiExpress className='text-4xl' />
                <RiFlutterFill className='text-4xl' />
                <SiIonic className='text-4xl' />
                <MdMobileFriendly className='text-4xl' />
              </div>
              <p>
                Over the next few months I will be working on fully funtional
                clones to strengthen the knowledge I have gained thus far and to
                develop my api and backend skills. I need to get to a point
                where I can write a majority it out without referencing the
                DOCs.
              </p>
              <p>
                I will also be working on mobile apps with Flutter and Ionic. I
                want to be able to create applications that you can use on the
                web and on mobile, online or offline.
              </p>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Skills;
