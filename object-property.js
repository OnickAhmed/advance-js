const students = [
    {id: 1, name: 'Omar Sunny'},
    {id: 2, name: 'Moushumi'},
    {id: 3, name: 'Elies Kanchan'},
    {id: 5, name: 'Deepjol'}
]

const names = students.map( s => s.name);
const bigger = students.filter( s => s.id > 2);
const ok = [];
names.forEach(element => {
    ok.push(element);
});

console.log(bigger);