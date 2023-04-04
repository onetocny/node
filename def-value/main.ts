function foo(bar: boolean = undefined): void
{
    if(bar === undefined)
    {
        console.log("bar is undefined");
    }

    if(bar === true)
    {
        console.log("bar is true");
    }

    if(bar === false)
    {
        console.log("bar is false");
    }
}
  

foo();
foo(true);
foo(false);
foo(undefined);