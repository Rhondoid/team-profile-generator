
class Employee {
  constructor(employeeName, id, email) {
    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    return this.employeeName;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
