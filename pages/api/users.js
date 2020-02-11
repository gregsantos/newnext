// Fake users data
const users = [
  { id: 1, name: 'Greg' },
  { id: 2, name: 'Sophia' },
  { id: 3, name: 'Marie' },
]

export default (req, res) => {
  // Get data from your database
  res.status(200).json(users)
}
