// let = bisa diubah
let namee: string = "Faiz"

// var = tipe lama sama seperti let 
var nameL: string = "Faiz"

// const = tidak bisa diubah (konstanta)
const nameS: string = "Faiz"

// string 
let nameF: string = "Faiz"

// boolean
// let isActive: boolean = true

//nan
let totalNan: null = null

console.log(nameF)

interface Iname {
    name: string
    age: number
}


// union type
let value: string | number
value = 1
value = "krisna"

// type alias 
type StringOrNumber = string | number

let result : StringOrNumber =  "Faiz" 
result = 1
result = "ucup"