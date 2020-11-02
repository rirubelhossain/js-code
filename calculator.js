
var a;
var tempa="";
var b;
var calsign;

function numberInput(value){
    if(value=='+'|| value=='-'|| value=='x'|| value=='/')
    {
        if(!a)
        {
            a = parseInt(tempa)
            tempa =""
        }
        calsign = value
        document.getElementById("finalOutput").innerHTML = ""+a+value
    }
    else{
        tempa = tempa+value
        if(a)
        {
            b=parseInt(tempa)
        }
        if(!calsign)
            document.getElementById("finalOutput").innerHTML = tempa
        else{
            document.getElementById("finalOutput").innerHTML = ""+a+calsign+b
        }
    }
}


// function signInput(sign){
//     calsign =  sign
//     console.log(calsign)

//     document.getElementById("finalOutput").innerHTML = sign
// }

function mycalculator(num1, num2, sign)
{
    var result = 0;
    switch (sign) {
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case 'x':
            result = num1*num2;
            break;
        case '/':
            result = (num1/num2).toFixed(3);
            break;
        default:
            break;
    }

    return result;
}

function calcalateNow()
{
    histry_data = ""+a+calsign+b
    result = mycalculator(a,b,calsign)
    document.getElementById("history").innerHTML = histry_data
    document.getElementById("finalOutput").innerHTML = result

}

function allClear()
{
    document.getElementById("finalOutput").innerHTML = "0"
}