import {Block} from "./block";
import {GenesisBlock} from "./genesis-block";
import {NextBlock} from "./next-block";

export class Blockchain {
    private get blockchain(): Block[] {
        return this._blockchain;
    }

    private get nextBlock(): Block {
        return this._nextBlock;
    }

    private set nextBlock(value: Block) {
        this._nextBlock = value;
    }

    private _blockchain: Block[] = [];

    // _nextblock will NOT be able to be null, as the constructor
    // calls the addNextBlock method which sets _nextblock
    private _nextBlock!: Block;

    constructor() {
        this.addNextBlock(new GenesisBlock());
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