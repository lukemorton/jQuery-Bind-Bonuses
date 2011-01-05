# jQuery Bind Bonuses

I didn't know what else to call these jQuery additions. So for
now Bind Bonuses they are!

## The methods

### $.fn.bindStop( eventType, [ eventData ], handler(eventObject), [ delay ] )
    
This method waits until `delay` ms after the last occurance of
event, then calls the callback. So if you are continously typing
only after you have stopped for the defined `delay` will the
handler be called.

### $.fn.bindThrottle( eventType, [ eventData ], handler(eventObject), [ delay ] )

This method only calls a callback if the event hasn't been
called in the last `delay` ms. If it has been called it waits 
until after the throttle time to call it.

## Usage

Both methods accept the same parameters which are identical to
$.fn.bind apart from `bindStop` and `bindThrottle` accept a
fourth parameter, `delay`, which accepts the jQuery speed
keywords `slow` and `fast`. Alternatively you can provide
milliseconds as an integer.


Peace xx
Luke