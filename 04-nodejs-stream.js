function giveMeSomeData(ob) {
    // document.addEventListener('click', ob.next); // ob.next is MouseEvent, 'click' won't fail
    // fetch(url).then(ob.next, ob.error);
    [10, 20, 30].forEach(ob.next);
    ob.complete();
}

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
giveMeSomeData(observer);
