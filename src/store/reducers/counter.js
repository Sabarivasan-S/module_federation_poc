export const counter=(state = 0, action) =>{
  switch (action.type) {
    case 'counter/INCREMENT':
      return state + 1
    case 'counter/DECREMENT':
      return state - 1
    default:
      return state
  }
}