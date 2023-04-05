
                 
                  function cal(a,b,opp){
                    //converting those string value into number type; 
                    var x=(+a);
                    var y=(+b)
                    
                      console.log(`what is ${x} ${opp}  ${y}`)
                  
                    
                      switch(opp){
                          case 'plus':
                              return `${x} plus ${y} is ${x+y}`;
                              case 'minus':
                                  return `${x} minus ${y} is ${x-y}`;
                                  case 'multiplied':
                                      return `${x} multiplied ${y} is ${x*y}`;
                                      case 'divided':
                                          return `${x} divided ${y} is ${x/y}`;
                                          default:
                                              return 'not valid';
                                          }
                                      }
                  // Taking input from the user
                  var a = prompt(`enter value of a `);
                  var b = prompt(`enter value of b `);
                  
                  
                  //add some basic instructions for user to understand how to use this console.log 
                  console.log("enter any one operation which you want to perform")
                  console.log("enter 'plus' for addition");
                  console.log("enter 'minus' for subtraction");
                  console.log("enter 'multiplied' for multiplication");
                  console.log("enter 'divided' for division")
                  
                  
                  //taking input from the user to perform which operation here
                  var opp=prompt(`enter operation here `); ;
                  
                  console.log(cal(a,b,opp));