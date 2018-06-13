

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
        viewCover.innerText = 'View Cover'
        viewCover.id = cover.id
        coverDiv.id = cover.id
        coverDiv.setAttribute('class', 'cover')
        coverDiv.innerText = `Price: $${cover.coverPrice}, Size: ${cover.coverSize}, Color: ${cover.coverColor}, Material: ${cover.coverMaterial}`
        coverDiv.appendChild(viewCover)
        viewCovers.appendChild(coverDiv)
    })
    
}

document.addEventListener('DOMContentLoaded', function () {
                                                                                        // SUBMIT COVER

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
        console.log(newCover)
        postCover(newCover)
            .then(res => console.log(res))
            // .then(addToBookList)
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
                                                                                        
    const displayCases = document.getElementById('display-cases')   
    console.log(displayCases)                                                                             

    displayCases.addEventListener("click", function(e) {
        console.log(e.target.nodeName)
        if(e.target && e.target.nodeName == "BUTTON") {
            const coverID = e.target.id;
            fetchCase(coverID)
                .then(response => console.log(response))
                .catch(err => console.log(err.message))
        }
    }, false);

    async function fetchCover(cover){
        const response = await fetch(`http://localhost:3000/cases/${cover}`)
        const coverDetails = await response.json()
        return coverDetails
    }
    
    
    
    
    
    // const viewCoverButton = document.body.getElementsByTagName('button')
    // console.log(viewCoverButton)
    // viewCoverButton.addEventListener("click", function(e) {
    //     // e.target is the clicked element!
    //     // If it was a list item
    //     if(e.target && e.target.nodeName == "BUTTON") {
    //         // List item found!  Output the ID!
    //         console.log("List item ", e.target.id, " was clicked!");
    //     }
    // });

});


