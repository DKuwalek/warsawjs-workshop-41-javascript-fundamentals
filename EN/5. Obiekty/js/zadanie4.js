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
};

let classAvaiable = [
    {
        name: 'A',
        number: 1,
        slots: 5,
        minAge: 10
    },
    {
        name: 'B',
        number: 2,
        slots: 10,
        minAge: 15
    },
    {
        name: 'C',
        number: 3,
        slots: 10,
        minAge: 0
    },
    {
        name: 'D',
        number: 4,
        slots: 15,
        minAge: 30
    },
    {
        name: 'E',
        number: 5,
        slots: 2,
        minAge: 5
    },
    {
        name: 'F',
        number: 6,
        slots: 12,
        minAge: 10
    },
    {
        name: 'G',
        number: 7,
        slots: 3,
        minAge: 40
    },
    {
        name: 'H',
        number: 8,
        slots: 30,
        minAge: 20
    }
];

/**
 * Skorzystaj z obiektu powyżej i
 * znajdź możliwe klasy, w których
 * grupa mogła by mieć zajęcia,
 * listę klas znajdziesz niżej,
 * Uwaga ze względu, że szkolenie
 * odbywa się w szkole samochodowej
 * to mechanicy zostawili pewne plakaty,
 * które nie powinny zobaczyć
 * osoby nieletnie.
 * Każda sala posiada atrybut
 * minAge który definiuje od jakiego
 * wieku można tam wejść ;>
 */

let membersMinAge
let groupMembers = myGroup.members;
for (let i = 0; i < groupMembers.length; i++) {
    if (membersMinAge == undefined) {
        membersMinAge = groupMembers[i].age;
    } else if (membersMinAge > groupMembers[i].age) {
        membersMinAge = groupMembers[i].age;
    }
}

let arrayWithAges = [];
for(let i = 0; i < myGroup.members.length; i++) {
    arrayWithAges.push(myGroup.members[i].age);
}
console.log('Array with ages' + arrayWithAges);
console.log('Min age with Math.min() : ' + Math.min(...arrayWithAges));

console.log('The smallest age is ' + membersMinAge);

let membersCount = groupMembers.length;
let fittingClasses = [];
for(let i = 0; i < classAvaiable.length ; i++ ) {
    let currentCheckedClass = classAvaiable[i];
    if (currentCheckedClass.slots >= membersCount && currentCheckedClass.minAge <= membersMinAge){
        fittingClasses.push(currentCheckedClass.name);
    } else {
        // debugger;
    }

}

console.log('Fitting classes : ' + fittingClasses);