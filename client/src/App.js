import { useState, useEffect } from 'react'

const App = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(pageNumber)
  const [pages, setPages] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:5000/api/v1/posts?page=${page}`)

        const { data, page: totalPages } = await res.json()

        setPages(totalPages)
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError('Some error occurred')
      }
    }

    fetchPosts()
  }, [page])

  return (
    <div className='App'>
      {/* pagination component */}
      {/* posts listing */}
      {/* pagination component */}
    </div>
  )
}

export default App
