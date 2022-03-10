const pageBody = document.querySelector('#page-body');
console.log(pageBody.children);
let currPage = 0;

const goToNextPage = (e) => {
    if(currPage == 6) {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[currPage + 1].style.display = 'inline';
        currPage++;
    }
    pageBody.children[currPage].style.display = 'none';
    pageBody.children[currPage + 1].style.display = 'inline';
    currPage++;
}