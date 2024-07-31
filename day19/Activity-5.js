//TASKSA 9 and 10

const pass1 = "secureP@ss1"
const pass2 = "SecurePass1"

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

console.log("testing valid and invalid passwords")
console.log(regex.test(pass1))
console.log(regex.test(pass2))

const url1 = "https://www.example.com"
const url2 = "http://example.org"
const url3 = "www.example.net"
const url4 = "ftp://example.com"
const url5 = "https://example.com/path/to/resource"
const url6 = "example.com"
const url7 = "http://sub.example.co.uk/page"

const regex2 = /^(https?:\/\/)?(www\.)?[\w\-]+\.[a-z]{2,}(\/[\w\-\.]*)*$/

console.log("testing valid and invalid urls")
console.log(`${regex2.test(url1)}   :- ${url1} `)
console.log(`${regex2.test(url2)}   :- ${url2} `)
console.log(`${regex2.test(url3)}   :- ${url3} `)
console.log(`${regex2.test(url4)}  :- ${url4} `)
console.log(`${regex2.test(url5)}   :- ${url5} `)
console.log(`${regex2.test(url6)}  :- ${url6} `)
console.log(`${regex2.test(url7)}   :- ${url7} `)