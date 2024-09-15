import Handlebars from 'handlebars';

// Helper 'contains'
Handlebars.registerHelper('contains', function(value, search, options) {
    if (typeof options.fn !== 'function') {
        throw new Error('options.fn is not a function');
    }
    if (value && value.includes(search)) {
        return options.fn(this); 
    } else {
        return options.inverse(this);
    }
});

export default Handlebars;
