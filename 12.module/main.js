import { increase, getCount } from './counter.js';
import * as counter from './counter.js';

console.log(counter.getCount());
counter.increase();
counter.increase();
console.log(counter.getCount());
