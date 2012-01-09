# jQuery Bind Bonuses

**This tiny project of mine has been superceded by WhiteRabbit.
It can does the same job but also caters for event delegation.**

https://github.com/DrPheltRight/whiterabbit

I didn't know what else to call these jQuery additions. So for
now Bind Bonuses they are!

## The methods

### $.fn.bindStop( eventType [, eventData], handler(eventObject) [, delay] )
    
This method waits until `delay` ms after the last occurance of
event, then calls the callback. So if you are continously typing
only after you have stopped for the defined `delay` will the
handler be called.

```javascript
// Only search 1.5 seconds after user stops typing
$('input[name=search]').bindStop('keydown', function (e) {
    $.get('search', {"search": $(this).val()}, function (res) {
        $('#results').html(res);
    });
}, 1500);
```

### $.fn.bindThrottle( eventType [, eventData], handler(eventObject) [, delay] )

This method only calls a callback if the event hasn't been
called in the last `delay` ms. If it has been called it waits 
until after the throttle time to call it.

```javascript
// Check password security every 500 milliseconds of typing
$('input[name=search]').bindThrottle('keydown', function (e) {
    if (passwordSecure($(this).val())) {
        $('#result').html('<p>Password is secure</p>');
    } else {
        $('#result').html('<p>Password is <em>not</em> secure</p>');
    }
}, 500);
```

## Author

Luke Morton

## License

MIT
