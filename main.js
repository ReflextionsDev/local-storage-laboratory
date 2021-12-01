// --- Challenge 1 ---

// Get HTML elements
const stringSaveForm = document.querySelector('#string-save-form');
const stringInput = document.querySelector('#string-input');
const savedString = document.querySelector('#saved-string');

// When the page is loaded, load information from local storage
const savedStringValue = localStorage.getItem('savedStringValue');
if (savedStringValue === null) {
    savedString.innerText = 'Nothing stored in local storage.';
} else {
    savedString.innerText = savedStringValue;
}

// When the form is submitted, save something to local storage
stringSaveForm.addEventListener('submit', function (event) {
    // event.preventDefault();
    localStorage.setItem('savedStringValue', stringInput.value);
});

// --- Challenge 2 ---

const counter = document.querySelector('.counter')

let pageCount = localStorage.getItem('pageCount')

if (pageCount === null) {
    pageCount = 0
} else {
    pageCount++
}

localStorage.setItem('pageCount', pageCount)

counter.innerHTML = `Page Count: ${pageCount}`

// --- Challenge 3 ---

const listForm = document.querySelector('#list-form')
const listInput = document.querySelector('#list-input')
const list = document.querySelector('#list')
const listString = localStorage.getItem('listString')

let listData = []

if (listString === null) {
    listData = []
} else {
    listData = JSON.parse(listString)

    for (const i of listData) {
        let item = document.createElement("li")
        item.innerHTML = i
        list.appendChild(item)
    }

}

listForm.addEventListener('submit', (e) => {
    // e.preventDefault()
    value = listInput.value
    listData.push(value)
    localStorage.setItem('listString', JSON.stringify(listData))
})