//Tasks 5 and 6

const phoneNumber = "(555) 123-4567";

const phonePattern = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

const phoneMatch = phoneNumber.match(phonePattern);
console.log(phoneMatch);

const emailString = "please contact me at alice.wonderland@example.org for further details";

const emailPattern = /(\w+)\@(\w+\.\w+)/;

const emailMatch = emailString.match(emailPattern);

console.log(emailMatch);

if (emailMatch) {
  console.log("username : ", emailMatch[1]);
  console.log("domain : ", emailMatch[2]);
}