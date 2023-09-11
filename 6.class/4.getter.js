// 접근자 프로퍼티 (Accessor Property)
class Student {
  // constructor는 인스턴스를 만들 때 한 번만 실행된다.
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }
  // 처리하는 것은 아니고 프로퍼티의 일부를 조합하거나
  // 좀 더 값을 제어하고 싶을 때 사용한댕
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('수지', '이');
student.firstName = '승은'; // this.fullName 사용하면 이렇게 변경해도 변경이 안됨
console.log(student.firstName);
console.log(student.lastName);
// console.log(student.fullName()); // fullName도 속성처럼 접근할 수 없을까?
console.log(student.fullName); // get
student.fullName = '이승은'; // set
