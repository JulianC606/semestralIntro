const initial = {
  path: '',
  background: 'white'
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION': {
      const backgroundColor = action.payload === '/about' ? '#001529' : 'white'
      return { ...state, path: action.payload, background: backgroundColor }
    }
    default:
      return state
  }
}

export default reducer
