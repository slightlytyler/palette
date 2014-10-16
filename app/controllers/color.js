import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editColor: function() {
      // Add isEditing property
      this.set('isEditing', true);
    },
    removeColor: function() {
      // Get model onject
      var color = this.get('model');

      // Delete and save
      color.deleteRecord();
      color.save();
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
