const url = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
    return fetch(url)
        .then((response) => response.json())
        .then(blogs => {
            return blogs.map(blog => {
                return {
                    title: blog.title,
                    body:blog.body
        }
    })
    })
};
