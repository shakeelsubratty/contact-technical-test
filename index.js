let talent_data = 
    [
        {
          "name": "Homer Simpson",
          "location": "Springfield",
          "date_of_birth": "1956-05-12"
        },
        {
          "name": "Frank Reynolds",
          "location": "Philidelphia",
          "date_of_birth": "1944-11-17"
        },
        {
          "name": "Diane Nguyen",
          "location": "Los Angeles",
          "date_of_birth": "1980-03-19"
        },
        {
          "name": "Krusty the Clown",
          "location": "SpringField",
            "date_of_birth": "1957-10-29"
        }
    ]

let filter_by_location = (data, location) => {
    for (let talent of data) {
        if (talent['location'].toLowerCase() == location.toLowerCase()) {
            console.log(talent['name'])
        }
    }
}

filter_by_location(talent_data, 'Springfield')