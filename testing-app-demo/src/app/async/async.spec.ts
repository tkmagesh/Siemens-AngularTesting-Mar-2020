import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';

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

    it("testing promises", fakeAsync(() => {
        let test = false;
        console.log('Creating a promise');

        Promise
            .resolve()
            .then(() => {
                console.log('First "then" executed successfully');
                return Promise.resolve();
            })
            .then(() => {
                console.log('Second "then" executed successfully');
                setTimeout(function () {
                    test = true;
                })
            });
       // flushMicrotasks();
        flush()
        console.log('Running test assertions');
        expect(test).toBeTrue()
    }));

    it("Async testing - Promises & setTimeout", fakeAsync(() => {
        let counter = 0;

        Promise.resolve()
            .then(() => {
                counter += 10;
                setTimeout(() => {
                    counter += 1;
                }, 1000)
            });
        
        expect(counter).toBe(0);

        flushMicrotasks();
        
        expect(counter).toBe(10);
        
        tick(500);

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(11);
    }))
})

