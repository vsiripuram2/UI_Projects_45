// call back function using API
// it incluses promises which contains promes trur and false
const URL = "https://jsonplaceholder.typicode.com/users";

function processApiresponse(error, response) {
  if(error) {
    console.error("Error",error)
  } else {
    console.log("Data",response.data);
  }
}

function fetchData(callback) {
 setTimeout(()=> {
  
  const apiResponse = fetch(URL);
  console.log(apiResponse.then((response)=> {
    return response.json();
  }   
  ).then((data)=> console.log(data)).catch((error)=>console.log(error)));
  callback(null,"add")
 },3000)
}

fetchData(processApiresponse);