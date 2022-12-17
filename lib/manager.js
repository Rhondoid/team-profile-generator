
class Manager {
    constructor(employeeName, id, officeNumber, email) {
      this.employeeName = employeeName;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
      this.role = "Manager";
    }
    getName() {
      return this.employeeName;
    }
    getId() {
      return this.id;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getEmail() {
      return this.email;
    }
    getRole()  {
      return this.role;
    }
  }
  
  module.exports = Manager;