export function sumSalaries(salaries) {
    return Object.values(salaries).reduce((previousSalary, currentSalary) =>
        previousSalary + currentSalary
        , 0)
}