#    0x06. Unittests in JS

![img](https://assets.imaginablefutures.com/media/images/ALX_Logo.max-200x150.png)

![ tests wont fail if you skip them](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/90f79a666e174e6c4ffc.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240504%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240504T042804Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=98b97f3c22f656282bab43254e89b1a0a183ffe55e2da43825ecf270932f00cb)

## Resources
__Read or watch__:

1. [Mocha documentation](https://mochajs.org/#installation)
2. [Chai](https://www.chaijs.com/)
3. [Sinon](https://sinonjs.org/)
4. [Express](https://expressjs.com/en/guide/routing.html)
5. [Request](https://www.npmjs.com/package/request)
6. [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

# Unit Testing in JavaScript with Mocha

This README.md provides guidance on writing unit tests in JavaScript using Mocha, a popular testing framework.

## How to Use Mocha to Write a Test Suite

Mocha is a feature-rich JavaScript test framework running on Node.js, making asynchronous testing simple. To write a test suite with Mocha, follow these steps:

-   Install Mocha globally:

```bash
npm install -g mocha
```

-   Write your test cases using the describe and it functions:
```
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```
-   Run your tests:
```
mocha
```
##  How to Use Different Assertion Libraries (Node or Chai)

Mocha allows you to use different assertion libraries such as Node.js assert or Chai. Node.js assert is built into Node.js, while Chai provides a more expressive syntax. Here's how to use both:
-   Using Node.js assert:

```
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```
-   Using Chai:
```
const { expect } = require('chai');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});
```

##  How to Present Long Test Suites

When dealing with long test suites, it's essential to organize your tests properly. Use descriptive test case names, group related tests using describe blocks, and consider breaking down complex tests into smaller, focused tests.

##  When and How to Use Spies

Spies are used to observe the behavior of functions in your code. They allow you to track function calls and arguments. Here's an example of how to use spies with the sinon library:

```
const sinon = require('sinon');

describe('Calculator', function() {
  it('should call the add function with the correct arguments', function() {
    const add = sinon.spy();
    myCalculator.add(2, 3);
    sinon.assert.calledWith(add, 2, 3);
  });
});
```
##  When and How to Use Stubs

Stubs are used to replace functions with predetermined behavior. They allow you to control the behavior of functions during testing. Here's an example of how to use stubs with the sinon library:

```
const sinon = require('sinon');

describe('Calculator', function() {
  it('should return 5 when calling add', function() {
    const add = sinon.stub().returns(5);
    const result = myCalculator.add(2, 3);
    assert.equal(result, 5);
  });
});
```
##  What Are Hooks and When to Use Them

Hooks in Mocha allow you to run setup and teardown code before and after your tests. They help keep your test code clean and organized. Common hooks include before, after, beforeEach, and afterEach.

##  Unit Testing with Async Functions

Unit testing asynchronous functions requires special handling to ensure tests complete correctly. Mocha provides support for testing asynchronous code using callbacks, Promises, or async/await.

```
describe('AsyncFunction', function() {
  it('should resolve with "success" message', async function() {
    const result = await asyncFunction();
    assert.equal(result, 'success');
  });
});
```
##  How to Write Integration Tests with a Small Node Server

Integration tests involve testing the interaction between different parts of your application. You can write integration tests for a small Node server using libraries like supertest to make HTTP requests and assert the responses.

```
const request = require('supertest');
const app = require('../app');

describe('GET /', function() {
  it('responds with "Hello, World!"', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World!', done);
  });
});
```
