var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  naziv_projekta: String,
  opis_projekta: String,
  cijena_projekta: Number,
  obavljeni_poslovi: { type: Boolean, default: false},
  datum_pocetka: Date,
  datum_zavrsetka: Date,
  clanovi: { type:String, default: "nema"}
});
mongoose.model('Blob', blobSchema);