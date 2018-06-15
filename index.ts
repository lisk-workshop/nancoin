import {Blockchain} from "./blockchain";
import {Block} from "./block";

let myBlockchain: Blockchain = new Blockchain();

let myNextBlock: Block = myBlockchain.generateNextBlock('This is the first block after the Genesis Block!');

myBlockchain.addNextBlock(myNextBlock);

myBlockchain.logChain();