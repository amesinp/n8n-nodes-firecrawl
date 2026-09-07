import { INodeProperties } from 'n8n-workflow';
import { buildApiProperties } from '../common';

export const name = 'crawlActive';
export const displayName = 'Get Many Active Crawls';
export const action = 'Get many active crawls';
export const description = 'List all crawl jobs currently running for your team';
export const resourceName = 'Crawling';

function createProperties(): INodeProperties[] {
	return [];
}

const { options, properties } = buildApiProperties(
	name,
	displayName,
	action,
	description,
	createProperties(),
);

options.routing = {
	request: {
		method: 'GET',
		url: '=/crawl/active',
	},
};

export { options, properties };
