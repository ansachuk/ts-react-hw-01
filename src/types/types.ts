export type Data = {
	id: string;
	label: string;
	percentage: number;
};

export type Friend = {
	avatar: string;
	name: string;
	isOnline: boolean;
	id: number;
};

export type Transaction = {
	id: string;
	type: string;
	amount: string;
	currency: string;
};

export type User = {
	username: string;
	tag: string;
	location: string;
	avatar: string;
	stats: {
		followers: number;
		views: number;
		likes: number;
	};
};
