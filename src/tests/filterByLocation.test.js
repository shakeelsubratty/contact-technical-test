const filterByLocation = require('../filterByLocation')

test('should filter by Springfield to return Homer and Krusty', () => {
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
    expect(filterByLocation(talent_data, 'Springfield')).toStrictEqual(["Homer Simpson", "Krusty the Clown"])
})

test('should filter by Springfield to return Homer, and handle missing location data.', () => {
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
          "date_of_birth": "1980-03-19"
        },
        {
          "name": "Krusty the Clown",
            "date_of_birth": "1957-10-29"
        }
    ]
    expect(filterByLocation(talent_data, 'Springfield')).toStrictEqual(["Homer Simpson"])
})

test('should attempt to filter by Toronto, and return empty array.', () => {
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
    expect(filterByLocation(talent_data, 'Toronto')).toStrictEqual([])
})

test('should attempt to filter by Springfield and throw exception for missing filtered entry name.', () => {
    let talent_data = 
    [
        {
            "location": "Springfield",
            "date_of_birth": "1956-05-12"
          },
          {
            "name": "Frank Reynolds",
            "location": "Philidelphia",
            "date_of_birth": "1944-11-17"
          },
          {
            "location": "Los Angeles",
            "date_of_birth": "1980-03-19"
          },
          {
            "name": "Krusty the Clown",
            "location": "SpringField",
              "date_of_birth": "1957-10-29"
          }
    ]
    expect(() => filterByLocation(talent_data, 'Springfield')).toThrow('Filtered talent is missing name.')
})

test('should raise execption on passed in object', () => {
  let talent_data = {
    "name": "Frank Reynolds",
    "location": "Philidelphia",
    "date_of_birth": "1944-11-17"
  }
  expect(() => filterByLocation(talent_data, 'Springfield')).toThrow('Expected array of objects, recieved object.')
});


