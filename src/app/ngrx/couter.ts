export function counter(state = 110, action) {
    if (action.type === 'INCREASE') return state + 1;
    if (action.type === 'DESCREASE') return state - 1;
    if (action.type === 'RESET') return 0;
    return state;
}
