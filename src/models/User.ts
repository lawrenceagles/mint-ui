interface UserProps {
	// the question marks ? makes the interface optional
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
}
