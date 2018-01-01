function nextCallback(data) {
    console.log(data);
}

function errorCallback(err) {
    console.log(err);
}

function completeCallback() {
    console.log('done');
}

function giveMeSomeData(nextCB, errorCB, completeCB) {
    // document.addEventListener('click', nextCB); // nextCB is MouseEvent, 'click' won't fail
    // fetch(url).then(nextCB, errorCB);
    // [10, 20, 30].forEach(nextCB)
}

// 以 async 方式取得資料時，將資料留給 callback 處理
// const data = giveMeSomeData( ... );
giveMeSomeData(
    nextCallback,
    errorCallback,
    completeCallback
);
