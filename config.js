const cryptoHash = require('./crypto-hash');
const MINE_RATE = 1000; //in ms
const INITIAL_DIFFICULTY = 2;

const GENESIS_DATA = {
    timestamp: Date.now(),
    prevHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    data: 'Block 0',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    hash: cryptoHash(Date.now(), '0x0000000000000000000000000000000000000000000000000000000000000000', 'Block 0', INITIAL_DIFFICULTY, 0)
};

module.exports = {GENESIS_DATA, MINE_RATE};