//My program is a random joke generator

/* 
List:
vaction in x, you decide to y, but instead you z
x = 3 locations
y and z = same pool of activities; 8
*/

const sentenceGen = {
    _places: [
        'New York', 'Sydney', 'Paris'
    ],
    _activities: {
        'New York': [
            'Empire State Building',
            'Statue of Liberty',
            'Central Park',
            'World Trade Center',
            '9/11 Memorial'
        ],
        'Sydney': [
          'Opera House',
          'Great Barrier Reef',
          'Botanical Gardens',
          'Sydney Habour Bridge',
          'helicopter tour'
        ],
        'Paris': [
          'Effiel Tower',
          'Louvre Museum',
          'Eating French food',
          'Musée d\'Orsay',
          'Arc de Triomphe'
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
      // let newPlace = place[1:place.length-1]; error for some reason idk why
      //console.log(newPlace);
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
    },
    randomSentence() {
      const randN = Math.floor(Math.random()*this._places.length);
      let randN2 = 0;
      let randN3 = 0;
      console.log(randN);
      //.indexOf implementation wasn't working, if I can make it work, loop and if statement not needed.
      for (let city in this._activities) {
        if (city === this._places[randN]) {
          do {
          randN2 = Math.floor(Math.random()*this.activities[city].length);
          randN3 = Math.floor(Math.random()*this.activities[city].length);
          } while (randN2 === randN3)
          //console.log(randN2);
          //console.log(randN3);
          console.log(`You arrive in ${city} for the first time in your life. You are really excited to go to the ${this.activities[city][randN2]}. In reality you end up going to ${this.activities[city][randN3]}.`);
        }
      }
      return '';
    }
};

/*
TESTS
--------------------------
*/

//sentenceGen.addPlace('hello');
sentenceGen.addActivity('Sydney', ['Nothin']);

console.log(sentenceGen.places);
console.log(sentenceGen.activities);
//console.log(sentenceGen.randomSentence()); Works if city and activity matches :(
//console.log(sentenceGen['New York']);
console.log(sentenceGen.randomSentence()); 


//console.log(`You arrive in ${place} for the first time in your life. You are really excited to go to the ${activity1}. In reality you end up going to ${activity2}`);