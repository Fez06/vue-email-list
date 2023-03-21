Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

RISOLUZIONE:

1.Dopo aver creato le basi dei vari file mi creo quello che sara' lo scheletro su html con dentro i baffi;

2.Ora vado su js e dentro vue mi porto il metodo della libreria axios alla quale dico di leggere il link per generare e quando poi l'ha letto e mi risponde deve creare un elemento che viene pushato in un array (che creo prima vuoto).

3.Imposto un ciclo for da 10 giri per creare il necessario e poi torno su html dove nel mio scheletro vado a fare un v-for dell'array pieno.