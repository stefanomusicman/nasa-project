// Example object of information for an upcoming launch
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

const launches = new Map();

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
}