import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    removeColor: function() {
      var color = this.get('model');

      color.deleteRecord();
      color.save();
    }
  },
  style: function() {
    return 'background-color:%@%@'.fmt('#', this.get('model.color'));
  }.property('model.color')
});
