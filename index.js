import { foo } from "./src/foo";
import { Bar } from "./src/bar";

(async () => {
  foo();
  const instance = new Bar("code");
  await instance.compile();
})();
