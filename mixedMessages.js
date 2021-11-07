//My program is a random joke generator

/* 
List:
vaction in x, you decide to y, but instead you z
x = 3 locations
y and z = same pool of activities; 8
*/

const sentenceGen = {
    _places: [
        'New York',
    ],
    _activities: {
        'New York': [
            'Empire State Building',
            'Statue of Liberty',
            'Central Park',
            'World Trade Center',
            '9/11 Memorial'
        ],
    },
    get places() {
        return this._places;
    },
    get activities() {
        return this._activities;
    },
    addPlace(place) {
        if (place in this._places) {
            console.log('Place already added.');
        }
        this._places.push(place);
        this._activities[place] = [];
    },
    addActivity(place, activity) {
        for (let city in this._places) {
            if (place === city) {
                console.log('Place is valid.');
                for (let attraction in this._activites) {
                    if (activity === attraction) {
                        console.log('Activity already added');
                        return '.';
                    }
                }
                this._activites.place.push(activity);
                console.log('Attraction(s) have been added');
            }
        }
        console.log('Please use place function first.');
    }
};

/*
TESTS
--------------------------
*/

sentenceGen.addPlace(1);
//sentenceGen.addActivity('Sydney', ['idk']);

console.log(sentenceGen.places);
console.log(sentenceGen.activities);

//console.log(sentenceGen['New York']);


//console.log(`You arrive in ${place} for the first time in your life. You are really excited to go to the ${activity1}. In reality you end up going to ${activity2}`);