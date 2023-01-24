
//agr hm koi data post nahi krna cahate hai to hamari jo body rahegi wo null rahegi === body=null---aise
function myAxios(method, url , body) {
      const xhr = new XMLHttpRequest();

      xhr.open(method , url);

      xhr.responseType = 'json';

      xhr.setRequestHeader('Content-Type' , 'application/json');  //kis format me hame data bhejna hai agar ye nahi likhte hai to data plain text format me jata hai

      xhr.onload = () => {

            console.log(xhr.response);

      }

      xhr.onerror = () => {
            console.log('Error');
      }

      xhr.send(JSON.stringify(body));     //yaha pe hum body ka data convert kr rahe hai , jo bhi data hame send krna hai uska format change kr rahe hai

}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios('POST' , url , {name : 'dadhi' , age : '29'}); 