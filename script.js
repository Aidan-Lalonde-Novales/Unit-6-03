// Javascript that tells you the maximum movie rating you can watch judging by your age.

document.getElementById('submitbutton').addEventListener('click', numberChecker)

function numberChecker () {
  const preUserAge = document.getElementById('userage').value // Makes the value of the textbox into a variable
  const userAge = parseInt(preUserAge) // Converts to interger
  if (userAge >= 17) {
    document.getElementById('result').innerHTML = 'You can see up to an R rated movie alone.'
  } else if (userAge >= 13) {
    document.getElementById('result').innerHTML = 'You can see up to a PG-13 rated movie alone.'
  } else if (userAge >= 5) {
    document.getElementById('result').innerHTML = 'You can see up to a PG rated movie alone.'
  } else {
    document.getElementById('result').innerHTML = 'You cannot see a movie without parental guidance.'
  }
}
