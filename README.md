### It's a practice following this [talk](https://www.youtube.com/watch?v=uQ1zhJHclvs) from [André Staltz](https://github.com/staltz),  he explained how to build a Observable from scratch.

- Observable is a way of getting a callback looking thing and making that be a collection, so we can use method like `map`, `filter`.
- The function `subscribe` means **GIVE ME DATA**.
- `array`, `click`, `promise`, `stream` are work with callback.
- If you don't call `subscribe()`, then no one says **GIVE ME DATA**, so nothing happened. The `map()` and `filter()` are just return a observable object, it's just a object withod methods, nobody call the methods.

