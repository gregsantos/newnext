import fetch from 'isomorphic-unfetch'
import { server } from '../config'

const Todos = ({ todos }) => {
  return (
    <div>
      <p>My Todos</p>
      <ul>{todos && todos.map((t, i) => <li key={i}>{t.text}</li>)}</ul>
    </div>
  )
}

Todos.getInitialProps = async ({ req }) => {
  /*   const protocol = req ? req.headers['x-forwarded-proto'] || 'http' : ''
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const response = await fetch(`${baseUrl}/api/todos`) */
  const response = await fetch(`${server}/api/todos`)
  const todos = await response.json()

  return { todos }
}

export default Todos
