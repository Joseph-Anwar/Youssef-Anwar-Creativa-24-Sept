// function OnMouseClick() {
//     var listItems= document.getElementsByTagName("li");
//     var itemsArray =Array.from(listItems)
//     for (let i = 0; i < itemsArray.length; i++ ) {
//         itemsArray[i].onclick = function() {
//         itemsArray[i].classList.toggle("selected");
//     }
//     // itemsArray.forEach(element => {
        
//     //     }        
//     // });
// }



// if (true) {
//     var listItems= document.getElementsByTagName("li");
//     for (let i = 0; i < listItems.length; i++ ) {
//         listItems[i].onclick = function() {
//         listItems[i].classList.add("selected");
//         }
//     } else {
//             for (let i = 0; i < listItems.length; i++ ) {
//             listItems[i].onclick = function() {
//             listItems[i].classList.add("notSelected");
//         }
//     }
// }
// }

function OnMouseClick(clickedElement) {
    var listItems = document.getElementsByTagName("li");
    var itemsArray = Array.from(listItems);
itemsArray.forEach(function(item) {
        item.classList.remove("selected");
    });
    clickedElement.classList.add("selected");
}
