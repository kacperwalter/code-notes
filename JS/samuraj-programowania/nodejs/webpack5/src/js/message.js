export const messageDOM = (info) => document.body.textContent = info;

export const swapElement = () => {
    const divToSwap = document.querySelector('.el-to-swap');
    divToSwap.textContent = "Zamieniony element";
}