const pageBody = document.querySelector('#page-body');
console.log(pageBody.children);
let currPage = 0;

const goToNextPage = () => {
    if(currPage == 6) {
        console.log('i ran');
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[0].style.display = 'inline';
        currPage = 0;
    } else {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[currPage + 1].style.display = 'inline';
        currPage++;
    }
}

const nextBtn = document.querySelector('#next-btn');
nextBtn.addEventListener('click',goToNextPage);

const goToPrevPage = () => {
    if(currPage == 0) {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[6].style.display = 'inline';
        currPage = 6;
    } else {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[currPage - 1].style.display = 'inline';
        currPage--;
    }
}

const backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click',goToPrevPage);