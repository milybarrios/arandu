/**
 * Created by rodrigo on 29/11/15.
 */

var mongoose = require('mongoose');

Schema = mongoose.Schema;
var userSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    email: String,
    clave: String,
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.virtual('nombreCompleto').get(function(){
    return this.nombre + ' ' + this.apellido;
});

mongoose.model('User', userSchema);