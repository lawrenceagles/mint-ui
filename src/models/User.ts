interface UserProps {
	// the question marks ? makes the interface optional
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
}
