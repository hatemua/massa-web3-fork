export interface IProductionStats {
    cycle: number;
    is_final: boolean;
    nok_count: number;
    ok_count: number;
}
export interface IEndorsementDraws {
    slot: {
        period: number;
        thread: number;
    };
    index: number;
}
export interface ILedgerDatastore {
    [name: string]: number;
}
export interface IAddressInfo {
    address: string;
    balance: {
        candidate_balance: string;
        final_balance: string;
        locked_balance: string;
    };
    block_draws: [
        {
            period: number;
            thread: number;
        }
    ];
    blocks_created: [string];
    endorsement_draws: Array<IEndorsementDraws>;
    involved_in_endorsements: [string];
    involved_in_operations: [string];
    production_stats: Array<IProductionStats>;
    rolls: {
        active_rolls: number;
        candidate_rolls: number;
        final_rolls: number;
    };
    thread: number;
    sce_ledger_info: {
        balance: String;
        module: null | [number];
        datastore: ILedgerDatastore;
    };
}
export interface IFullAddressInfo extends IAddressInfo {
    publicKey: string;
    privateKey: string;
}