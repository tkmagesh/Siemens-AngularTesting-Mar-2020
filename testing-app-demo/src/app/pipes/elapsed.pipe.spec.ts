import { TestBed } from "@angular/core/testing"
import { ElapsedPipe } from "./elapsed.pipe"

describe("Elapsed Pipe", () => {
    it("Should return elapsed time", () => {
        TestBed.configureTestingModule({
            declarations: [ ElapsedPipe ]
        })

        const ep = TestBed.inject(ElapsedPipe)
        expect(ep).toBeDefined();
    })
})