import createStudent from "./student";
import * as utils from "./student-utils";
import studentService from "./student-service";

// Optional second parameter
jest.mock("./student-service", () => ({
  get() {
    return Promise.resolve("Yay");
  }
}));

describe("Student", () => {
  const spy = jest.spyOn(utils, "validateStudent");

  afterEach(() => {
    spy.mockClear();
  });

  beforeEach(() => {
    return Promise.resolve("Before all...");
  });

  it("can create a student passing an id and name", () => {
    const student = createStudent(2);
    expect(student.id).toBe(2);
  });

  it("throws an error if id is not passed", () => {
    expect(() => createStudent()).toThrow("Invalid student: it doesn't have an id");
  });

  it("calls the validateStudent function", () => {
    createStudent(1, "Iain");
    expect(utils.validateStudent).toBeCalledTimes(1);
  });

  it("still calls the validateStudent function", () => {
    createStudent(2, "Jane");
    expect(utils.validateStudent).toBeCalledTimes(1);
  });
});

describe("student.fetch", () => {
  it("returns data", async () => {
    const student = createStudent(1, "");
    const data = await student.fetch();
    expect(data).toBe("Yay");
  });
});
