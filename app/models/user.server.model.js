/**
 * Created by rodrigo on 29/11/15.
 */

var mongoose = require('mongoose');

Schema = mongoose.Schema;
var userSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    clave: String,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', userSchema);