import { User } from './models/User';

const user = new User({ name: 'Lawrence Eagles', age: 24 });

user.set({ name: 'John Doe' });

console.log(user.get('name'));
console.log(user.get('age'));
