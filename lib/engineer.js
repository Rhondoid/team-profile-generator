class Engineer {
  constructor(employeeName, id, github, email) {
    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = "Engineer";
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
    return this.role;
  }
}

module.exports = Engineer;
