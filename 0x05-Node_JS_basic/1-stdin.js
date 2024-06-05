#!/usr/bin/env node

/* a simple script to practice nodejs */

const WELCOME_MESSAGE_STUB = 'Welcome to Holberton School, what is your name?\n';

function yourName(message, callback) {
  process.stdout.write(message);
  process.stdin.on('data', (data) => {
    callback(data);
  });
}

function closingCallBack(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
}

function noClosingCallBack(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
}

if (process.stdin.isTTY) {
  yourName(WELCOME_MESSAGE_STUB, noClosingCallBack);
} else {
  yourName(WELCOME_MESSAGE_STUB, closingCallBack);
}
