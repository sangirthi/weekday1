/* Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any 
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript */

function launchBrowser(browserName){
    if(browserName=="chrome"){
        console.log("chrome browser is matched")
    }else{
        console.log("otherwise")
    }

}

launchBrowser("chrome")


let testingtypes ="smoke"
switch (testingtypes){
    case "sanity":
        console.log("sanity testing")
        break;
     case "regression":
        console.log("regreassion testing")
        break;
     case "smoke":
        console.log("smoke testing")
        break;
     case "load ":
        console.log("load testing")
        break;
     case "stress":
        console.log("stress testing")
        break;
    default:
        console.log("others")
        break;
    

}