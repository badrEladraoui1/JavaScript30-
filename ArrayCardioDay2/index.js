const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const nineteenYOatLeastOne = (people) => {
    const currentYear = (new Date().getFullYear())
    const result = people.some((person => currentYear - person.year >= 19))
    return result
}
console.log(nineteenYOatLeastOne(people))
// Array.prototype.every() // is everyone 19 or older?
const nineteenYOAllOfThem = (people) => {
    const currentYear = (new Date().getFullYear())
    const result = people.every(person => currentYear - person.year >= 19)
    return result
}
console.log(nineteenYOAllOfThem(people))

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = (comments) => {
    const result = comments.find(comment => comment.id === 823423)
    return result
}
console.log(findComment(comments))

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const deleteCommentById = (comments, ID) => {
    const indexToDelete = comments.findIndex(comment => comment.id === ID)
    if (indexToDelete !== -1) comments.splice(indexToDelete, 1)
    return comments
}
console.table(deleteCommentById(comments, 542328))
