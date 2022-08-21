import { SET_IS_AUTHENTICATED } from './constants'

const initState: any = {
  isAuthenticated: localStorage.getItem('access_token') || '',
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      }
  }
}

export { initState }
export default reducer
