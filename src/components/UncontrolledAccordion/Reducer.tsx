 export type ActionType = {
    type: string
}
export const TOGGLE_CONST = 'TOGGLE-COLLAPSED'
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONST:
            return !state;
        default:
            throw new Error('Bad action type')
    }
}