let initialArtToysState = {
  showMenu:false,
  data:null,
}
const ArtToysReducer = (state, action) => {
  switch (action.type) {

    case 'STORE_DATA':
      let STORE_DATA = {...state}
      STORE_DATA.data = action.payload
    return STORE_DATA;

    case 'SHOW_MENU':
      let SHOW_MENU = {...state}
      SHOW_MENU.showMenu = action.payload
    return SHOW_MENU;

    default: throw new Error('Unexpected action');
  }
}

export default ArtToysReducer
export { initialArtToysState }
