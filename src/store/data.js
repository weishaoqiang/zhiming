export const state = {
  breadcrumb: []
}

export const getters = {
  getBreadcrumb(state) {
    return state.breadcrumb
  }
}

export const mutations = {
  updateBreadcrumb(state, value) {
    state.dreadcrumb = value
  }
}


export const actions = {}