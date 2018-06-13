const url = '../example-case.json'


function fetchCovers() {
    fetch(url)
        .then(response => response.json())
        .then(res => showCovers(res))
        .catch(err => console.log(err.message))
}

fetchCovers()


function showCovers(res) {
    const viewCovers = document.querySelector('span')
    const coverList = res
    coverList.forEach(cover => {
        console.log(cover)
        const coverDiv = document.createElement('div')
        coverDiv.id = cover.id
        coverDiv.innerText = `$${cover.price}, ${cover.phoneSize}, ${cover.color}, ${cover.material}`
        viewCovers.appendChild(coverDiv)
    })
    
}
