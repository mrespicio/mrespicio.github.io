// function selectItem(item){
//     console.log(item);
//     if(item.classList.contains('selected')) item.classList.remove('selected');
//     else item.classList.add('selected');
// }

// project object - this info is to display on sidebar
function Project(variable, name, tn, date, tags, desc, prev, code, featured, recent){
    this.variable = variable;
    this.name = name;
    this.tn = tn;
    this.date = date;
    this.tags = tags;
    this.desc = desc;
    this.code = code;
    this.prev = prev;
}
// display array

// if project-item then it goes into 'all' folder
/* my projects */
const earthAlly = new Project('earth-ally', 'Earth Ally', 'img/project-thumbnail/earth-ally.png', 'Nov 2022', 'html, css, flexbox', 
        'A mock sustainable fashion brand landing page.',
        'https://github.com/mrespicio/earth-ally', 'https://mrespicio.github.io/earth-ally/')
const odinRecipes = new Project('odin-recipes', 'Odin Recipes', 'img/project-thumbnail/odin-recipes.png', 'Nov 2022', 'html, css', 
        'Simple HTML project showcasing three different food recipes',
        'https://github.com/mrespicio/odin-recipes', 'https://mrespicio.github.io/odin-recipes/')
const rps = new Project('rock-paper-scissors', 'Rock Paper Scissors', 'img/project-thumbnail/rps.png', 'Feb 2023', 'html, css, js',
        'Rock, Paper, Scissors game versus a computer',
        'https://github.com/mrespicio/rock-paper-scissors', 'https://mrespicio.github.io/rock-paper-scissors/');
const etchASketch = new Project('etch-a-sketch', 'Etch A Sketch', 'img/project-thumbnail/etch-a-sketch.png', 'Feb 2023', 'html, css, js',
        'Web app based on the mechanical drawing toy',
        'https://github.com/mrespicio/etch-a-sketch', 'https://mrespicio.github.io/etch-a-sketch/')
const calculator = new Project('calculator', 'Calculator', 'img/project-thumbnail/calculator.png', 'Feb 2023', 'html, css, js',
        'A simple calculator implementation',
        'https://github.com/mrespicio/calculator', 'https://mrespicio.github.io/calculator/')
const pokedex = new Project('pokedex', 'Pokedex', 'img/project-thumbnail/pokedex.png', 'March 2023', 'html, css, js',
        'Collab to create our version of a pokedex using the Pokemon API',
        'https://github.com/mrespicio/pokedex', 'https://mrespicio.github.io/pokedex/');
const tonicSignUpForm = new Project('tonic-sign-up-form', 'Tonic Sign Up Form', 'img/project-thumbnail/tonic-sign-up-form.png', 'June 2023', 'html, css, js',
        'Sign-Up form for a mock cosmetic brand with form validation',
        'https://github.com/mrespicio/tonic-sign-up-form', 'https://mrespicio.github.io/tonic-sign-up-form/')
const adminDashboard = new Project('admin-dashboard', 'Admin Dashboard', 'img/project-thumbnail/admin-dashboard.png', 'July 2023', 'html, css, css grid, js', 
        'Dashboard implementation using css grid',
        'https://github.com/mrespicio/admin-dashboard', 'https://mrespicio.github.io/admin-dashboard/')

// contains all projects
const allFolder = [];
allFolder.push(earthAlly, odinRecipes, rps, etchASketch,
    calculator, pokedex, tonicSignUpForm, adminDashboard);

const featuredFolder = [];
featuredFolder.push(earthAlly, tonicSignUpForm, calculator);

const recentFolder = [];
recentFolder.push(adminDashboard, tonicSignUpForm, pokedex, calculator);

const foldersObj = document.getElementById('projects-folders'); //object
const folders = foldersObj.getElementsByClassName('folder-item'); //collection

// object, used here and to find project to display on sidebar
const projectsGrid = document.getElementById('projects-item-grid'); 
const projItems = projectsGrid.getElementsByClassName('project-item'); // collection

// find which folder is selected
// give folders event listeners

for(let fold of folders){
    fold.addEventListener('click', () => {
        for(let f of folders){
            f.classList.remove('folder-selected');
            // console.log(f + 'thing removed');
        }
        fold.classList.add('folder-selected');
        changeFolder();
        addStuff();
    }) //event listener
} // for

