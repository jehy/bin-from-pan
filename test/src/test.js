/* eslint-disable no-console*/
/* eslint-disable no-unused-vars*/
/* eslint-disable global-require*/

const
  majorVersion = parseInt(process.versions.node.split('.')[0], 10),
  Promise      = require('bluebird');

let binFromPan;
if (majorVersion <= 5) {
  console.log(`Using transpiled version of code and tests for your node version (${majorVersion})`);
  binFromPan = require('../../lib/index.js');
} else {
  console.log(`Using non transpiled version of code and tests for your node version (${majorVersion})`);
  binFromPan = require('../../src/index.js');
}


describe('Bin From Pan', () => {
  it('should not accept too short values', () => new Promise((resolve, reject)=> {
    try {
      const bin = binFromPan('11');
    } catch (e) {
      resolve();
    }
    reject();
  }));

  it('should not accept non numeric values', () => new Promise((resolve, reject)=> {
    try {
      const bin = binFromPan('asdsdf');
    } catch (e) {
      resolve();
    }
    reject();
  }));

  it('should return 8 digit bin for MIR', () => new Promise((resolve, reject)=> {
    const bin = binFromPan('22011234567890');
    if (bin !== '22011234') {
      reject(new Error('wrong bin!'));
    } else {
      resolve();
    }
  }));

  it('should return 6 digit bin for non MIR', () => new Promise((resolve, reject)=> {
    const bin = binFromPan('22211234567890');
    if (bin !== '222112') {
      reject(new Error('wrong bin!'));
    } else {
      resolve();
    }
  }));
});
