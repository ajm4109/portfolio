export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Project Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				maxLength: 96,
				source: 'name',
			},
		},
		{
			name: 'date',
			title: 'Project Date',
			type: 'date',
		},
		{
			name: 'projectNumber',
			title: 'Project No.',
			type: 'number',
		},
		{
			name: 'url',
			title: 'URL',
			type: 'string',
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
			},
		},
		{
			name: 'mainImage',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'shortDesc',
			title: 'Short Description',
			type: 'text',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],
	orderings: [
		{
			title: 'From Latest Project',
			name: 'projectOrderDesc',
			by: [{ field: 'projectNumber', direction: 'desc' }],
		},
		{
			title: 'From Earliest Project',
			name: 'projectOrderAsc',
			by: [{ field: 'projectNumber', direction: 'asc' }],
		},
	],
};
