import Fuse from 'fuse.js'
import * as Constants from './constants.js'

export default function Search(data, nominator, relation, searchTerms) {

  const options = {
    keys: ['Name', 'AKA', 'Species'],
    threshold: 0.2
  }

  let fuse = new Fuse(data, options)
  //if the user didn't enter a search term, then return the full dataset.
  if (!searchTerms) {
    return data.map((item) => {
      return {
        ...item,
        id: crypto.randomUUID()
      }
    })
  } else {
    return fuse.search(searchTerms).map((result) => {
      return {
        ...result.item,
        id: result.refIndex
      }
    })
  }
}
