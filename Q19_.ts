// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let myfriends: string []= ["Hasnain", "Saqlain", "Irfan", "khan"];

console.log(`I am inviting ${myfriends.length} member of friends to my dinner which are following\n`)
for(let i = 0; i< myfriends.length; i++){
    console.log(`${i + 1}. ${myfriends[i]}`)
}
