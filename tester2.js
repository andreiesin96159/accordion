const arr = function(i) {
    fetch('', {
        method: 'GET',
        body: "data",
        headers: { "Content-Type": "text/plain;charset=UTF-8"}
    });
    console.log(i);
};     console.log(arr);
