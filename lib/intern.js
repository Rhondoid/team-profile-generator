//Test states Employee undefined
class Intern {
    constructor(employeeName, id, school, email) {
      this.employeeName = employeeName;
      this.id = id;
      this.school = school;
      this.email = email;
      this.role = "Intern";
    }
    getName() {
      return this.employeeName;
    }
    getId() {
      return this.id;
    }
    getSchool() {
        return this.school;
    }
    getEmail() {
      return this.email;
    }
    getRole(){
      return this.role;
    }
  }
  
  module.exports = Intern;
  