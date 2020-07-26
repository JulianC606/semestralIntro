const initial = {
  loading: false,
  structure: []
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'FETCH_STRUCTURE':
      return { ...state, loading: true }
    case 'UPDATE_STRUCTURE':
      return { ...state, loading: false, pages: action.payload }
    default:
      return state
  }
}

export default reducer
