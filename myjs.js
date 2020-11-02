function makeFormalName(name, gender)
{
    var new_name=name;
    if(gender==1)
    {
        new_name = "Mr. " + new_name
    }
    if(gender==2)
    {
        new_name = "Mrs. " + new_name
    }
    return  new_name;
}

function addOddNumber(number)
{
    var sum = 0;
    var i=0;
    for(i=0;i<=number; i++)
    {
        if(i%2==1)
        {
            sum = sum + i;
        }
    }
    return sum;
}



