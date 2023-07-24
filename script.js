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
            this.prev = prev;
            this.code = code;
        }

        const earthAlly = new Project('Earth Ally', 'img/project-thumbnail/earth-ally.png', '11/2022', 'html, css, flexbox', 'another project')
        const odinRecipes = new Project('Odin Recipes', 'img/project-thumbnail/odin-recipes.png', '11/2022', 'html, css', 'first project', )
        const rps = new Project('Rock Paper Scissors', 'img/project-thumbnail/rps.png', '02/2023', 'html, css, javascript', 'rock paper scissors game');
        const etchASketch = new Project('Etch A Sketch', 'img/project-thumbnail/etch-a-sketch.png', '02/2023', 'html, css, js', 'etch a sketch')
        const calculator = new Project('Calculator', 'img/project-thumbnail/calculator.png', '02/2023', 'html, css, js', 'calculator project')
        const pokedex = new Project('Pokedex', 'img/project-thumbnail/pokedex.png', '03/2023', 'html, css, js', 'a pokedex collab');

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
                    projDate.textContent  = item.date;
                    projTags.textContent = item.tags;
                    projDesc.textContent = item.desc;

                    console.log('the html img is ' + item.tn);
                }
            }) 

            return projectName;
        }

        function toProperCase(str){
            let properCase = [];
            let nameArray = str.split('-'); 
            for(i = 0; i < nameArray.length; i++){
                properCase[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
            }
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
