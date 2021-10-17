export class Bar {
  _code;
  _machineCode;

  constructor(code) {
    this._code = code;
  }

  get machineCode() {
    return this._machineCode;
  }

  async compile() {
    return new Promise((resolve) => {
      console.log("Compiling....");
      setTimeout(() => {
        this._machineCode = "machine code";
        console.log("Compiled");
        resolve();
      }, 1000);
    });
  }
}
