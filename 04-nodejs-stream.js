function map(transformFn) {
  const inputObservable = this;

  const outputObservable = createObservable(function (outputObserver) {
    inputObservable.subscribe({
      next: function(x) {
        const y = transformFn(x); // map 要做的事 (transformFn) 由外部決定
        outputObserver.next(y);
      },
      error: (e) => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });

  return outputObservable;
}

function filter(conditionFn) {
  const inputObservable = this;

  const outputObservable = createObservable(function (outputObserver) {
    inputObservable.subscribe({
      next: function(x) {
        // filter condition 由外部決定
        if (conditionFn(x)) {
          outputObserver.next(x);
        }
      },
      error: (e) => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });

  return outputObservable;
}

function createObservable(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter,
  };
}

// mouse event
const clickObservable = createObservable(function (ob) {
  document.addEventListener('click', ob.next);
});

// array
const arrayObservable = createObservable(function (ob) {
  [10, 20, 30].forEach(ob.next);
  ob.complete();
});

const observer = {
  next: function nextCallback(data) {
    console.log(data);
  },
  error: function errorCallback(err) {
    console.log(err);
  },
  complete: function completeCallback() {
    console.log('done');
  }
};

// 以 async 方式取得資料時，將資料留給 callback 處理
// const data = giveMeSomeData( ... );
arrayObservable
  .map(x => x/10)
  .filter(x => x !== 2)
  .subscribe(observer);

// mouse click event
clickObservable
  .map(e => e.clientX)
  .filter(x => x < 200)
  .subscribe(observer);