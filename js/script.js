/* 
Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista 
*/


const app = new Vue({
    el: "#app",
    data: {
        logo: "img/logo.png",
        nameLogo: "Boolean logo",
        listItems: ["Fare la spesa", "Fare i compiti", "Fare il bucato"],
        newItem: "",
        noItem: "Niente da fare!"
    },
    methods: {
        remove(item){
            this.listItems.splice(item, 1);
        },

        addItem(){
            !this.newItem.replace(/\s/g, '').length ? alert("Non hai inserito correttamente il promemoria!") : this.listItems.push(this.newItem);
            this.newItem = " ";
        }
    }
});

