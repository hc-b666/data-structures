Array.prototype.sum = function ()
{
    let sum = 0;
    for (let i = 0; i < this.length; i++)
    {
        sum = sum + this[i];
    }
    return sum;
}

console.log([1, 2, 3, 4, 5].sum());

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr1.sum());

// wow i created my own array method :)