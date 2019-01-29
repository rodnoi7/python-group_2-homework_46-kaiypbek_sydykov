let Duck = {
    name: 'Дональд',
    color: 'белый',
    old: '1'
};

Duck.toStr = `${Duck.name}, ${Duck.color}, ${Duck.old} год`;
Duck.say = 'Кря-кря'

console.log(Duck.toStr)
console.log(Duck.say)