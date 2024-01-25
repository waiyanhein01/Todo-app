//Selector
const app = document.querySelector('#app');
const textInput = document.querySelector('#textInput');
const addBtn = document.querySelector('#addBtn');
const listGroup = document.querySelector('#listGroup');
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");
const listTemplate = document.querySelector("#listTemplate")

function totalAndDoneCount() {
    totalCount.innerText = crateTotalCount();
    doneCount.innerText = createDoneCount();
}

const crateTotalCount = () => {
    return document.querySelectorAll(".list").length;
}

const createDoneCount = () => {
    return document.querySelectorAll(".list .list-check-box:checked").length;
}


//function
function createList(text) {
    const list = listTemplate.content.cloneNode(true);
    const listText = list.querySelector(".list-text")
    // const listDelBtn = list.querySelector('.list-del-btn');
    // const listEditBtn = list.querySelector('.list-edit-btn');
    // const listCheckbox = list.querySelector(".list-check-box");

    listText.innerText = text;

    // listDelBtn.addEventListener("click", deleteList);
    // listCheckbox.addEventListener("change", checkList);
    // listEditBtn.addEventListener("click", editList);

    // listEditBtn.addEventListener("click", () => {
    //     // console.log("u edit"); 
    //     const input = document.createElement("input");
    //     input.className = "border border-zinc-700 px-2 focus-visible:outline-none";
    //     textCheckbox.after(input);
    //     input.focus();
    //     textCheckbox.classList.toggle("hidden")
    //     input.value = textCheckbox.innerText;
    //     input.addEventListener("blur", () => {
    //         textCheckbox.innerText = input.value;
    //         input.remove();
    //         textCheckbox.classList.toggle("hidden"); 
    //     })
    // })

    // listDelBtn.addEventListener("click", () => {
    //     // if(confirm("Are you sure to delete?")) {
    //     //     list.remove();
    //     // }
    //     confirm('Are u want to delete?') && list.remove();
    //     totalAndDoneCount()
    // });

    
    // listCheckbox.addEventListener("click", () => {
    //     textCheckbox.classList.toggle("line-through")
    //     // console.log("u check");
    //     totalAndDoneCount();
    // })

    
    return list;
}


//handler
const appList = () => {
    // console.log("hello u do"); 
    // create
 
    //add to ui
    listGroup.append(createList(textInput.value));
    totalAndDoneCount();

    //clear
    textInput.value = null;

}

const checkList = (event) => {
    const checkText = event.target.nextElementSibling;
    checkText.classList.toggle("line-through")
    totalAndDoneCount();
    // console.dir(event.target); 
}

const editList = (event) => {
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
    // console.log("u edit"); 
}

const updateList = (event) => {
    const currentList =  event.target.value;
    const eventTarget = event.target;
    const list = event.target.closest(".list");
    const listText = list.querySelector(".list-text");
    listText.innerText = currentList;
    listText.classList.toggle("hidden");
    eventTarget.remove();

    // () => {
    //     listText.innerText = input.value;
    //     input.remove();
    //     listText.classList.toggle("hidden"); 
    // }
}

const deleteList = (event) => {
    const list = event.target.closest(".list");
    if(confirm("Are u sure to delete")) {
        list.classList.remove("animate__bounceIn")
        list.classList.add("animate__flipOutY")
        const removeList = () => {
            list.removeEventListener("animationend", removeList)
            list.remove();
            totalAndDoneCount();  
        }    
        
        list.addEventListener("animationend", removeList)
    }
    // console.dir(event.target);
    // console.log(event.target.parentElement.parentElement.parentElement);
    // console.log("U delete");
}

// listener
addBtn.addEventListener("click", appList);
textInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        appList()
    }
})

const listGroupHandler = (event) => {
    if(event.target.classList.contains("list-del-btn")) {
        deleteList(event);
    }else if(event.target.classList.contains("list-edit-btn")) {
        editList(event);
    }else if(event.target.classList.contains("check-list-group")) {
        checkList(event);
    }
    // console.log(event.target);
}

listGroup.addEventListener("click", listGroupHandler);

