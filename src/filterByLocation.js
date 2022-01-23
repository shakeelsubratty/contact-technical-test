let filterByLocation = (data, location) => {
    let result = []
    for (let talent of data) {
        if (talent['location'] != null) {
            if (talent['location'].toLowerCase() == location.toLowerCase()) {
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