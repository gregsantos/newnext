// Fake todos data
const todos = [
  {
    id: 1,
    text: 'Buy milk',
  },
  { id: 2, text: 'Do laundry' },
  { id: 3, text: 'Pick up Dinner' },
]

export default (req, res) => {
  // Get data from your database
  res.status(200).json(todos)
}
