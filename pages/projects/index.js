import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { sanityClient, urlFor } from '../../lib/sanity';

const Projects = ({ projects }) => {
	return (
		<>
			<Head>
				<title>AJs Projects</title>

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
					className=" min-h-screen flex flex-col items-center justify-center"
				>
					<h1 className=" text-5xl md:text-6xl text-white font-lexe pb-10 text-center ">
						Past Projects
					</h1>

					<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 p-2 lg:p-6 max-w-7xl">
						{projects.map((project) => (
							<Link
								key={project._id}
								href={`/projects/${project.slug.current}`}
							>
								<div className="group cursor-pointer border rounded-lg shadow-xl overflow-hidden">
									<img
										src={urlFor(project.mainImage).url()}
										className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
									/>
									<div className="flex flex-col justify-between p-5 bg-zinc-200 h-full">
										<div>
											<h1 className="text-xl font-bold font-lexe pb-0 mb-0">
												{project.name}
											</h1>
											<p className=" pt-0 mt-0">
												Project No. : {project.projectNumber}
											</p>
											<p className="text-sm font-mont py-3">
												{project.shortDesc}
											</p>
											<p className="text-sm font-mono">{project.date}</p>
										</div>
									</div>
								</div>
							</Link>
						))}
					</section>
				</main>
			</Layout>
		</>
	);
};

export default Projects;

export const getServerSideProps = async () => {
	const query = `*[_type=='projects' && projectNumber != null]{
    _id,
    name,
    body,
    date,
    mainImage,
    projectNumber,
    shortDesc,
    slug,
    tags,
    url,
  }
  | order(projectNumber desc)`;

	const projects = await sanityClient.fetch(query);

	return {
		props: {
			projects,
		},
	};
};
