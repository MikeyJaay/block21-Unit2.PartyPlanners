// API
const API_URL ='https://fsa-crud-2aa9294fe819.herokuapp.com/api/michael-jaroszynski/events'

// Create an object to save current state
const state = {
    events: [],
};



// Get Body HTML element by the html id
const eventsContainer = document.getElementById('events') 

// Get Form HTML element by the html id
const addEventForm = document.getElementById('edit')
addEventForm.

/* 
-----Fetch------- 
GET
POST
DELETE
*/
async function getEvents() {
    try {
        const response = await fetch (API_URL);
        const json = await response.json();
        state.events = json.data;
    }
    catch (error) {
        console.error(error);
    }
}

async function addEvent(event) {
    event.preventDefault();
    
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: addEventForm.name.value,
                date: addEventForm.date.value,
                location: addEventForm.location.value,
                description: addEventForm.description.value,
            }),
        });
    } catch (error) {
          console.error(error);
    }
    
    return response;
}
/* 
-----Functionality----  
List:
    names
    dates
    times
    locations
    descriptons 
    delete button (removes party when clicked)
    form (user inputs info)
*/


/* 
----Code Architecture ---
    DOM is dynamically rendered
    Data stored in state is updated to stay in sync with API
*/












