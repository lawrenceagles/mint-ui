import axios, { AxiosResponse } from 'axios';

interface UserProps {
	// the question marks ? makes the interface optional
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update); // overwrites everything in this.data with the update object
	}

	fetch(): void {
		axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}

	save(): void {
		const id = this.get('id');

		if (id) {
			axios.put(`http://localhost:3000/users/${id}`, this.data);
		} else {
			axios.post(`http://localhost:3000/users`, this.data);
		}
	}
}
