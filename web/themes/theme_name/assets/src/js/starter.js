(function($, Drupal) {

  /**
   * JS should be wrapped in Drupal.behaviors.nameOfFunction to assist
   * in attaching/detaching functionality. Remember to use context within
   * jQuery selectors to prevent code from being re-ran.
   *
   * @type {{attach: attach}}
   */
  Drupal.behaviors.nameOfFunction = {
    attach: function(context, settings) {
      $('#some-element', context).on('event', function(e) {
        // Do something.
      });
    }
  }

})(jQuery, Drupal);