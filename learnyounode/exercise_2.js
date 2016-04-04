var index = 2;
var sum = 0;

while(process.argv[index])
{
    sum += Number(process.argv[index]);
    ++index;
}

console.log(sum);

//OFFICIAL SOLUTION
//
//var result = 0
//
//for (var i = 2; i < process.argv.lenght; i++)
//    result += Number(process.argv[i])
//console.log(result)