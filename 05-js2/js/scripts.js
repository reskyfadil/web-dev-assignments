/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
const listAddBtn = document.getElementById("listAddBtn");
const listItem = document.getElementById("list");
const inputField = document.getElementById("inputField");
let database = new Map(); 

listAddBtn.addEventListener("click",() => {
    let itemName = inputField.value.toUpperCase();
    if(itemName.replaceAll(" ","") == ""){
        alert("Masukkan nama barang!!")
    }else if(database.has(itemName)){
        node = database.get(itemName);
        node.getElementsByClassName("count")[1].textContent = Number(node.getElementsByClassName("count")[1].textContent) +1; 
    }else{
        let node = document.createElement("li");
        let textNode = document.createTextNode(inputField.value);
        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn-list-delete");
        btnDelete.textContent = "hapus";
        node.append(textNode,btnDelete);
        if (document.title != "ToDO list") {
            
            let count = document.createElement("div");
            let add = document.createElement("button");
            add.textContent = "+"
            add.classList.add("count");
            add.addEventListener("click",() => {
                count.textContent = Number(count.textContent)+1;
            });
            let less = document.createElement("button");
            less.textContent = " - "
            less.classList.add("count");
            less.classList.add("px-1");
            less.addEventListener("click",() => {
                count.textContent = Number(count.textContent)-1;
            });
            count.classList.add("count");
            count.textContent = "1";
            node.append(add,count,less);
        }
        btnDelete.addEventListener("click",() => {
            if (confirm(`Anda akan menghapus "${textNode.textContent}"`)) {
                listItem.removeChild(node);
                database.delete(itemName);
            }
        });
        listItem.appendChild(node);
        database.set(itemName,node);
        inputField.value = "";
        inputField.focus();
    }
});

inputField.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        listAddBtn.click();
    }
});
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
