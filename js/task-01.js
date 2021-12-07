const categories = document.querySelectorAll('.item');

function getTitleAndNumbersOfCategory() {
    for (const el of categories) {
        const title = el.firstElementChild.textContent;
        console.log("Category: ",title);
        const categoryList = el.querySelector('ul');
        const categoryListItem =  categoryList.children;
        console.log("Elements:", categoryListItem.length);
    }
}


console.log(`Number of categories: ${categories.length}`);
getTitleAndNumbersOfCategory();


