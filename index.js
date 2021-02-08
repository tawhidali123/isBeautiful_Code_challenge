function isBeautifulString(inputString) {
    // sort inputstring
    let arrString = inputString.split('')
    console.log(arrString.sort())
    // check to see how often a letter is shown as integer
    // front counter
    let frontCounter = 0
    // back counter
    let backCounter = 0

    let currentLetter = ''
    let previousLetter = ''

    for(let val of arrString) {
      if (currentLetter === '') {
        currentLetter = val;
        // frontCounter ++
      }

      if(previousLetter === currentLetter) {
        frontCounter ++
      }

      if(val !== currentLetter){
        backCounter++
      }

      currentLetter = val
      
      if(backCounter > frontCounter) {
        return true
      } else {
        return false
      }
    }

    
}

isBeautifulString('ffccabb')