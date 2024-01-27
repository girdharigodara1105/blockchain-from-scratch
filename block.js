class Block{
    constructor({timestamp, prevHash, Hash, data})
    {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.Hash = Hash;
        this.data = data;
    };
};

const block1 = new Block({timestamp:'2/09/22', prevHash: '0xabc', prev: '0x123',data: 'Radhe Radhe'});
const block2 = new Block({timestamp: '03/09/22', prevHash: '0x123', hash: '0x456', data: 'Ram Ram'});
console.log(block1);
console.log(block2);