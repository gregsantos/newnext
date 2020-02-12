import fetch from 'isomorphic-unfetch'

const User = ({ user }) => <div>{user.name}</div>

User.getInitialProps = async ({ query: { id } }, res) => {
  const protocol = req ? req.headers['x-forwarded-proto'] || 'http' : ''
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const response = await fetch(`${baseUrl + '/api/user/' + id}`)
  //  const response = await fetch(`http://localhost:3000/api/user/${id}`)
  const user = await response.json()

  return { user }
}

export default User
