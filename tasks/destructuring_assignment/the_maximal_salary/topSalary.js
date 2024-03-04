export function topSalary(salaries) {
    if (Object.entries(salaries).length === 0) {
        return null
    }

    let highestSalary = 0
    let highestName

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary
            highestName = name
        }
    }

    return highestName
}   