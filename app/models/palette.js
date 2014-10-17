import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  colors: DS.hasMany('color', {async: true})
});
