const addButton = document.querySelector('.btn.btn-primary');

function getInputText() {
    // returns the value of text input
    const formAddText = document.querySelector('#add-task');
    return formAddText.nodeValue;
}

function addTask(input) {
    const textInput = getInputText();
    const todoElement = document.getElementById("todo-list");

    const todoItem = `
    <div class="row px-3 align-items-center todo-item rounded">
                    <div class="col-auto m-1 p-0 d-flex align-items-center">
                        <h2 class="m-0 p-0">
                            <i class="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                            <i class="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                        </h2>
                    </div>
                    <div class="col px-1 m-1 d-flex align-items-center">
                        <input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="${input}" title="Buy groceries for next week" />
                        <input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Buy groceries for next week" />
                    </div>
                    <div class="col-auto m-1 p-0 px-3 d-none">
                    </div>
                    <div class="col-auto m-1 p-0 todo-actions">
                        <div class="row d-flex align-items-center justify-content-end">
                            <h5 class="m-0 p-0 px-2">
                                <i class="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                            </h5>
                            <h5 class="m-0 p-0 px-2">
                                <i class="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                            </h5>
                        </div>
                        <div class="row todo-created-info">
                            <div class="col-auto d-flex align-items-center pr-2">
                                <i class="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                                <label class="date-label my-2 text-black-50">27th Jun 2020</label>
                            </div>
                        </div>
                    </div>
                </div>
    `
    const test = document.createElement('div');
    test.innerHTML = todoItem;
    todoElement.appendChild(test);
}

addButton.addEventListener('click', addTask(getInputText()));