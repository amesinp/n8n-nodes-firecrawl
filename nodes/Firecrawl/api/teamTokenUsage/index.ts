import { INodeProperties } from 'n8n-workflow';
import { buildApiProperties } from '../common';

export const name = 'teamTokenUsage';
export const displayName = 'Get Team Token Usage';
export const action = 'Get team token usage';
export const description = "Get your team's remaining tokens for the Extract API";
export const resourceName = 'Account';

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
		url: '=/team/token-usage',
	},
};

export { options, properties };
