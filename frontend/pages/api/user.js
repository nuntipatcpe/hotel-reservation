import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../libs/session'

export default withIronSessionApiRoute(userRoute, sessionOptions)

async function userRoute(req, res) {
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    })
  } else {
    res.json({
      isLoggedIn: false,
      email: '',
      id: null,
    })
  }
}
