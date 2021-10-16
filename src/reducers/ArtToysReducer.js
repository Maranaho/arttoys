let initialArtToysState = {
  showMenu:false,
  data:null,
  listFilter:'',
  toysPerPage:12,
  nbOfPages:0,
  pageRange:1,


}
const ArtToysReducer = (state, action) => {
  switch (action.type) {

    case 'SET_FAV':
      let SET_FAV = {...state}
      const { toy:favToy, fav } = action.payload
      SET_FAV.data[1].toys[favToy].fav = fav
    return SET_FAV;

    case 'LOAD_MORE_TOYS':
      let LOAD_MORE_TOYS = {...state}
      LOAD_MORE_TOYS.pageRange++
    return LOAD_MORE_TOYS;

    case 'NB_OF_LIST_PAGES':
      let NB_OF_LIST_PAGES = {...state}
      NB_OF_LIST_PAGES.nbOfPages = action.payload
    return NB_OF_LIST_PAGES;

    case 'SET_LIST_FILTER':
      let SET_LIST_FILTER = {...state}
      SET_LIST_FILTER.listFilter = action.payload
    return SET_LIST_FILTER;

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
