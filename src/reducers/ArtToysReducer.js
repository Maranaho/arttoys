let initialArtToysState = {
  isAuth:false
}
const ArtToysReducer = (state, action) => {
  switch (action.type) {

    case 'SET_IS_AUTH':
      let SET_IS_AUTH = {...state}
      SET_IS_AUTH.isAuth = action.payload
    return SET_IS_AUTH;

    default: throw new Error('Unexpected action');
  }
}

export default ArtToysReducer
export { initialArtToysState }
