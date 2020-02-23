let myGroup = {
    menthor: 'Wojtek',
    members: [
        {
            name: 'Janek',
            age: 22
        },
        {
            name: 'Asia',
            age: 12
        },
        {
            name: 'Marek',
            age: 33
        },
        {
            name: 'Andrzej',
            age: 44
        },
        {
            name: 'Jaś',
            age: 24
        },
        {
            name: 'Wokay JSON',
            age: 19
        }
    ]
}

console.log(myGroup.menthor);
console.log(myGroup.members.length);
let ageSum = 0;
for (let i = 0; i < myGroup.members.length; i++) {
    ageSum += Number(myGroup.members[i].age);
}
console.log(ageSum);

console.log(ageSum/myGroup.members.length);