var add = document.getElementById("add");
var tbody = document.getElementById("tbody");
var open = document.getElementById("open");
var pass = true

function Adding(event) {
    var inputs = [...document.querySelectorAll("input")]
    inputs.map((input) => { input.parentElement.textContent = input.value });
    event.target.textContent = "Edit"

    pass = true
}

function Remove(event) {
    event.target.parentElement.parentElement.remove()
}


open.addEventListener("click", () => {
    if (pass) {
        pass = false
        var tr = document.createElement("tr");
        tbody.append(tr);

        const no = document.createElement("td");
        const name = document.createElement("td");
        const surname = document.createElement("td");
        const age = document.createElement("td");
        const operation = document.createElement("td");

        tr.append(no, name, surname, age, operation);
        const input_name = document.createElement("input");
        const input_surname = document.createElement("input");
        const input_age = document.createElement("input");

        name.append(input_name);
        surname.append(input_surname);
        age.append(input_age);

        const button_add = document.createElement("button");
        button_add.addEventListener("click", Adding);

        const button_remove = document.createElement("button");
        button_remove.addEventListener("click", Remove);

        button_add.textContent = "Yadda saxla";
        button_remove.textContent = "Sil";

        operation.append(button_add, button_remove);
        button_add.setAttribute("id", "add");
        button_remove.classList.add("remove_btn");
    }
});
