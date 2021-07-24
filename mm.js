const firstPhraseArray = ["All signs ", "The stars ", "The planets ", "The portents "];
const secondPhraseArray = ["point to ", "seem to suggest ", "might say ", "are indicating ", "suggest to me "];
const thirdPhraseArray = ["yes.", "no."];

const phraseSelector = arrName => {
    let randNum = Math.floor(Math.random()*arrName.length);
    return arrName[randNum];
}

const messageMaker = () => {
    let phraseOne = phraseSelector(firstPhraseArray);
    let phraseTwo= phraseSelector(secondPhraseArray);
    let phraseThree = phraseSelector(thirdPhraseArray);

    return phraseOne+phraseTwo+phraseThree;
}
//Tests will go here
//console.log(phraseSelector(firstPhraseArray));
console.log(messageMaker());