const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

const phrases = ['Ah the yellow hammer state, sadly we dont sell here sorry ','oh jeez alaska it gets waaay to cold there for us..we dont sell there sorry','oh jeez ive always wanted to see the grand canyon...to be bad we cant yet cause we dont sell anywhere near there','we were hoping to set up hop in little rock sadly havent yet sorry','ahhhh the golden state how lovely sadly we dont sell here yet', 'sorry our business has never been to the centennial state', 'the constitution state now thats a nickname...we dont sell here though sorry', 'the very first state of the united states how cool, we dont sell here though', 'Our Nations Capital, it feels un-constitutional but we dont sell here either', 'ahhh the land of gators and hurricanes... yeah we dont sell here ', 'gotta love peaches right, we dont sell here though sorry', 'ah what a beautiful place to travel or live. sadly dont sell here sorry ', 'gotta love potatoes am i right ...sorry we dont sell here ', 'listen this is just me but chicago pizza is meh... we dont sell here ','cant go wrong with some basketball hopefully well be selling here soon', 'the hawkeye state eh pretty dope name... we dont sell here though', 'the state with the most wheat way to go... we dont sell here ', 'oooooo some fried chicken sounds pretty good, we dont sell here sadly', 'oh dam i could use some gumbo right about now,sadly dont sell here yet', 'you guys have some realy famous lobster Respect, we dont sell here though', 'the birthplace of the national anthem amazing, dont sell here though sorry', 'the place where the pilgrims first landed thats pretty important, cant sell here yet though sorry', 'i know where im going on my fishing trip, sadly we dont sell here yet', 'lakes lakes and more lakes how cool, not selling here yet sadly', 'the birthplace of blues how cool, we dont sell here yet ', 'we actually do sell here but we have quite a long wait list itll be 2-4 buisness weeks before we restock', 'the treasure state huh so does like everyone get some ? also we dont sell here ', 'ahhh the cornhusk state how cool sorry we dont sell here yet', 'the enetertainment capital of the U.S thats pretty sweet we dont sell here though', 'the granite state how cool we dont sell here', 'our compnay never hasnt been any where near the staue of liberty sorry', 'the nuclear bomb was born there how cool to bad out toilet papaer wasnt', 'Ah the small state with one of the biggest citys, we dont sell here ', 'oh dam the wright brothers first flew here how cool, ya know what hasnt taken off here...our toilet paper', 'while there is certainly alot of room to set up shop there we dont sell there yet sorry', 'the rock an roll hall of fam and the football hall of fame all in one place too bad we dont sell here', 'ahhhh so this is where the parking meter comes from.....we dont sell here', 'crater lake is quite a sight to behold sadly we dont sell here', 'the place where the declaration of independance was drafted how cool, we dont sell here', 'the first to tell britain to shove off what a place. we dont sell here though', 'the mighty Chadwick Boseman is from this place rest in Peace King, i wish we did sell here','mount rushmore is pretty cool but do you know wbout the even larger monument right next to it? we dont sell here sorry', 'oooo boy some nashville chicken sounds realmgood right now, i wish we sold there', 'ive heard you can get some pretty good barbeque there, we dont sell here though', 'from skiing to moive festivals there seems like alot to do there sadly we dont sell there', 'you like Ben &Jerrys?so do we but sadly we dont sell here', 'the first thanksgiving was there how cool, we dont sell here though', 'you like starbucks? who are we kidding yeah you do,we dont sell here sadly', 'a whole state inside a mountain range, wicked. we dont sell here though', 'birth place of the ice cream sundae youve done amnerica a great service, we dont sell here though', 'Yellowstine National park is something else, we dint sell here ' ]


let thing = new Map()
for(const [index, state] of states.entries()){
    // console.log(state, index)
    thing.set(states[index], phrases[index])
    let elm = document.getElementById('state-select')
    const option = document.createElement("option")
    option.value = state
    option.appendChild(document.createTextNode(state))
    elm.appendChild(option)
}

// document.getElementById("button").addEventListener("click", function () {
//     // console.log(states[0])
//     let value = document.textBox.states.value
//     console.log(thing.get(value))
//     if (value === states.at(value)) {
//         console.log(states.at(value))
//         alert(thing.get(value))
//     } else{
//         console.log(states.at(value))
//         console.log('error')
//     }
// })

document.getElementById("button").addEventListener('click', function () {
    // console.log(states[0])
    let value = document.textBox.states.value
    console.log(thing.get(value))
  alert('(value === states.value) ' ? (thing.get(value)) : console.log('error'))
        console.log(alert)
 
})

// console.log(states[0][0])
// if (states[0][0] === "AL") {


// for (const state of states.entries()) {
//     console.log(state[1])
//     let elm = document.getElementById('state-select')
//     const option = document.createElement("option")
//     option.value = state[1]
//     option.appendChild(document.createTextNode(state[1]))
//     elm.appendChild(option)
// }
// console.log(thing)
// if (state[1] === option.value){
//     alert(state[1])



















// function showAlert (event) {
//     event.preventDefault()
//     console.log (event)
//     if (thisForm === "CA"){
//         window.alert("The state of gold how lovely.We dont sell here yet though sorry")
//     }
// }
