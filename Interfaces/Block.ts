export interface Block {
    readonly blockNumber: number,
    readonly timestamp: number,
    readonly data: string,
    readonly previousHash: string,
    readonly hash: string
}