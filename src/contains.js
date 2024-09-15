import Handlebars from 'handlebars';

// Helper 'contains'
Handlebars.registerHelper('contains', function(value, search, options) {
    if (value.indexOf(search) !== -1) {
        return options.fn(this); // Renderiza el bloque si contiene
    } else {
        return options.inverse(this); // Renderiza el bloque alternativo si no contiene
    }
});

export default Handlebars;