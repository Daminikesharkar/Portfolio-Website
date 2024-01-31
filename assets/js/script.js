var typed = new Typed(".variabletext", {
    strings: ["Backend development","Frontend development", "Fullstack development"],
    loop: true,
    backDelay: 300,
    typeSpeed: 60,
    backSpeed: 30,    
});

// projects section
async function fetchprojects(){
    let response = await fetch('./data/projects.json');
    const data = await response.json();
    return data;
}

function displayProject(projects){
    let projectContainer = document.getElementById('projects-container');
    let projectHTML = "";
    projects.forEach(project => {
        projectHTML += `
        <div class="container tilt">
            <img draggable="false" src="/assets/images/${project.image}.png" alt="project" />

            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                    </div>
                </div>
            </div>
        </div>`
    });
    projectContainer.innerHTML = projectHTML;
}

fetchprojects()
    .then((projects)=>{
        console.log(projects)
        displayProject(projects);
    })
    .catch((error)=>{
        console.log(error);
    })


//skills section
async function fetchSkills(){
    let response = await fetch('./data/skills.json');
    let data = response.json();
    return data;
}

function showSkills(skills){
    let skillsContainer = document.getElementById('skillsContainer');
    let skillInnerHtml = '';
    skills.forEach((skill)=>{
        skillInnerHtml += 
        `
            <div class="bar">
                <div class="info">
                    <img src=${skill.icon} alt="skill" />
                    <span>${skill.name}</span>
                </div>
            </div>
        `
    });
    skillsContainer.innerHTML = skillInnerHtml
}

fetchSkills()
    .then((skills)=>{
        showSkills(skills);
    })
    .catch((error)=>{
        console.log(error);
    })


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu ul');
    
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});