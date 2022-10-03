export enum GRADES {
    ONE = "I DON'T KNOW THE ANSWER",
    TWO = "I DON'T REMEMBER THE ANSWER",
    THREE = "I DOUBT",
    FOUR = "ALMOST SURE OF THE ANSWER",
    FIVE = "I KNOW THE ANSWER"
}

export type GradeType = GRADES.ONE | 
        GRADES.TWO | 
        GRADES.THREE | 
        GRADES.FOUR | 
        GRADES.FIVE

type GradeObjType = {
    [key in GradeType]: number
}

export const Grades: GradeObjType = {
    [GRADES.ONE]: 1,
    [GRADES.TWO]: 2,
    [GRADES.THREE]: 3,
    [GRADES.FOUR]: 4,
    [GRADES.FIVE]: 5
}