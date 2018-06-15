import {Block} from "./block";

export class GenesisBlock extends Block {
    constructor() {
        super(
            0,
            new Date().getTime(),
            'Genesis Block',
            '0'
        );
    }
}