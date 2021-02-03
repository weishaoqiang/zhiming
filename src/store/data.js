export const state = {
  breadcrumb: [1,2,3,4,5]
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