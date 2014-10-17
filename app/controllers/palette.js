import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createColor: function() {
      var colorTitle = "New Title";
      var colorValue = "ffffff";
      var parent = this.get('model');

      var color = this.store.createRecord('color', {
        title: colorTitle,
        value: colorValue,
        palette: parent
      });

      color.save().then(function() {
        parent.get('colors').addObject(color);
        parent.save();
      });
    }
  }
});
