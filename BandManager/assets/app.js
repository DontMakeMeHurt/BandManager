var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
// stream luong du lieu tra ve
    .then(function(response){
        // console.log(response)
        // console.log(response.json())
        return response.json() //JSON.parse() luon roi
    })
    .then(function(posts){
        // console.log(posts)
        var htmls = ''
        posts.forEach(function(post) {
            return htmls +=`
            <li><h2>${post.title}</h2></li>
            <p>${post.body}</p>
            `
        });
        // console.log(htmls)
        document.querySelector('ul').innerHTML = htmls
    })
    .catch(function(err){
        console.log('co loi')
    })