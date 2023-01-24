//===1 step===
const url = "https://jsonplaceholder.typicode.com/users";   //api

//===2 step===
const xhr = new XMLHttpRequest();       //creating object and storing in variable xhr.

//===3 step===
xhr.open('GET', url);         //starting xhr request

//===4 step===
xhr.responseType = 'json';    //response data kis format me cahiye


//===5 step===
xhr.onload = () => {
      console.log(xhr.status);          // getting status code
      console.log(xhr.response);       //using onload event and getting data , jo bhi data milta hai wo string formate me rehta hai , usse hame convert krna padta hai
      // console.log(JSON.parse(xhr.response));    //converting and getting data into json format from string format
}

//===5 step===
xhr.onerror = () => {
      console.log('Error');         //using onerror event listener if error get
}

//===7 step===
xhr.send();                         //sending xhr request
