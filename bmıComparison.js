const person1 = {
    fullName: "Hakan Yarman",
    mass: 85,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height) ** 2;
        return this.bmi;
    }
}

const person2 = {
    fullName: "Ali Yılmaz",
    mass: 82,
    height: 1.80,
    calcBMI: function () {
        this.bmi = this.mass / (this.height) ** 2;
        return this.bmi;
    }
}
person1.calcBMI();
person2.calcBMI();

const compareBMI = () => {
    if (person1.bmi !== person2.bmi) {
        console.log(`${person1.fullName}'s BMI ${(person1.bmi)} is ${person1.bmi > person2.bmi ? "higher" : "lower"} than ${person2.bmi}'s BMI ${(person2.bmi)}.`);
    } else {
        console.log(`${person1.fullName}'s BMI equals ${person2.fullName}'s BMI ${(person1.bmi)}`);
    }
}
compareBMI();