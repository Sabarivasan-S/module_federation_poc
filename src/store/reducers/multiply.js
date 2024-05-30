export const multiply=(state = 1, action) =>{
    switch (action.type) {
      case 'm/twice':
        return state * 2
      case 'm/thrice':
        return state * 3
      default:
        return state
    }
  }