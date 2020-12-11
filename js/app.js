document.addEventListener('DOMContentLoaded', () => {

    // grab form 

    const showForm = document.querySelector('#new-show-form');
    showForm.addEventListener('submit', handleFormSubmit);
    






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