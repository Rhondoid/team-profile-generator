const Intern = require("../project/intern.js");

describe("employee profile setup", () => {
  describe("initialization", () => {
    let employee_object = new Employee("Sara", 2, "sara@gmail.com", "Employee");

    it("employee constructor testing", () => {
      let expected_output = {
        employeeName: "Sara",
        id: 5,
        school: "Harvard"
        email: "sara@gmail.com",
        role: "Intern",
      };

      console.log(employee_object);
      expect(employee_object).toEqual(expected_output);
    });
    it("test_getName function", () => {
      expect(employee_object.getName()).toEqual("Sara");
    });
    it("test_getId function", () => {
        expect(employee_object.getId()).toEqual(5);
      });
      it("test_getSchool function", () => {
        expect(employee_object.getSchool()).toEqual("Harvard");
      });
    it("test_getEmail function", () => {
        expect(employee_object.getEmail()).toEqual("sara@gmail.com");
      });
    it("test_getRole function", () => {
        expect(employee_object.getRole()).toEqual(Intern);
      });
  });
});