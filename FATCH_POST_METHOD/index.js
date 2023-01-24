const url = 'https://jsonplaceholder.typicode.com/users';

function myAxios(method , url , body=null){
      const headers = {
            'Content-Type'    :     'application/json',
      }
      return fetch(url , {
            method :     method,
            headers : headers,
            body : JSON.stringify(body)
      }).then((res)=>{
            return res.json();
      });
}

myAxios('POST' , url , {
      name:'dadhi',
      age:29
}).then((res)=>{
      console.log(res);
}).catch((err)=>{

});