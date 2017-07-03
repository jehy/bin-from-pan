# Bin From Pan

[![Build Status](https://travis-ci.org/jehy/bin-from-pan.svg?branch=master)](https://travis-ci.org/jehy/bin-from-pan)
[![Coverage Status](https://coveralls.io/repos/github/jehy/bin-from-pan/badge.svg?branch=master)](https://coveralls.io/github/jehy/bin-from-pan?branch=master)
[![dependencies Status](https://david-dm.org/jehy/bin-from-pan/status.svg)](https://david-dm.org/jehy/bin-from-pan)
[![devDependencies Status](https://david-dm.org/jehy/bin-from-pan/dev-status.svg)](https://david-dm.org/jehy/bin-from-pan?type=dev)

The leading six digits of the card number **used to be** the 
"issuer identification number (IIN)", sometimes referred to as the
"bank identification number (BIN)".

Now there are new BINs which take first 8 digits of card number. This small module
differentiates between 8 digit pans and 6 digit pans. Right now it only detects 8 digit MIR
pans but there can be more of those in future.

## Installation
```bash
npm install bin-from-pan
```

## Usage
```javascript
const bin = binFromPan('22011234567890');
```
Function can throw errors if pan was not valid.