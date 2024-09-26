
export interface Education {
    degree: Degree;
    institution: string;
    start: Date | null;  // Allow null in case the date is not provided
    end: Date | null;    // Allow null in case the date is not provided
    gpa: string;
}

export enum Degree {
    Bachelor = "BSc.",
    Master = "MSc.",
}