const addBtn = document.querySelector(".add");

const input = document.querySelector(".inp-group");

function removeInput(){
    this.parentElement.remove();
}
var count = 0;
function addInput(langs){
    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";
    btn.addEventListener("click",removeInput);

    const div1 = document.createElement("div");
    div1.className = "flex flex-row justify-start mt-2";
    input.appendChild(div1);
    
    

    count++;
    // console.log(count);

    Object.keys(langs).forEach(function(key){
        var inpName ="ingredient["+count+ "][" + key + "]";
        var idd = "ingredient-" + key;

        const ingredient = document.createElement("input");
        ingredient.className = "form-control form-control-lg";
        ingredient.type = "text";
        ingredient.placeholder = langs[key]['native'];
        ingredient.name = inpName;
        ingredient.id = idd;

        const div2 = document.createElement("div");
        div2.className = "addedDiv2";

        const div3 = document.createElement("div");
        div3.className = "form-group";

        const label = document.createElement("label");
        label.for = idd;
        label.className = "form-label";
        label.appendChild(document.createTextNode(langs[key]['native']));

        const div4 = document.createElement("div");
        div4.className = "form-control-wrap";
        
        div1.appendChild(div2);
        div2.appendChild(div3);
        div3.appendChild(label);
        div3.appendChild(div4);
        
    
        div4.appendChild(ingredient);
        
    })

    
    div1.appendChild(btn);


}

// addBtn.addEventListener("click",addInput)
