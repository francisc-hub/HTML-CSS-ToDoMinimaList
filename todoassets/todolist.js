/* let */

let bouton = document.querySelector(".button");
let liste = document.querySelector(".list");
let liste2 = document.querySelector(".list2");
let texte = document.querySelector(".text");
let inputTodo = document.createElement("input");

/* traitement */
bouton.addEventListener("click", function () {
  let todo = document.createElement("li"); // creer une liste li

  let deleteButton = document.createElement("button"); // creer bouton delete
  deleteButton.innerText = "X"; // Ajout du texte du bouton de delete

  let doneButton = document.createElement("button"); // creer bouton done
  doneButton.innerText = ">"; // // Ajout du texte du bouton de done

  let modButton = document.createElement("button"); // creer bouton modif
  modButton.innerText = "..."; // Ajout du texte du bouton de modif
  inputTodo.disabled = true;
  inputTodo.value = texte.value;

  /* lier bouton delete*/
  todo.innerText = texte.value; // Ajout de la valeur de l'input dans le li
  todo.appendChild(deleteButton); // Ajout du bouton de suppression du li
  deleteButton.addEventListener("click", function () {
    todo.remove();
  });
  /* lier bouton done*/
  todo.appendChild(doneButton); // Ajout du bouton de ajout du li
  doneButton.addEventListener("click", function () {
    liste2.appendChild(todo);
    doneButton.remove();
  });
  /* lier bouton mod*/
  todo.appendChild(modButton);
  modButton.addEventListener("click", function () {
    let modif = prompt("Taper votre modification");
    todo.innerHTML = modif;
    todo.appendChild(modButton);
    todo.appendChild(deleteButton);
    todo.appendChild(doneButton);
  });
  inputTodo.disabled = true;

  liste.appendChild(todo); // Ajout du li dans la liste
  texte.value = ""; // Réinitlialisation de la valeur de l'input
});


/*
function stockStorage() {
  localStorage.setItem(document.querySelectorAll(".texte").value);
}
let stock = localStorage.getItem(".texte");
stockStorage();


/*

form.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        alert("touche entrée");
    }
});



/*
 /*todo.innerHTML = inputText.value;
const buttons = document.querySelectorAll(".test").forEach(buttons => {
  buttons.addEventListener("click", function(e) {
    console.log(e.target.value);
  }); /* boucle foreach pour boucler le tableau queryselectorall
});
/*
