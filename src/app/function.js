export function totalAndDoneCount() {
    totalCount.innerText = crateTotalCount();
    doneCount.innerText = createDoneCount();
}

export function createList(text) {
    const list = listTemplate.content.cloneNode(true);
    const listText = list.querySelector(".list-text")
    listText.innerText = text;
    return list;
}

export const crateTotalCount = () => {
    return document.querySelectorAll(".list").length;
}

export const createDoneCount = () => {
    return document.querySelectorAll(".list .list-check-box:checked").length;
}