/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email 
e stamparli in pagina all'interno di una lista.
 */

// da qui genero l'email
/* fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error(error);
    }); */

const emailList = [];

for (let i = 0; i < 10; i++) {
    /*  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
         .then(response => response.json())
         .then(data => {
             console.log(data.response);
             emailList.push(data.response)
 
         })
         .catch(error => {
             console.error(error);
         });
  */
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            const data = response.data
            console.log(data);


            const liEl = document.createElement("li")
            liEl.textContent = data.response

            document.querySelector("ol").appendChild(liEl);
        })
        .catch(error => {
            console.error(error);
        });

}



//console.log(emailList);




//selezoiniamo gli elementi della Dom

/* const olEl = document.querySelector("ol")


    emailList.forEach(email => {
        const liEl = document.createElement("li")
        liEl.textContent = email;
        olEl.appendChild(liEl)
    })
 */
