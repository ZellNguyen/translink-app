export const updateBus = buses => {
  return {
    type: 'UPDATE_BUS',
    buses
  }
}

export const submitSearch = text => {
  return {
    type: 'SEARCH',
    text
  }
}

export const reportError = err => {
  return {
    type: 'REPORT_ERROR',
    err
  }
}

export const load = isLoading => {
  return {
    type: 'LOAD_IN_PROGRESS',
    isLoading
  }
}
