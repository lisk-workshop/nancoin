import {Block} from "./block";

export class GenesisBlock extends Block {
    constructor() {
        super(
            0,
            'Genesis Block',
            '0'
        );
    }
}