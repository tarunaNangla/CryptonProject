
                  // taking example of "+" Plus


function cal(a,b,opp){
    
    console.log(`what is ${a} ${opp}  ${b}`)
    switch(opp){
        case '+':
            return a + b;
            case '-':
                return a - b;
                case '*':
                    return a * b;
                    case '/':
                        return a /b;
                        default:
                            return 'not valid';
                        }
                    }
let a=6,b=6;
let opp="+";

console.log(cal(a,b,opp))

