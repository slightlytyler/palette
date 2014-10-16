import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createColor: function() {
      var colorTitle = "New Title";
      var colorValue = "#ff0000";

      var color = this.store.createRecord('color', {
        title: colorTitle,
        color: colorValue
      });

      color.save();
    }
  }
});
