import { Eventing } from './Eventing';
import { Sync } from './sync';

export interface UserProps {
	// the question marks ? makes the interface optional
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	public events: Eventing = new Eventing(); // problem with this technique is that it is hard coded and we cannot swap out sub modules easily.

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update); // overwrites everything in this.data with the update object
	}
}
