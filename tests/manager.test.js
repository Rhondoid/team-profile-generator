const Manager = require("../project/manager.js");

describe("employee profile setup", () => {
  describe("initialization", () => {
    let employee_object = new Manager("John", 3,"801-442-5252", "john@gmail.com", "Manager");

    it("employee constructor testing", () => {
      let expected_output = {
        employeeName: "John",
        id: 3,
        officeNumber: "801-442-5252",
        email: "john@gmail.com",
        role: "Manager",
      };

      console.log(employee_object);
      expect(employee_object).toEqual(expected_output);
    });
    it("test_getName function", () => {
      expect(employee_object.getName()).toEqual("John");
    });
    it("test_getId function", () => {
        expect(employee_object.getId()).toEqual(3);
    });
    it("test_getOfficeNumber function", () => {
        expect(employee_object.getOfficeNumber()).toEqual("801-442-5252");
    });
    it("test_getEmail function", () => {
        expect(employee_object.getEmail()).toEqual("john@gmail.com");
    });
    it("test_getRole function", () => {
        expect(employee_object.getRole()).toEqual("Manager");
    });
  });
});

  