import { Before, World } from '../'

// `this` should implicitly be of type `World` if not specified
Before(async function () {
  if (!this.parameters.foo) {
    throw new Error('test')
  }
})

class CustomWorld extends World {
  readonly foo: string = 'bar'
  doThing(): void {}
}

// `this` can be overridden with custom world class
Before(async function (this: CustomWorld) {
  if (!this.foo) {
    throw new Error('test')
  }
  this.doThing()
})
