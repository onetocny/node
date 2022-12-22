function foo(val: number): Promise<string>
{
    return new Promise<string>((resolve, reject) => val % 2 === 0 ? resolve(`success ${val}`) : reject(`failure ${val}`));
}
  
async function bar(sleep: number): Promise<void>
{
    try
    {
        console.log(`Waiting ${sleep} seconds...`);
        await new Promise(r => setTimeout(r, sleep * 1000));
        console.log(`Waited ${sleep} seconds.`);
        const result = await foo(sleep);
        console.log('Result: ' + result);
    }
    catch (error)
    {
        console.log('Error: ' + error);
    }
}
  
bar(3).then(() => console.log('Done 3'));
bar(2).then(() => console.log('Done 2'));
  