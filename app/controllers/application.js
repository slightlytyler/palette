import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPalette: function() {
      var paletteTitle = "New Title";

      var palette = this.store.createRecord('palette', {
        title: paletteTitle
      });

      palette.save();
    }
  }
});
