// Testing script - Please delete all of this when you start on a new project

describe("Given MyClass implementation", function () {
    var myObj = new MyClass();
    it("when accessing message, then it should be equal to \"Hello Jasmine!\"", function () {
        expect(myObj.message).toEqual("Hello Jasmine!");
    });
});

