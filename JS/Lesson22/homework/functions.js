const createEl = tag => document.createElement(tag);

function options(arr, child, parent)
{
    Object.keys(arr).forEach(key =>
    {
        child.append(Object.assign(createEl("option"), {textContent: key}));
    });

    if (!parent.contains(child)) parent.append(child);
}

function selectOnChange(event, container, array) 
{
    container.innerHTML = "";
    let select = createEl("select");
    select.append(Object.assign(createEl("option"), {textContent: "Select"}));
    let selectedCategory = array[event.target.value];
    options(selectedCategory, select, container);    
    let price = createEl("p");
    select.addEventListener("change", function (event)
    {
        let selectedProduct = event.target.value;
        price.textContent = `${selectedCategory[selectedProduct]}`;
        container.append(price);        
    });
}

function ui(array, select, body, container)
{
    options(array, select, body);
    select.addEventListener("change", (event) => selectOnChange(event, container, array));
}

export { ui };