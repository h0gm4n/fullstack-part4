import { useState, useEffect } from 'react'

import Blogs from './components/Blogs'

import blogService from './services/blogs'


const App = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then((initialPersons =>
      setBlogs(initialPersons)
    ))
  }, [])

  return (
    <div>
      <h2>Bloglist</h2>
      
      <h3>Blogs</h3>

      <Blogs
        blogs={blogs}
      />  
    </div>
  )

}

export default App
