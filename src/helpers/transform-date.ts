export const transformDate = (date: Date) => {
    return date.getDate() + "/"
        + (date.getMonth()+1) + "/"
        + date.getFullYear()
}

export const transformTime = (date: Date) => {
    return ((date.getHours() < 10)?"0":"")
        + date.getHours() + ":"
        + ((date.getMinutes() < 10)?"0":"")
        + date.getMinutes() + ":"
        + ((date.getSeconds() < 10)?"0":"")
        + date.getSeconds()
}