/* ------------------- display selected folder ------------------- */

function toCamelCase(str){
    let camelCase = [];
    let nameArray = str.split('-'); 

    for(i = 0; i < nameArray.length; i++){
        if(i == 0) camelCase[0] = nameArray[0];
        else camelCase[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
    }
    let camelCaseStr = camelCase.join('');
    return camelCaseStr
}

function changeFolder(){
	while(projectsGrid.lastElementChild) 
		projectsGrid.removeChild(projectsGrid.lastElementChild)
	
    // iterate the grid to view each item
    for(let i = 0; i < folders.length; i++){
        if(folders[i].classList.contains('folder-selected'))
            selectedFolder = folders[i].id;
    }
    selectedFolder = toCamelCase(selectedFolder); // now same name as array name
    switch(selectedFolder){
        case 'featuredFolder':
            displaySelectedFolder(featuredFolder);
            break;
        case 'recentFolder':
            displaySelectedFolder(recentFolder);
            break;
        case 'allFolder':
            displaySelectedFolder(allFolder);
            break;
        default:
            console.log('no folder');
        }
}

function displaySelectedFolder(folder){
    folder.forEach(item => {
        // div
        let projItem = document.createElement('div');
        projItem.id = item.variable;
        projItem.classList.add('project-item');

        // img
        let projItemImg = document.createElement('img');
        projItemImg.src = item.tn;

        // header
        let projItemTitle = document.createElement('h3');
        projItemTitle.innerText = item.name;

        projItem.append(projItemImg);
        projItem.append(projItemTitle);

        projectsGrid.append(projItem); //div
    })
}

// function selectProject(proj){
//     console.log(proj);
//     if(item.classList.contains('proj-selected')) item.classList.remove('proj-selected');
//     else item.classList.add('proj-selected');
// }


/* ------------------- find project to display on sidebar ------------------- */
let projName = document.getElementById('sb-project-name');
let projImg = document.getElementById('sb-project-thumbnail');
let projDate = document.getElementById('sb-date');
let projTags = document.getElementById('sb-tags');
let projDesc = document.getElementById('sb-desc');
let projCode = document.getElementById('sb-code-link');
let projPrev = document.getElementById('sb-prev-link');

function addStuff(){
for(let i = 0; i < projItems.length; i++){
    console.log(projItems[i].id);
    projItems[i].addEventListener('click', () => {
        let projName = findProject(projItems[i].id); // id in this-format
        console.log('you clicked on ' + projName);
    });
}
}

// fix name to proper case
function findProject(name){
    //let projectName = toProperCase(name); //get project name //projectName in This Format
    //let projectName = name;
    // iterate projectsHolder object to find 
    // projectName == project.name
    allFolder.forEach(item => {
        if(item.variable == name){ // found match, display items in sidebar
            projName.textContent = item.name;
            projImg.src = item.tn;
            projDate.textContent  = `Date: ${item.date}`;
            projTags.textContent = `Tags: ${item.tags}`;
            projDesc.textContent = item.desc;
            projCode.href = item.code;
            projPrev.href = item.prev;
        }
    }) 
    return projectName;
}

function toProperCase(str){
    let properCase = [];
    let nameArray = str.split('-'); 
    for(i = 0; i < nameArray.length; i++)
        properCase[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
    let properCaseStr = properCase.join(' ');
    return properCaseStr
}

/* ------------------- end find project to display on sidebar ------------------- */





// iterate folders and find the selected one
// const foldersObj = document.getElementById('projects-folders'); //object

// const folders = foldersObj.getElementsByClassName('folder-item'); //collection
// console.log(folders);




// const projectsGrid = document.getElementById('projects-item-grid'); // object
// const projItems = projectsGrid.getElementsByClassName('project-item'); // collection

// projectsGrid = grid
// projItems = each item





// if class == folder selected
// img src = open folder
// if class has no folder selected
// img src = closed folder

// all project-item are in all projects folder

// display featured folder
// const projectsList = document.getElementById('projects-item-grid');  // object
// console.log('all projects is ' + typeof(allProjects));
// iterate projects grid
// if project does not have class same name of folder
// add hide-project class
// else remove hide-project class
