
export const addZeroToDigit = (digit: number) => digit.toString().length < 2
? `0${digit}` : `${digit}`

export const getDataUpdate = (dataTime: Date) => {
    const date = new Date(dataTime),
          year = date.getFullYear(),
          month = addZeroToDigit(date.getMonth() + 1),
          day = addZeroToDigit(date.getDate())
    return `${year}.${month}.${day}`
}
