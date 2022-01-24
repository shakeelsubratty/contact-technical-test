/* filterByLocation - takes a JSON object and a string location as input, and returns
        the names of talent in that location. */

let filterByLocation = (data, location) => {
    let result = []
    for (let talent of data) {
        //If entry is missing location, ignore it and continue
        if (talent['location'] != null) {
            if (talent['location'].toLowerCase() == location.toLowerCase()) {
                //If entry is missing name, raise as exception
                if (talent['name'] == null) {
                    throw new Error('Filtered talent is missing name.')
                }
                else { 
                    result.push(talent['name'])
                }
            }
        } 
    }
    return result
}

module.exports = filterByLocation