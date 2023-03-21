const Blogs = ({ blogs }) => {
    return (
      <div>
        {blogs.map(blog =>
          <p key={blog.id}>
            {blog.title} by {blog.author}
            <p>
            {blog.url}
            </p>
          </p>
        )}
      </div>
    )
  }
  
  export default Blogs