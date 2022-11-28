const Engineer = require("../project/engineer.js");

describe("employee profile setup", () => {
  describe("initialization", () => {
    let employee_object = new Engineer("Sam", 4, "sam@gmail.com", "Engineer");

    it("employee constructor testing", () => {
      let expected_output = {
        employeeName: "Sam",
        id: 4,
        github: ""
        email: "sam@gmail.com",
        role: "Engineer",
      };

      console.log(employee_object);
      expect(employee_object).toEqual(expected_output);
    });
    it("test_getName function", () => {
      expect(employee_object.getName()).toEqual("Sam");
    });
    it("test_getId function", () => {
        expect(employee_object.getId()).toEqual(4);
      });
      it("test_getGithub function", () => {
        expect(employee_object.getId()).toEqual(4);
      });
    it("test_getEmail function", () => {
        expect(employee_object.getEmail()).toEqual("sam@gmail.com");
      });
    it("test_getRole function", () => {
        expect(employee_object.getRole()).toEqual(Engineer);
      });
  });
});

