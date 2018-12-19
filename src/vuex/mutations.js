export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else if (user == null) {
    sessionStorage.setItem('userName', null)
    sessionStorage.setItem('userToken', '')
    state.currentUser = null
    state.isLogin = false
    state.token = ''
  }
}
