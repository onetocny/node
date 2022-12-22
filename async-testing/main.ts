function foo(val: number): Promise<string> {
    return new Promise<string>((resolve, reject) => val % 2 === 0 ? resolve(`success ${val}`) : reject(`failure ${val}`));
  }
  
  async function bar(val: number): Promise<void> {
    try {
      var result = await foo(val);
      console.log('Result: ' + result);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
  
  bar(1).then(() => console.log('Done 1'));
  bar(2).then(() => console.log('Done 2'));
  