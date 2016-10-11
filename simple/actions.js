const AGE = 'AGE';

export const setAge = value => ({
    type: AGE,
    payload: parseInt(value, 10)
});