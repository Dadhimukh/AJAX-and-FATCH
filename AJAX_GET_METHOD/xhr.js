
function myAxios(method, url) {
      const xhr = new XMLHttpRequest();

      xhr.open(method , url);

      xhr.responseType = 'json';

      xhr.onload = () => {

            console.log(xhr.response);

      }

      xhr.onerror = () => {
            console.log('Error');
      }

      xhr.send();

}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios('GET' , url);