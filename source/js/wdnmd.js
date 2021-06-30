try {
    var reload_count = localStorage.getItem("reload_count");
    if ( reload_count == 1 ){
        location.reload();
        reload_count++
    }
} catch(e) {
    console.warn(e.message)
    var reload_count = 1;
    localStorage.setItem("reload_count",reload_count)
}
window.onbeforeunload = function () {
    localStorage.setItem("reload_count",1)
}