function show() {
    document.querySelector(".overlay").classList.remove("hidden");
    const data = document.querySelector(".data").classList.remove("hidden");
    document.querySelector(".over-data").classList.add(data);
}
function close_slide(){
    console.log("hello");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".data").classList.add("hidden");
}
