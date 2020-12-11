document.addEventListener('DOMContentLoaded', () => {

    // grab form 
    const showForm = document.querySelector('#new-show-form');
    showForm.addEventListener('submit', handleFormSubmit);
    
    // DELETE BUTTON:
    // grab the body to add the delete button to
    const body = document.querySelector('body');

    // create delete button 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '⛔️ I HATE ALL THESE SHOWS NOW FOR SOME REASON ';

    // add event listener for button 
    deleteButton.addEventListener('click', handleDeleteButton);

    // add the delete button to the body
    body.appendChild(deleteButton);

});


const handleFormSubmit = function(event) {
    event.preventDefault();

    // grab the list
    const list = document.querySelector('#show-list');

    // create a div
    const div = document.createElement('div');

    // give div a class name
    div.classList.add('show_item');

    // grab form user input
    const title = event.target.title.value;
    const released = event.target.released.value;
    const seasons = event.target.seasons.value;
    const review = event.target.review.value;
    console.log(title, released, seasons, review);

    // create list item element

    const newListItemTitle = document.createElement('li');
    newListItemTitle.textContent = title;
    const newListItemReleased = document.createElement('li');
    newListItemReleased.textContent = released;
    const newListItemSeasons = document.createElement('li');
    newListItemSeasons.textContent = seasons;
    const newListItemReview = document.createElement('li');
    newListItemReview.textContent = review;

    // reset form after submission 
    document.querySelector('#new-show-form').reset();

    // append the li items in the div
    div.appendChild(newListItemTitle);
    div.appendChild(newListItemReleased);
    div.appendChild(newListItemSeasons);
    div.appendChild(newListItemReview);

    // append div to ul

    list.appendChild(div);
}

const handleDeleteButton = function() {
    // grabbing the unordered list
    const list = document.querySelector('#show-list');
    list.innerHTML = '';
};