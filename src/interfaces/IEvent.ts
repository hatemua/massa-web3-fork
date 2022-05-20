export interface IEvent {
    data: string; // Arbitrary json string generated by the smart contract
    id: string; // event id
    context: {
         slot: {
            period: number,
            thread: number
        },
		block: null | string // block id,
		read_only: Boolean // wether the event was generated during  read only call
		call_stack: [string], // Addresses
        index_in_slot: number,
        origin_operation_id: null | string // operation id
    };
}