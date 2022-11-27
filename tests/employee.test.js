const Employee = require("../project/employee.js");

describe("employee profile setup", () => {
  describe("initialization", () => {
    let employee_object = new Employee("Noah", 2, "noah@gmail.com", "employee");
    let employee_object2 = new Employee(
      "Charles",
      3,
      "charles@gmail.com",
      "employee"
    );
    it("employee constructor testing", () => {
      let expected_output = {
        employeeName: "Noah",
        id: 2,
        email: "noah@gmail.com",
        role: "employee",
      };

      console.log(employee_object);
      expect(employee_object2).toEqual(expected_output);
    });
    it("test_getName function", () => {
      expect(employee_object2.getName()).toEqual("Charles");
    });
  });
});
