import { INodeProperties } from 'n8n-workflow';
import { buildApiProperties } from '../common';

export const name = 'creditUsageHistorical';
export const displayName = 'Get Historical Credit Usage';
export const action = 'Get historical credit usage';
export const description = "Get your team's credit usage over past billing periods";
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
		url: '=/team/credit-usage/historical',
	},
};

export { options, properties };
