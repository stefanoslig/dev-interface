import { ChipColorPipe } from "./chip-color.pipe";

describe("ChipColorPipe", () => {
  let pipe: ChipColorPipe;

  describe("transform", () => {
    beforeEach(() => {
      pipe = new ChipColorPipe();
    });

    it("returns the matching color (primary)", () => {
      const color = pipe.transform("GET");
      expect(color).toEqual("primary");
    });

    it("returns the matching color (accent)", () => {
      const color = pipe.transform("PUT");
      expect(color).toEqual("accent");
    });

    it("returns the matching color (warn)", () => {
      const color = pipe.transform("DELETE");
      expect(color).toEqual("warn");
    });
  });
});
