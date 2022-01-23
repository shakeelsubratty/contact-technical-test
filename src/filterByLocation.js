let filterByLocation = (data, location) => {
    let result = []
    for (let talent of data) {
        if (talent['location'].toLowerCase() == location.toLowerCase()) {
            result.push(talent['name'])
        }
    }
    return result
}

module.exports = filterByLocation