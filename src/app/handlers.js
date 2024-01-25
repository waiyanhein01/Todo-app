import { createList, totalAndDoneCount } from "./function.js";

export const appList = () => {
    listGroup.append(createList(textInput.value));
    totalAndDoneCount();
    textInput.value = null;
}

export const checkList = (event) => {
    const checkText = event.target.nextElementSibling;
    checkText.classList.toggle("line-through")
    totalAndDoneCount();
}

export const editList = (event) => {
    const list = event.target.closest(".list");
    const listText = list.querySelector(".list-text");
    const input = document.createElement("input");
    input.className = "border border-zinc-700 px-2 focus-visible:outline-none";
    listText.after(input);
    input.value = listText.innerText;
    input.focus();
    listText.classList.toggle("hidden");
    input.value = listText.innerText;
    input.addEventListener("blur", updateList)
}

export const updateList = (event) => {
    const currentList = event.target.value;
    const eventTarget = event.target;
    const list = event.target.closest(".list");
    const listText = list.querySelector(".list-text");
    listText.innerText = currentList;
    listText.classList.toggle("hidden");
    eventTarget.remove();
}

export const deleteList = (event) => {
    const list = event.target.closest(".list");
    if (confirm("Are u sure to delete")) {
        list.classList.remove("animate__bounceIn")
        list.classList.add("animate__flipOutY")
        const removeList = () => {
            list.removeEventListener("animationend", removeList)
            list.remove();
            totalAndDoneCount();
        }
        list.addEventListener("animationend", removeList)
    }
}



export const listGroupHandler = (event) => {
    if (event.target.classList.contains("list-del-btn")) {
        deleteList(event);
    } else if (event.target.classList.contains("list-edit-btn")) {
        editList(event);
    } else if (event.target.classList.contains("check-list-group")) {
        checkList(event);
    }
}