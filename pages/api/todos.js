// Fake todos data
const todos = [
  {
    id: 1,
    text: 'Learn React',
  },
  { id: 2, text: 'Learn Next.js' },
  { id: 3, text: 'Profit' },
]

export default (req, res) => {
  // Get data from your database
  res.status(200).json(todos)
}
