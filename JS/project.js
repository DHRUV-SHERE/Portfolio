document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = '../API/Api.json';

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Error fetching the data: ", error);
        }
    }

    function updateContent(project) {
        const projectName = document.getElementById('projectname');
        const description = document.getElementById('description');
        const language = document.getElementById('language');
        const link = document.getElementById('link');
        const link2 = document.getElementById('link2');
        const video = document.getElementById('video');
        const image = document.getElementById('image');

        projectName.textContent = project.Name;
        description.textContent = project.Description;
        language.textContent = project.Language;
        link.href = project.Link;
        link.textContent = project.Link;
        link2.href = project.Link2;
        link2.textContent = project.Link2;

        if (project.video) {
            video.src = project.video;
            video.style.display = 'block';
            image.style.display = 'none';
            video.load(); 
            video.onerror = () => console.error("Video error:", project.video);
        } else if (project.image) {
            image.src = project.image;
            image.style.display = 'block';
            video.style.display = 'none';
            image.onerror = () => console.error("Image error:", project.image);
        } else {
            video.style.display = 'none';
            image.style.display = 'none';
        }
    }

    function initializeEventListeners(projects) {
        const projectLinks = document.querySelectorAll('.dropdown-item');

        projectLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const projectName = event.target.textContent.trim();
                const selectedProject = projects.find(project => project.Name.includes(projectName));
                if (selectedProject) {
                    updateContent(selectedProject);
                }
            });
        });
    }

    fetchData().then(projects => {
        if (projects) {
            initializeEventListeners(projects);
            updateContent(projects[0]); // Display the first project by default
        }
    });
});

document.addEventListener("contextmenu", function (i) {
    i.preventDefault();
}, false);