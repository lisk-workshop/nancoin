import {Blockchain} from "./Blockchain";

const myFirstBlockchain: Blockchain = Blockchain.createBlockchain();

console.log(JSON.stringify(myFirstBlockchain.getBlockchain()));

myFirstBlockchain.addNextBlockToChain('Block after Genesis Block');

console.log(JSON.stringify(myFirstBlockchain.getBlockchain()));

console.log(myFirstBlockchain.getBlockByBlockNumber(1));