import {Block} from "./block";
import {GenesisBlock} from "./genesis-block";
import {NextBlock} from "./next-block";

export class Blockchain {
    get blockchain(): Block[] {
        return this._blockchain;
    }

    get nextBlock(): Block {
        return this._nextBlock;
    }

    set nextBlock(value: Block) {
        this._nextBlock = value;
    }

    private _blockchain: Block[] = [];
    private _nextBlock: Block;

    constructor() {
        this._nextBlock = new GenesisBlock();

        this.addNextBlock(this._nextBlock);
    }

    public generateNextBlock(data: string): Block {
        return new NextBlock(this.blockchain[this.blockchain.length - 1], data);
    }

    public addNextBlock(block: Block): void {
        this.nextBlock = block;

        this.blockchain.push(this.nextBlock);

        if(this.checkBlockWasAdded()) {
            console.log(`Block #${this.nextBlock.index} was successfully added!`);
        } else {
            console.log(`Something went wrong when adding Block #${this.nextBlock.index}`);
        }
    }

    private checkBlockWasAdded(): boolean {
        return this.blockchain.indexOf(this.nextBlock) !== -1;
    }

    public logChain(): void {
        console.log(JSON.stringify(this.blockchain));
    }
}