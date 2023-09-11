// 정직원, 파트타임직원을 나타낼 수 있는 클래스
// 직원정보 : 이름, 부서이름, 한달근무시간
// 매달 직원들의 정보를 이용해서 한달 월급 계산
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, team, hoursPerMonth, hourlyWage) {
    this.name = name;
    this.team = team;
    this.hoursPerMonth = hoursPerMonth;
    this.hourlyWage = hourlyWage;
  }
  calcSalary = () => {
    return this.hourlyWage * this.hoursPerMonth;
  };
}

class FullTimeEmployee extends Employee {
  static HOURLY_WAGE = 10000;
  constructor(name, team, hoursPerMonth) {
    super(name, team, hoursPerMonth, FullTimeEmployee.HOURLY_WAGE);
  }
}
class PartTimeEmployee extends Employee {
  static HOURLY_WAGE = 8000;
  constructor(name, team, hoursPerMonth) {
    super(name, team, hoursPerMonth, PartTimeEmployee.HOURLY_WAGE);
  }
}

const emp1 = new FullTimeEmployee('nana', 's/w', 120);
const emp2 = new PartTimeEmployee('pipi', 's/w', 120);
console.log(emp1);
console.log(emp2);
console.log(emp1.calcSalary());
console.log(emp2.calcSalary());
