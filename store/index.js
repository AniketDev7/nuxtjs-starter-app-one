// global store

export const state = () => ({
  header: null,
  footer: null,
})
export const mutations = {
  setHeader(state, data) {
    state.header = data
  },
  setFooter(state, data) {
    state.footer = data
  },
}
