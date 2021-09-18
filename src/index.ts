import { User } from './models/User';

const user = new User({ name: 'Lawrence Eagles', age: 24 });

user.on('change', () => {});

console.log(user);
