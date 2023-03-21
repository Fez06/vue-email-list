'use strict';

const {createApp} = Vue

createApp({
    data(){
        return {
            prova: 'si vede?',
            listaEmail: []
        }
    },
    methods: {

    },
    beforeMount() {
        
        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((email)=> {
                
                //this.prova = email.data.response
                //console.log(this.prova)
                this.listaEmail.push(email.data.response)
                    
            })
        }
        console.log(this.listaEmail)
    }
}).mount('#App');