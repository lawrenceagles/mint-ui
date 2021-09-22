import axios, { AxiosPromise } from 'axios';

interface HasID {
	id?: number; // this id is not really optional but it is required to make TS work with UserProps interface in User.ts
}

export class Sync<T extends HasID> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(`${this.rootUrl}`, data);
		}
	}
}
