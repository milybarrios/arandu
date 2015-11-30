/**
 * Created by rodrigo on 29/11/15.
 */

var mongoose = require('mongoose');

Schema = mongoose.Schema;
var userSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    apellido: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true,
        match: /.+@.+\..+/
    },
    clave: {
        type: String,
        validate: [
            function(clave){
                return clave.length >= 6;
            }, 'Clave debe tener mas de 6 digitos.'
        ]
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.virtual('nombreCompleto').get(function(){
    return this.nombre + ' ' + this.apellido;
}).set(function (nombreCompleto){
    var splitNombre = nombreCompleto.split(' ');
    this.nombre = splitNombre[0] || '';
    this.apellido = splitNombre[1] || '';
});

mongoose.model('User', userSchema);