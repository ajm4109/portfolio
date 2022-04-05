import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { sanityClient, urlFor } from '../../lib/sanity';
import PortableText from 'react-portable-text';
import Image from 'next/image';

const Project = ({ project }) => {
	console.log(project.url);
	return (
		<>
			<Head>
				<title>AJM - {project.name}</title>
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
							"linear-gradient(rgba(0 0 0 /.7), rgba(0 0 0 /.9)),url('/BGs/bgGreen.png')",
					}}
					className="min-h-screen pt-7"
				>
					<div className="relative h-28 w-full">
						<Image
							src={urlFor(project.mainImage).url()}
							className="object-cover object-top"
							layout="fill"
						/>
					</div>
					<section className="px-7 max-w-6xl mx-auto flex flex-col items-center justify-center">
						<h1 className="text-center shrink text-5xl md:text-6xl text-white font-lexe py-10">
							{project.name}
						</h1>
						<div className="flex flex-col md:flex-row justify-between items-center mx-auto pb-10 ">
							<Link href="./">
								<a className="text-white border border-gold m-3 px-7 py-2 bg-drkRed/50 rounded text-center">
									Back to Projects
								</a>
							</Link>
							<Link
								href={
									project.url
										? project.url
										: '../' + project.slug.current + '/index.html'
								}
							>
								<a
									target="_blank"
									className="text-white border border-gold m-3 px-7 py-2 bg-drkRed/50 rounded text-center"
								>
									View Project
								</a>
							</Link>
						</div>
						<div>
							<PortableText
								className="text-white font-mont text-lg"
								content={project.body}
								serializers={{
									normal: ({ children }) => <p className="my-5">{children}</p>,
								}}
							/>
						</div>
					</section>
				</main>
			</Layout>
		</>
	);
};

export default Project;

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
        body,
        url
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
	};
};
