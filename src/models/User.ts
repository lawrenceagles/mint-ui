import axios, { AxiosResponse } from 'axios';

interface UserProps {
	// the question marks ? makes the interface optional
	id?: number;
	name?: string;
	age?: number;
}

interface Events {
	[key: string]: Callback[];
}

type Callback = () => void;

export class User {
	// we are not passing this event when we create an instance of the User.
	// Also, events are only registed after a user has been create thus we are adding as a seperate property outside the constructor.

	events: Events = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update); // overwrites everything in this.data with the update object
	}

	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) return;

		handlers.forEach((callback) => callback());
	}

	fetch(): void {
		axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}
}
