import { INodeProperties } from 'n8n-workflow';
import { buildApiProperties } from '../common';

export const name = 'teamCreditUsage';
export const displayName = 'Get Team Credit Usage';
export const action = 'Get team credit usage';
export const description = 'Get the remaining credits for your team';
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
		url: '=/team/credit-usage',
	},
};

export { options, properties };
