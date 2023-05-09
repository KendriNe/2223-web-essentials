function factorial(number)
{
    
}

factorial(5)
    .then( (result)=> {console.log('resolved', result)})
    .cath( (error)=> {console.log('rejected', error)});


    for (let i = 0; i < 1000; i++)
    {
        console.log(i)    
    }
console.log("Het programma loopt hieronder verder .....")