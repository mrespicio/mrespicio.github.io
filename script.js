// function selectItem(item){
        //     console.log(item);
        //     if(item.classList.contains('selected')) item.classList.remove('selected');
        //     else item.classList.add('selected');
        // }
        
        function Project(name, tn, date, tags, desc, prev, code){
            this.name = name;
            this.tn = tn;
            this.date = date;
            this.tags = tags;
            this.desc = desc;
            this.code = code;
            this.prev = prev;
        }

        /* my projects */
        const earthAlly = new Project('Earth Ally', 'img/project-thumbnail/earth-ally.png', 'Nov 2022', 
                'html, css, flexbox', 
                'A mock sustainable fashion brand landing page.',
                'https://github.com/mrespicio/earth-ally', 'https://mrespicio.github.io/earth-ally/')
        const odinRecipes = new Project('Odin Recipes', 'img/project-thumbnail/odin-recipes.png', 'Nov 2022', 
                'html, css', 
                'Simple HTML project showcasing three different food recipes',
                'https://github.com/mrespicio/odin-recipes', 'https://mrespicio.github.io/odin-recipes/')
        const rps = new Project('Rock Paper Scissors', 'img/project-thumbnail/rps.png', 'Feb 2023', 'html, css, js',
                'Rock, Paper, Scissors game versus a computer',
                'https://github.com/mrespicio/rock-paper-scissors', 'https://mrespicio.github.io/rock-paper-scissors/');
        const etchASketch = new Project('Etch A Sketch', 'img/project-thumbnail/etch-a-sketch.png', 'Feb 2023', 'html, css, js',
                'Web app based on the mechanical drawing toy',
                'https://github.com/mrespicio/etch-a-sketch', 'https://mrespicio.github.io/etch-a-sketch/')
        const calculator = new Project('Calculator', 'img/project-thumbnail/calculator.png', 'Feb 2023', 'html, css, js',
                'A simple calculator implementation',
                'https://github.com/mrespicio/calculator', 'https://mrespicio.github.io/calculator/')
        const pokedex = new Project('Pokedex', 'img/project-thumbnail/pokedex.png', 'March 2023', 'html, css, js',
                'Collab to create our version of a pokedex using the Pokemon API',
                'https://github.com/mrespicio/pokedex', 'https://mrespicio.github.io/pokedex/');

        const projectsHolder = []
        projectsHolder.push(earthAlly);
        projectsHolder.push(odinRecipes);
        projectsHolder.push(rps);
        projectsHolder.push(etchASketch);
        projectsHolder.push(calculator);
        projectsHolder.push(pokedex);
        

        function selectProject(proj){
            console.log(proj);
            if(item.classList.contains('proj-selected')) item.classList.remove('proj-selected');
            else item.classList.add('proj-selected');
        }

        // iterate this
        const projectsGrid = document.getElementById('projects-grid');
        const projItems = projectsGrid.getElementsByClassName('project-item'); // collection
        // get div ids

        let projSidebar = document.getElementById('projects-sidebar');
        let projName = document.getElementById('project-name-editable');
        let projImg = document.getElementById('project-thumbnail-editable');
        let projDate = document.getElementById('date-editable');
        let projTags = document.getElementById('tags-editable');
        let projDesc = document.getElementById('desc-editable');

        let projCode = document.getElementById('code-link-editable');
        let projCodeBtn = document.getElementById('code-btn-editable');
        let projPrev = document.getElementById('prev-link-editable');
        let projPrevBtn = document.getElementById('prev-btn-editable');


        let projFound = '';
        for(let i = 0; i < projItems.length; i++){
            console.log(projItems[i].id);
            projItems[i].addEventListener('click', () => {
                let projName = findProject(projItems[i].id);
                console.log('you clicked on ' + projName);
            });
        }

        // fix name to proper case
        function findProject(name){
            let projectName = toProperCase(name); //get project name

            // iterate projectsHolder object to find 
            // projectName == project.name

            projectsHolder.forEach(item => {
                if(item.name == projectName){ // found match, display items in sidebar
                    projName.textContent = item.name;
                    projImg.src = item.tn;
                    projDate.textContent  = `Date: ${item.date}`;
                    projTags.textContent = `Tags: ${item.tags}`;
                    projDesc.textContent = item.desc;
                    projCode.href = item.code;
                    projPrev.href = item.prev;
                    document.getElementById('code-btn-editable').innerText = 'Source Code';
                    document.getElementById('prev-btn-editable').innerText = 'Preview';
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

        // function toCamelCase(str){
        //     let camelCase = [];
        //     let nameArray = str.split('-'); 

        //     for(i = 0; i < nameArray.length; i++){
        //         if(i == 0) camelCase[0] = nameArray[0];
        //         else camelCase[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
        //     }
        //     let camelCaseStr = camelCase.join('');
        //     return camelCaseStr
        // }
