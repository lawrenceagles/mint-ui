interface Events {
	[key: string]: Callback[];
}

type Callback = () => void;

export class Eventing {
	// we are not passing this event when we create an instance of the User.
	// Also, events are only registed after a user has been create thus we are adding as a seperate property outside the constructor.

	events: Events = {};

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
}
