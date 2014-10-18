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
    },
    editPalette: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      var model = this.get('model');
      var newTitle = model.get('title');

      // Remove isEditing property
       this.set('isEditing', false);

      // If title is empty, reset back
      // otherwise save it with new attributes
      if(Ember.isEmpty(newTitle)) {
        model.rollback();
      } else {
        model.save();
      }
    }
  }
});
