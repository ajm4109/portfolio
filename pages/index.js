import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import { sanityClient } from '../lib/sanity';

const Home = ({ posts }) => {
	console.log(posts);

	return (
		<>
			<Head>
				<title>AJs Porfolio</title>
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
							"linear-gradient(rgba(0 0 0 /.7), rgba(0 0 0 /.9)),url('/BGs/bgDarkBlue.png')",
					}}
					className="min-h-screen pt-0"
				>
					<section className="max-w-5xl mx-auto mb-10 text-center">
						<h1 className="text-5xl md:text-6xl py-3 m-0 text-white font-lexe">
							Welcome
						</h1>
						<div className="flex-col items-center justify-center px-5 space-x-4 mt-6 flex-wrap">
							<Image
								src="/RUDtSIrV_400x400.jpg"
								height={150}
								width={150}
								alt="Profile picture"
								className="rounded-full right-0"
								priority
							/>
							<h2 className="text-white text-3xl justify-start font-lexe">
								My name is
								<br /> Anthony J. Martin <br />
								<span className="text-lg font-mont">...But, call me AJ 😎</span>
							</h2>
							<p className="font-mont text-xl text-white mt-6">
								I am a Skilled Laborer thats turning Coder!
							</p>
							<p className="text-white font-mont mt-6">
								I built this site and all its features from scratch.
								<br />
								<br />
								Through all the minutes and the hours and the days, weeks and
								months...
								<br />
								Through all the struggle and strife...
								<br />
								Through all the problems that I have had to scrounge through
								MDN, Stack Overflow, YouTube and Udemy
								<br /> to find the answers.
								<br />
								<br />I built this site!
							</p>
						</div>
					</section>
					<section className="max-w-5xl mx-auto pb-5">
						<div className="mx-5 bg-gray-100 rounded-lg p-3">
							<div className="block">
								<p className="text-slate-800">
									Check out the latest announcements below
								</p>
							</div>
							<div className="my-5 max-w-3xl mx-auto">
								<h1 className="text-2xl md:text-3xl font-lexe">
									Announcements
								</h1>
							</div>

							{posts.map((apost) => (
								<div key={apost._id} className="max-w-2xl mx-auto">
									<div className="border-2 border-slate-800 bg-gray-300 shadow-lg rounded-xl p-5 my-6">
										<h1 className="font-bold text-xl font-lexe m-0 ">
											{apost.title}
										</h1>
										<p className="font-mont text-sm m-0 py-3">
											{apost.shortDescription}
										</p>
										<p className="font-mono text-sm m-0">
											Post date: {apost.date}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
				</main>
			</Layout>
		</>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const query = `*[_type=='annoPost']{
    _id,
    title,
    slug{current},
    date,
    shortDescription,
    body,
  }`;

	const posts = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};
