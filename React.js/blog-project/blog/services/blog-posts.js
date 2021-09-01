

export const getBlogs = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(blogs => {
        return blogs.map(blog => {
            return {
                title: blog.title,
                body: blog.body
            }
        })
    })
}