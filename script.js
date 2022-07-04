const search = () => {
    // above search function will only work when only onkeyup in html is activated
    // in below user giving input will store in search box and it should match with product list
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("prod")
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName("h2")
   

    for(var i=0; i< pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
// here below textcontent is h2
        if (match){
           let textvalue = match.textContent || match.innerHTML
// here below if condition only works when above if condition is true 
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}