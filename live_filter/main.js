/* Viusalizzare in pagina un box per ogni icona, 
in cui è poresente il nome dell'icona e l'icona stessa */

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	}
];




// Creo una funzione per generare il markup
/**
 * Generates the icon markup
 * @param {object} icon The icon object
 */
function generate_icon_markup(icon) {
    return `
        <div class="icon">
            <i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${icon.color}"></i>
            <p>${icon.name}</p>
        </div>
    `
}

const iconsElement = document.querySelector('.icons')
generate_cards(icons,iconsElement)

// Creo una funzione per generare le card
/**
 * 
 * @param {array} icons_array The array of icons
 * @param {*} dom_object A dom object  
 */
function generate_cards(icons_array, dom_object) {
    dom_object.innerHTML = ''
    console.log(dom_object);
    icons_array.forEach(icon => {
        // console.log(icon);
        const iconMarkup  = generate_icon_markup(icon)
        dom_object.insertAdjacentHTML('beforeend', iconMarkup)

    })
}




document.getElementById('types').addEventListener('change', function (event) {
    // console.log(event, event.target.value);
    
    const type_value = event.target.value
    let filtered_icons
    if (type_value !== 'all') {
        filtered_icons = icons.filter(icon => {
            console.log(icon);
            console.log(type_value);
            return type_value === icon.type
        })  
        
    }   
    
    // console.log(filtered_icons);
    generate_cards(filtered_icons, document.querySelector('.icons'))
    
})

/* Generates icons types dynamically */

// Selezionare il select
const selectElements = document.getElementById('types');
// Otteniamo una lista lista di tipi di icone

console.log(types);

function getTypes(list){
    const types = [];
    list.forEach(icon => {
    if(!types.includes(icon.type)){
        types.push(icon.type)
    }
    
})
return types
}

console.log(getTypes(icons));

const iconTypes = getTypes(icons);

// inserirre nel select le options con i tipi di icone
iconTypes.forEach(type => {
    selectElements.insertAdjacentHTML('beforeend', `<option value="${type}">${type}</option>`)
})