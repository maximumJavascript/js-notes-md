let user = {
    name: "John",
    age: 30,
    physique: {
        height: 178,
        weight: 80,
    },
};

let clone = {};

//клонирует объект с помощью цикла for...in
function cloneObject(clone, obj) {
    for (let key in obj) {
        clone[key] = obj[key];
    }
}
//c помощью метода Object.assign
Object.assign(clone, user);

