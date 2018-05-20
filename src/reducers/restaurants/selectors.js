
export const getData = state => state.restaurants.data;
export const isFetching = state => state.restaurants.status === 'REQUEST';
export const isFail = state => state.restaurants.status === 'FAIL';
export const selectedCategory = state => state.restaurants.category
