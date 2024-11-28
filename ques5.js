function calculateGrade(totalMarks, isFinalExam) {
    let isAPlus;

    if (isFinalExam) {
        isAPlus = (totalMarks >= 90 && totalMarks <= 100);
    } else {
        isAPlus = (totalMarks >= 89 && totalMarks <= 100);
    }

    return isAPlus;
}

let totalMarks =89;
let isFinalExam = false;
let achievedAPlus = calculateGrade(totalMarks, isFinalExam);
console.log(`Did the student achieve an A+ grade? ${achievedAPlus}`);
