// const getEventAdd = function() {
//     const getBtn = document.querySelector('#get-btn')
//     getBtn.addEventListener('click', (event) => {
//         console.log(event.target)
//     })
// }



function getEventAdd() {
    const getBtn = document.querySelector('#get-btn')
    getBtn.addEventListener('click', (event) => {
        // console.log(event.target)
        const backendURL = 'http://127.0.0.1:8000/api/v1/articles/'
        axios({
            method:'GET', 
            url:backendURL, 
            params: {
                content:'test'
            }
        }).then((response) => {
            console.log('response = ', response.data)
            const items = response.data
            const cuteOl = document.querySelector('#hjol')
            items.forEach((item) => {
                const titleLi = document.createElement('li')
                titleLi.innerText = item.title
                titleLi.id = `item-${item.id}`
                cuteOl.appendChild(titleLi)

                const deleteBtn = document.createElement('button')
                deleteBtn.textContent = '삭제'
                deleteBtn.addEventListener('click', (event) => {
                    titleLi.remove()
                })

                titleLi.appendChild(deleteBtn)

            })


        }).catch((error) => {
            console.log('error = ', error)
        })  
    })
}

function postEventAdd() {
    const postBtn = document.querySelector('#post-btn')
    postBtn.addEventListener('click', (event) => {
        // console.log(event.target)
        const backendURL = 'http://127.0.0.1:8000/api/v1/articles/'
        axios({
            method:'POST', 
            url:backendURL, 
            data: {
                title : 'test',
                content:'test'
            }
        }).then((response) => {
            console.log('response = ', response)
        }).catch((error) => {
            console.log('error = ', error)
        })  
    })
}