const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getName = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

var a = getPost().then(res => res.json()) // #1 get post
var b = a.then(res => getName(res.id)).then(res => res.json()) // #2 get name

Promise.all([b]).then(results => {
  console.log(results[0])
 
})















// const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/9')
// const ambilName = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
// const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

// getPost() // #1.fetch post
// .then(postResponse => postResponse.json()) // #2. get & return post json 
// .then(postResponse => ambilName(postResponse.id) // #3. fetch author
//   .then(authorResponse => authorResponse.json()  // #4 get & return author json
//     .then(authorResponse => getComment(postResponse.id) // #5 fetch comment
//       .then(commentResponse => commentResponse.json()) // #6 get & return comment json
//       .then(commentResponse => {  // #7 time to combine all results
//           return ({postResponse,authorResponse,commentResponse}) // #8 combine & return all reponses
//         })
//     )
//   )
//   .then(results => { // #9 read all responses
//     console.log(results.postResponse)
//     console.log(results.authorResponse)
//     console.log(results.commentResponse)

//   }) 
// )
// .catch(error => console.log(error)) //# 10 error handling