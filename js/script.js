// Ricreate lo slider visto in jQuery con vue

var app = new Vue({
  el: '#app',
  data: {
    immagini: [
      'img/immagine1.jpg',
      'img/immagine2.jpg',
      'img/immagine1.jpg',
      'img/immagine4.jpg'
    ],
    contatore: 0
  },
  methods:{
    prevImg(){
      (this.contatore == 0) ? this.contatore = this.immagini.length - 1 : this.contatore--;
    }
  }



});
