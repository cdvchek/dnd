const onhover = (el) => {
    const isGM = el.getAttribute('data-isgm');
    if(isGM == 'true'){
        const isNew = el.getAttribute('data-isNew');
        if(isNew){
            const deleteBtn = el.childNodes[0].childNodes[0];
            deleteBtn.style.display = 'inline';
        } else {
            const deleteBtn = el.childNodes[1].childNodes[1];
            deleteBtn.style.display = 'inline';
        }
    }
}

const onleave = (el) => {
    const isGM = el.getAttribute('data-isgm');
    if(isGM == 'true'){
        const isNew = el.getAttribute('data-isNew');
        if(isNew){
            const deleteBtn = el.childNodes[0].childNodes[0];
            deleteBtn.style.display = 'none';
        } else {
            const deleteBtn = el.childNodes[1].childNodes[1];
            deleteBtn.style.display = 'none';
        }
    }
}

const onhoveredit = (el) => {
    const editBtn = el.childNodes[1];
    editBtn.style.display = 'inline';
}

const onleaveedit = (el) => {
    const editBtn = el.childNodes[1];
    editBtn.style.display = 'none';
}