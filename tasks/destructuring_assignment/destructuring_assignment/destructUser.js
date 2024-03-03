export function destructUser(user) {
    const { name, years: age, isAdmin = false } = user

    return { name, age, isAdmin }
}