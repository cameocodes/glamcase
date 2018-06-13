



document.addEventListener('DOMContentLoaded', function () {


    const testUrl = 'http://localhost:3000/cases'

                                                                                        // FETCHING COVERS

function fetchCovers() {
    fetch(testUrl)
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
        const viewCover = document.createElement('button')
        viewCover.innerText = 'View Case'
        viewCover.id = cover._id
        coverDiv.id = cover._id
        coverDiv.setAttribute('class', 'cover')
        coverDiv.innerHTML = `<p>$${cover.coverPrice}</p> <p>Size: ${cover.coverSize}</p> <p style="color: ${cover.coverColor}">Color: ${cover.coverColor}</p> <p>Material: ${cover.coverMaterial} Plastic</p>`
        coverDiv.appendChild(viewCover)
        viewCovers.appendChild(coverDiv)
    })
    
}
                                                                                        // SUBMIT COVER
    const displayCases = document.getElementById('display-cases') 
    const form = document.querySelector('form')
    const button = document.getElementById('postButton')
    button.addEventListener('click', submitCover)

    function submitCover(e){
        e.preventDefault();
        const newCover = {
            coverSize: form.coverSize.value,
            coverMaterial: form.coverMaterial.value,
            coverColor: form.coverColor.value,
        }
        if(form.coverSize.value == "Plus"){
            newCover.coverPrice = 20000;
        } else {
            newCover.coverPrice = 15000;
        }
        console.log(newCover)
        postCover(newCover)
            .then(res => console.log(res))
            // .then(cover => function(cover) {
            //     const coverDiv = document.createElement('div')
            //     const viewCover = document.createElement('button')
            //     viewCover.innerText = 'View Case'
            //     viewCover.id = cover._id
            //     coverDiv.id = cover._id
            //     coverDiv.setAttribute('class', 'cover')
            //     coverDiv.innerHTML = `<p>$${cover.coverPrice}</p> <p>Size: ${cover.coverSize}</p> <p style="color: ${cover.coverColor}">Color: ${cover.coverColor}</p> <p>Material: ${cover.coverMaterial} Plastic</p>`
            //     coverDiv.appendChild(viewCover)
            //     displayCases.insertAdjacentElement('afterbegin', coverDiv)
            // })
            .catch(err => console.log(err.message))
    }

    async function postCover(newCover){
        const url = 'http://localhost:3000/cases';
        const options = {method: 'POST', // or 'PUT'
            body: JSON.stringify(newCover),
            headers: {
            'Content-Type': 'application/json'
            }}
        const response = await fetch(url, options)
        const cover = await response.json()
        return cover;
    }





                                                                                        // VIEW COVER
                                                                                        
                                                                              

    displayCases.addEventListener("click", function(e) {
        if(e.target && e.target.nodeName == "BUTTON") {
            const coverID = e.target.id;
            console.log(coverID)
            fetchCover(coverID)
                .then(response => console.log(response))
                .catch(err => console.log(err.message))
        }
    }, false);

    async function fetchCover(cover){
        const response = await fetch(`http://localhost:3000/cases/${cover}`)
        const coverDetails = await response.json()
        return coverDetails
    }
    
    

});


