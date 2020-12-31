export default function ({ store, route, redirect }) {
  const user = store.state.users.user

  const blockedRoute = /\/settings\/*/g
  // if not logged in, prevent from going to restricted area
  if (!user && route.path.match(blockedRoute)) {
    redirect('/')
  }

  const loginRout = '/login'
  // if logged in, then there is no need to go to login page
  if (user && route.path === loginRout) {
    redirect('/permitting')
  }
}
