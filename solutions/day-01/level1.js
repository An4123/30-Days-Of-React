// 1.
let arr = Array()
console.log("1:", arr)

// 2. 
let arr2 = Array(6)
console.log("2:", arr2)

// 3.
console.log("3:", arr2.length)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

// 4. 
console.log("4: First:", webTechs[0], "\nMiddle:", webTechs[webTechs.length / 2 | 0], "\nLast:", webTechs[webTechs.length - 1])


// 5. 
let mixedDataTypes = [1, "2", 3, "4", 5, "6"]
console.log("5: Lengths:", mixedDataTypes.length, "\nmixedDataTypes:", mixedDataTypes)

// 6-10
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("6/7: itCompanies:", itCompanies)
console.log("8. Length:", itCompanies.length)
console.log("9. First:", itCompanies[0], "\nMiddle:", itCompanies[itCompanies.length / 2 | 0], "\nLast:", itCompanies[itCompanies.length - 1])
console.log("10.")
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index])    
}



// 11.
console.log("\n11.")
for(let index = 0; index < itCompanies.length; index++){
    console.log(itCompanies[index].toUpperCase())
}

// 12. 
console.log("\n12.")
let sentence = ""
for(let index = 0; index < itCompanies.length; index++){
    sentence = sentence + itCompanies[index] + ", "
}
sentence = sentence.substring(0, sentence.length -2)
sentence = sentence + " are big IT Companies"
console.log(sentence)


// 13. 
console.log("\n13.")
if (itCompanies.includes("Snapchat")){
    console.log("Found")
} else{
    console.log("Not Found")
}

if (itCompanies.includes("Facebook")){
    console.log("Found")
} else{
    console.log("Not Found")
}

//14. 
let filteredComapnies = []
for(let index = 0; index < itCompanies.length; index++){
    if (itCompanies[index].split('o').length > 2){
        filteredComapnies.push(itCompanies[index])
    }
}
console.log("14. Filtered Companies:", filteredComapnies)

//15.
console.log("\n15. Sorted:", itCompanies.sort())

//16. 
console.log("\n16. Reverse:", itCompanies.reverse())

//17.
console.log("\n17. Slice First 3:", itCompanies.slice(0,3))


//18.
console.log("\n18. Slice Last 3:", itCompanies.slice(itCompanies.length - 3,itCompanies.length))

//19
console.log("\n19. Slice Middle", itCompanies.slice((itCompanies.length/2|0), (itCompanies.length/2|0)+ 1))

//20
console.log("\n20. Remove first element", itCompanies.shift())


// 21. 
console.log("\n21. Remove element from middle")

//22. 
console.log("\n22. Remove Last element", itCompanies.pop())

//23.
itCompanies = []
console.log("\n23. Remove All Elements:", itCompanies )
