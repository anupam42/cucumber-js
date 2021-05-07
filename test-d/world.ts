import { Before, World } from '../'

// `this` should implicitly be of type `World` if not specified
Before(async function () {
  if (this.parameters.foo) {
    throw new Error('test')
  }
})

class CustomWorld extends World {}

// `this` should implicitly be of type `World` if not specified
Before(async function (this: CustomWorld) {
  if (this.parameters.foo) {
    throw new Error('test')
  }
})
