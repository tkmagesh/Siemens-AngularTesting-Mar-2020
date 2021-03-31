import { fakeAsync, flush } from '@angular/core/testing';

describe("Async tests", () => {
    it("testing setTimeout", (done) => {
        let test = false;
        setTimeout(function () {
            test = true;
            expect(test).toBeTrue()
            done()
        }, 1000)
    })

    it("testing setTimeout - using fakeAsync", fakeAsync(() => {
        let test1 = false;
        setTimeout(function () {
            test1 = true;
        }, 1000)

        let test2 = true;
        setTimeout(function () {
            test2 = false;
        }, 5000)

        flush()
        expect(test1).toBeTrue()
        expect(test2).toBeFalse()
    }))
})

