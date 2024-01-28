const {GENESIS_DATA, MINE_RATE} = require('./config');
const cryptoHash = require('./crypto-hash');
const hexToBinary = require("hex-to-binary");

class Block{
    constructor({timestamp, prevHash, hash, data, nonce, difficulty})
    {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    };

    static genesis(){
       return new this(GENESIS_DATA);
    }

    static mineBlock({prevBlock, data})
    {
        let hash, timestamp;
        let nonce = 0;
        const prevHash = prevBlock.hash;

        let {difficulty} = prevBlock;

        do{
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({originalBlock: prevBlock, timestamp});
            hash = cryptoHash(timestamp, prevHash, data, nonce, difficulty);
        }while(hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty))

        return new this({timestamp, prevHash, data, hash, difficulty, nonce});
    }

    static adjustDifficulty({originalBlock, timestamp}){
        const {difficulty} = originalBlock;

        if(difficulty < 1)  return 1;

        const difference = timestamp - originalBlock.timestamp;
        if(difference >= MINE_RATE)  return difficulty-1;

        return difficulty+1;
    }
};

module.exports = Block;

// const block1 = new Block({timestamp:'2/09/22', prevHash: '0xabc', hash: '0x123',data: 'Radhe Radhe'});
// const block2 = new Block({timestamp: '03/09/22', prevHash: '0x123', hash: '0x456', data: 'Ram Ram'});
// // console.log(block1);
// // console.log(block2);

// const genesisBlock = Block.genesis();
// console.log(genesisBlock);
// console.log(block1);
// console.log(block2);

// const result = Block.mineBlock({prevBlock:block2, data: 'Jai Shree Ram'});
// console.log(result);