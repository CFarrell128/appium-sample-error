const nsAppium = require("nativescript-dev-appium");
const assert = require("chai").assert;
const expect = require('chai').expect;

describe("Login tests", () => {
    const defaultWaitTime = 5000;
    let driver;

    before(async () => {
        driver = await nsAppium.createDriver();
    });

    after(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    // it("should find sign in button", async () => {
    //     const btnSignIn = await driver.findElementByText("SIGN IN", nsAppium.SearchOptions.exact);
    //     await btnSignIn.click();
    //
    //     const lblMessage = await driver.findElementByText("Select Mission", nsAppium.SearchOptions.exact);
    //     assert.exists(lblMessage);
    // });

    it('should find an element by text', async () => {
        const submitBtn = await driver.findElementByText('Login');
        const submitBtnText = await submitBtn.text();
        assert.equal(submitBtnText, 'Login');
    });

});
