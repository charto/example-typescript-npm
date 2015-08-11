// Greeter.ts
/// <reference path = "../../typings/auto.d.ts" />

import {MeaningOfLife} from '@lib/dependency-example';

export default class Greeter {

	static sayHello(name: string) {
		console.log('Hello, ' + name);
	}

}

export class DeepThought {

	constructor(name: string) {
		this.result = MeaningOfLife.compute();
	}

	result: number;

}
