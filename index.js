// UI Elements
const year = document.getElementById('year')

// Functions
function getYear(){
    const date = new Date()
    return date.getFullYear()
}

year.innerText = getYear()