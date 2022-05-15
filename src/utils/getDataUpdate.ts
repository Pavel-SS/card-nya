
export const getDataUpdate = (dataTime: Date) => {
    const date = new Date(dataTime),
          year = date.getFullYear(),
          month = date.getMonth(),
          day = date.getDay()
    return `${year}.${month}.${day}`
}
// можно уменьшить количество выводимых значений
// const numberDate = (num: number) => {
//     return num.toString().length < 2 ? `0${num}` : `${num}`
// }