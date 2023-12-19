import data from './people.js';
console.log(data.length)

const filterPeopleOver40 = (person) => person.age > 40;
const getPersonFirstName = (person) => person.firstName;

const peopleOver40Names = data
    .filter(filterPeopleOver40)
    .map(getPersonFirstName)

console.log(peopleOver40Names.length);

const peopleOver40NamesReduce =  data.reduce((acc, person) => {
    if (filterPeopleOver40(person)) {
        acc.push(person.firstName);
    }

    return acc;
}, [])

console.log(peopleOver40NamesReduce)
