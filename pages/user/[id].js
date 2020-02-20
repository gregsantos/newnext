import fetch from 'isomorphic-unfetch'
import { server } from '../../config'

const User = ({ user }) => <div>{user.name}</div>

User.getInitialProps = async ({ query: { id } }, req) => {
  const response = await fetch(`${server}/api/user/${id}`)
  const user = await response.json()

  return {
    user: user,
  }
}

export default User
