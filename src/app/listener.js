import { appList, listGroupHandler } from "./handlers.js";

const listener = () => {
    addBtn.addEventListener("click", appList);
    textInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            appList();
        }
    })

    listGroup.addEventListener("click", listGroupHandler);
}

export default listener;