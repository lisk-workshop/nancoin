"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __importStar(require("crypto"));
var Block = /** @class */ (function () {
    function Block(index, timestamp, data, previous_hash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = this.hash_block();
    }
    Block.prototype.hash_block = function () {
        var sha = crypto.createHash('sha256');
        sha.update(this.index +
            this.timestamp +
            this.data +
            this.previous_hash);
        return sha.digest('hex');
    };
    return Block;
}());
exports.Block = Block;
//# sourceMappingURL=nancoin-block.js.map