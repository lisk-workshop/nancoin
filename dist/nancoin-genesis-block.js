"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nancoin_block_1 = require("./nancoin-block");
var NancoinGenesisBlock = /** @class */ (function () {
    // Manually construct a block with
    // index zero and arbitrary previous hash
    function NancoinGenesisBlock() {
        return new nancoin_block_1.Block(0, new Date().getTime(), 'Genesis Block', '0');
    }
    return NancoinGenesisBlock;
}());
exports.NancoinGenesisBlock = NancoinGenesisBlock;
//# sourceMappingURL=nancoin-genesis-block.js.map