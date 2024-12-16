const elements = {
     input : document.getElementById('input'),
 searchBtn : document.getElementById('search-btn'),
 container : document.getElementById('container'),
 title : document.getElementById('title'),
 post : document.getElementById('post'),
 comments : document.getElementById('comments'),
 showComments : document.getElementById('show-comments')
}




const fetchData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if(!response.ok) {
        console.error('error')
    }

    const data = await response.json()

    return data
}
  
 

  elements.searchBtn.addEventListener('click', () => {
    
(fetchData(input.value)).then(data => {
    elements.title.textContent = data.title
    elements.post.textContent = data.body
    elements.comments.removeAttribute('hidden')
})

elements.showComments.textContent = ''
})

comments.addEventListener('click', () => {
    elements.showComments.textContent = 'dont have any comments yet'
})