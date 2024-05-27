document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = '../API/API.json';

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
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
        const video = document.getElementById('video');
        const image = document.getElementById('image');

        projectName.textContent = project.Name;
        description.textContent = project.Description;
        language.textContent = project.Language;
        link.href = project.Link;
        link.textContent = project.Link;

        console.log("Project Data:", project);

        if (project.video) {
            video.src = project.video;
            video.style.display = 'block';
            image.style.display = 'none';
            console.log("Displaying video:", project.video);
            video.oncanplay = () => console.log("Video can play:", project.video);
            video.onerror = () => console.error("Video error:", project.video);
        } else if (project.image) {
            image.src = project.image;
            image.style.display = 'block';
            video.style.display = 'none';
            console.log("Displaying image:", project.image);
            image.onerror = () => console.error("Image error:", project.image);
        } else {
            video.style.display = 'none';
            image.style.display = 'none';
            console.log("No media to display");
        }
    }

    function initializeEventListeners(projects) {
        const projectLinks = document.querySelectorAll('.dropdown-item');

        projectLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const projectName = event.target.textContent;
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
            updateContent(projects[0]);
        }
    });
});
