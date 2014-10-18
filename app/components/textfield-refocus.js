import Ember from 'ember';

export default Ember.TextField.extend({
  didInsertElement: function() {
    // Get current calue
    var value = this.$().val();

    // Focus components
    this.$().focus();

    // Clear value
    this.$().val("");

    // Reset value
    this.$().val(value);
  }
});