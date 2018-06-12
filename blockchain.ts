import {Block} from "./block";
import {GenesisBlock} from "./genesis-block";
import {NextBlock} from "./next-block";

export class Blockchain {
    private _blockchain: (GenesisBlock|Block)[] = [];

    constructor() {
        this._blockchain.push(GenesisBlock);
    }

    get blockchain(): (GenesisBlock | Block)[] {
        return this._blockchain;
    }

    generateBlock(data: string): Block {
        return new NextBlock(this.blockchain[0], data);
    }

    addBlock(newBlock: Block) {
        this.blockchain.push(newBlock);

        if(this.blockWasAdded(newBlock)) {
            console.log(`Block #${newBlock.index} was successfully added!`);
        } else {
            console.log(`Something went wrong when adding Block #${newBlock.index}`);
        }
    }

    blockWasAdded(newBlock: Block): boolean {
        return this.blockchain.indexOf(newBlock) !== -1;
    }

    logChain(): string {
        return this.blockchain.toString();
    }
}