function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let letterGrade;
    let scoreString = score.toString();
    if (score > 100 || score < 0) return 'INVALID SCORE'
    else if (score >= 90) letterGrade = 'A'
    else if (score >= 80) letterGrade = 'B'
    else if (score >= 70) letterGrade = 'C'
    else if (score >= 60) letterGrade = 'D'
    else if (score <= 59) letterGrade = 'F'
    if (scoreString.length != 3 && scoreString[1] >= 0 && scoreString[1] <= 2 && letterGrade != 'F') letterGrade = `${letterGrade}-`
    else if (scoreString.length == 3 || scoreString[1] >= 8 && scoreString[1] <= 9 && letterGrade != 'F') letterGrade = `${letterGrade}+`
    return letterGrade;
}

var output = convertScoreToGradeWithPlusAndMinus(90);
console.log(output); // --> 'A-'