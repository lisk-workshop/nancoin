import {Block} from "./Block";
import {GenesisBlock} from "./GenesisBlock";
import {NextBlock} from "./NextBlock";

export class Blockchain {
    private get blockchainArray(): Block[] {
        return this._blockchainArray;
    }

    private readonly _blockchainArray: Block[];

    private constructor() {
        this._blockchainArray = [];
    }

    static createBlockchain(): Blockchain {
        const createdBlockchain = new Blockchain();
        createdBlockchain.addBlockToChain(new GenesisBlock());

        return createdBlockchain;
    }

    private addBlockToChain(block: Block): void {
        this.blockchainArray.push(block);
    }

    addNextBlockToChain(data: string) {
        this.addBlockToChain(new NextBlock(this.getLastBlockInChain(), data));
    }

    getBlockchain() {
        return this.blockchainArray;
    }

    getLastBlockInChain(): Block {
        return this.getBlockchain()[this.getBlockchain().length - 1];
    }

    getBlockByBlockNumber(blockNumber: number): Block | undefined {
        const foundBlock = this.blockchainArray.filter(block => block.blockNumber === blockNumber);

        return foundBlock.length === 0 ? undefined : foundBlock[0];
    }
}