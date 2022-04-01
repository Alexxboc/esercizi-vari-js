// Seleziono la sezione

const listElement = document.querySelector('.movies ul');

const movies = ['matrix', 'imitation game', 'avatar'];
const series = ['matrix', 'imitation game', 'avatar'];
const anime = ['matrix', 'imitation game', 'avatar'];

// for (let i = 0; i < movies.length; i++) {
//     const movie = movies[i];

//     const li = document.createElement('li')
//     li.append(movie)

//     listElement.append(li)
    
// }

function generateDomElement(tag_name, content){
    const node = document.createElement(tag_name);
    node.append(content);
    return node;
}

function generateList(dom_selector,list,tag_name){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        const node = generateDomElement(tag_name, element);
    
        document.querySelector(dom_selector).append(node);
    }
}

generateList('.movies ul', movies, 'li')
generateList('.series ul', series, 'li')
generateList('.anime ul', anime, 'li')
