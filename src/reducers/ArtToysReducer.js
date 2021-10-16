let initialArtToysState = {
  isAuth:false,
  data:null,
}
const ArtToysReducer = (state, action) => {
  switch (action.type) {

    case 'STORE_DATA':
      let STORE_DATA = {...state}
      STORE_DATA.data = action.payload
    return STORE_DATA;

    case 'SET_IS_AUTH':
      let SET_IS_AUTH = {...state}
      SET_IS_AUTH.isAuth = action.payload
    return SET_IS_AUTH;

    default: throw new Error('Unexpected action');
  }
}

export default ArtToysReducer
export { initialArtToysState }
