const hakan = {
    firstName : "Hakan",
    lastName : "Yarman",
    gender : "Male",
    job : "Student",
    hasDriversLicence : true,
    birthYear : 2002,
    currentYear : new Date().getFullYear(),
    calcAge : function(){
        this.age = this.currentYear - this.birthYear;
        return this.age;
    }
}
console.log(hakan.age) // output: undefined because we can not reach hakan.age before call the calcAge function.
hakan.calcAge(); // after we call calcAge function , output is 21
console.log(hakan.age); // output: 21


// summary of hakan
console.log(`${hakan.firstName} is a ${hakan.age} years old ${hakan.job} , and ${hakan.gender=="Male" ? "he" : "she"} has 
${hakan.hasDriversLicence==true ? "drivers licence" : "not drivers licence"}.`)
// output: Hakan is a 21 years old student , and he has drivers licence.