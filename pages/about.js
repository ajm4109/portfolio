import Head from 'next/head';
import Layout from '../components/layout';

const About = () => {
	return (
		<>
			<Head>
				<title>About AJ</title>
				<meta
					name="description"
					content="AJ is showcasing his skills by building this site using Next.js, Tailwind CSS and Sanity on the back end!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<main
					style={{
						background:
							"linear-gradient(rgba(0 0 0 /.7), rgba(0 0 0 /.9)),url('/BGs/bgBlue.png')",
					}}
					className="h-screen"
				>
					<section className="flex flex-col max-w-3xl m-auto">
						<div className="p-5">
							<h1 className="text-white">
								I <span>HATE</span> the lack of communication and logistic apps
								out there... Or is it I am disapointed with thier
								implimentation...{' '}
							</h1>
							<p className="text-white my-5">
								Cuz they all suck... if you didn't know what I mean.
							</p>
							<h2 className="text-white text-center">
								I AIM TO CORRECT THAT DEFICENCY
							</h2>
						</div>
					</section>
				</main>
			</Layout>
		</>
	);
};

export default About;
