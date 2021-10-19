let initialArtToysState = {
  showMenu:false,
  data:null,
  listFilter:'',
  toysPerPage:12,
  nbOfPages:0,
  pageRange:1,
  tags:null,
  currentTags:[],
  basket:[],


}
const ArtToysReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_BASKET':
      let ADD_BASKET = {...state}
      const cartIndex = ADD_BASKET.basket.indexOf(action.payload)
      if(cartIndex=== -1)ADD_BASKET.basket.push(action.payload)
      else ADD_BASKET.basket.splice(cartIndex,1)
    return ADD_BASKET;

    case 'ALL_TAGS':
      let ALL_TAGS = {...state}
      if(ALL_TAGS.currentTags.length !== 0 && ALL_TAGS.currentTags.length !== ALL_TAGS.tags.length) ALL_TAGS.currentTags = [...ALL_TAGS.tags]
    return ALL_TAGS;

    case 'SET_TAG_FILTER':
      let SET_TAG_FILTER = {...state}
      const tagIdx = SET_TAG_FILTER.currentTags.indexOf(action.payload)
      if(tagIdx!==-1)SET_TAG_FILTER.currentTags.splice(tagIdx,1)
      else SET_TAG_FILTER.currentTags.push(action.payload)
    return SET_TAG_FILTER;

    case 'TAGS':
      let TAGS = {...state}
      TAGS.tags = action.payload
    return TAGS;

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
