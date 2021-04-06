(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Hindi
  jQuery.timeago.settings.strings = {
    prefixAgo: "पूर्व",
    prefixFromNow: "अभी से",
    seconds: "एक मिनट से कम",
    minute: "लगभग एक मिनट",
    minutes: "%d मिनट",
    hour: "करीब एक घंटा",
    hours: "लगभग %d घंटे",
    day: "एक दिन",
    days: "%d दिन",
    month: "तक़रीबन एक महीना",
    months: "%d महीने",
    year: "लगभग एक साल",
    years: "%d वर्षों"
  };
}));
