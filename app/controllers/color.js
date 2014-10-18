import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'palette',
  palette: Ember.computed.alias('controllers.palette'),
  actions: {
    editColor: function() {
      var parent = this.get('palette').get('model');

      // Remove isEditing from siblings
      parent.get('colors').forEach(function(color) {
        color.set('isEditing', false);
      });

      // Add isEditing property
      this.set('isEditing', true);
    },
    removeColor: function() {
      // Get model onject
      var color = this.get('model');
      var parent = this.get('palette').get('model');

      parent.get('colors').removeObject('color').then(function() {
        color.destroyRecord();
        parent.save();
      });

      
    },
    acceptChanges: function() {
      // Remove isEditing property
      this.set('isEditing', false);

      // If color is empty, delete it
      // otherwise save it with new attributes
      if(Ember.isEmpty(this.get('model.title')) && Ember.isEmpty(this.get('model.value'))) {
        this.send('removeColor');
      } else {
        this.get('model').save();
      }
    }
  },
  style: function() {
    return 'background-color:%@%@'.fmt('#', this.get('model.value'));
  }.property('model.value')
});
