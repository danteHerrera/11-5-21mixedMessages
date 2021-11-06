//My program is a random joke generator

/* 
List:
vaction in x, you decide to y, but instead you z
x = 3 locations
y and z = same pool of activities; 8
*/

let sentenceGen = {
    'New York': [
        'Empire State Building', 
        'Statue of Liberty', 
        'Central Park', 
        'World Trade Center',
        '9/11 Memorial'
    ],
};


const locationAddFactory = (place, activityList) => {
    if (place in sentenceGen) {
        return place + 'Already used, will add to object later';
    }
    return {
        place: activityList,
    };
}



const randomSentenceGenerator = () => {
    return randomSentence;
}

sentenceGen += locationAddFactory('Sydney', ['Opera House', 'Coral Reef', 'Royal Botanic Garden']);

console.log(sentenceGen['New York']);


//console.log(`You arrive in ${place} for the first time in your life. You are really excited to go to the ${place1}. In reality you end up going to ${place2}`);