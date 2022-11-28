class Engineer {
  constructor(employeeName, id, email, role) {
    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    this.github;
    this.role = role;
  }
  getName() {
    return this.employeeName;
  }
  getId() {
    return this.id;
  }
  getGithub() {
      return this.github;
  }
  getEmail() {
    return this.email;
  }
  getRole()  {
    return this.Engineer;
  }
}

module.exports = Engineer;
