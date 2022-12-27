const Employee = require("../lib/employee.js");

describe("employee profile setup", () => {
  describe("initialization", () => {
    let employee_object = new Employee("Noah", 2, "noah@gmail.com", "Employee");

    it("employee constructor testing", () => {
      let expected_output = {
        employeeName: "Noah",
        id: 2,
        email: "noah@gmail.com",
        role: "Employee",
      };

      console.log(employee_object);
      expect(employee_object).toEqual(expected_output);
    });
    it("test_getName function", () => {
      expect(employee_object.getName()).toEqual("Noah");
    });
    it("test_getId function", () => {
      expect(employee_object.getId()).toEqual(2);
    });
    it("test_getEmail function", () => {
      expect(employee_object.getEmail()).toEqual("noah@gmail.com");
    });
    it("test_getRole function", () => {
      expect(employee_object.getRole()).toEqual("Employee");
    });
  });
});
