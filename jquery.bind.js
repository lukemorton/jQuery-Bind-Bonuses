/**
 * jQuery Bind Bonuses
 * https://github.com/DrPheltRight/jQuery-Bind-Bonuses
 *
 * This jQuery plugin (if you can call it that) adds two methods
 * to your toolkit. The first bindStop, is like bind apart from
 * it waits until the event has stopped before calling it's 
 * callback. Example uses include form validation. The second is
 * bindThrottle that throttles events.
 *
 * Both methods unlike bind accept a fourth parameter, "delay",
 * which is the amount of time they wait until they call your
 * callback.
 *
 * I found them useful, I hope you do too
 *
 * @author   Luke Morton, 2011
 * @license  MIT
 */
 
(function ($) {

    // Get jQuery duration
    var calcDuration = function (duration) {
        return $.fx.off ? 0 : typeof duration === "number" ? duration :
            duration in $.fx.speeds ? $.fx.speeds[duration] : $.fx.speeds._default;
    };

    // Lets do both at the same time :)
    $.each(['bindStop', 'bindThrottle'], function (i, name) {
        $.fn[name] = function (eventType, eventData, handler, delay) {
        
            // Work out the various parameters
            if ( ! handler) {
                handler = eventData;
            } else if ( ! delay && typeof eventData !== 'object') {
                delay = handler;
                handler = eventData;
            }
            
            // Get delay
            delay = calcDuration(delay);
            
            return this.each(function () {
                var self = this;
                var timer;
                var throttle;
                
                $(self).bind(eventType, function (e) {
                    // We make a note of throttling and only run
                    // handler when not throttling
                    if (name === 'bindThrottle' && ! throttle) {
                        handler.call(self, e);
                        throttle = setTimeout(function () {
                            throttle = null;
                        }, delay);
                    }
                    
                    // Every event clears previous timer
                    if (timer) {
                        clearTimeout(timer);
                    }
                    
                    // Set a fresh timer
                    timer = setTimeout(function () {
                        handler.call(self, e);
                    }, delay);
                });
            });
            
        };
    });
    
}(this.jQuery));