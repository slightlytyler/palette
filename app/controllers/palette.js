import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createColor: function() {
      var colorTitle = "New Title";
      var colorValue = "ffffff";

      var color = this.store.createRecord('color', {
        title: colorTitle,
        value: colorValue
      });

      color.save();
    }
  }
});
