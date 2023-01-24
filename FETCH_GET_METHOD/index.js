
                  // ====1st way====
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((apidata) => {
//       // console.log(apidata);
//       return apidata.json();
// })
// .then((actualdata) => {
//       console.log(actualdata);
// })
// .catch((err) => {
//       console.log(err);
// });


                  // ====2st way====

const url = 'https://jsonplaceholder.typicode.com/users';

function myAsios(method , url){
      return fetch(url).then((res)=>{
            return res.json();
      });
}

myAsios('GET' , url).then((res)=>{
      console.log(res);
}).catch((err)=>{

});