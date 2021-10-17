import { Bar } from "../bar";

describe("bar", () => {
  describe("compile", () => {
    it("should run compiled as expected", async () => {
      const instance = new Bar("code");
      await instance.compile();
      expect(instance.machineCode).toBe("machine code");
    });
  });
});
