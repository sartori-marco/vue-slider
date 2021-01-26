// Ricreate lo slider visto in jQuery con vue

var app = new Vue({
  el: '#app',
  data: {
    immagini: [
      'img/immagine1.jpg',
      'img/immagine2.jpg',
      'img/immagine3.jpg',
      'img/immagine4.jpg'
    ],
    contatore: 0
  },
  methods:{
    // METODO FRECCIA DESTRA NEXT FOTO SUCCESSIVA
    nextImg(){
      (this.contatore == this.immagini.length - 1 ) ? this.contatore = 0 : this.contatore++;
      console.log(this.contatore);
    },

    // METODO FRECCIA SINISTRA PREV FOTO PRECEDENTE
    prevImg(){
      (this.contatore == 0 ) ? this.contatore = this.immagini.length - 1 : this.contatore--;
      console.log(this.contatore);
    }


  }



});
