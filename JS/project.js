document.addEventListener("DOMContentLoaded", () => {
    const GITHUB_USERNAME = "DHRUV-SHERE";
    const selectedRepos = [
        "AgroSence",
        "knowBase",
        "Spotify",
        "Oracle",
        "Amazon",
        "RejoiuceClone",
        "Online_Learning_Management_System",
        "React_Text_Site"
    ];
    const selectedReposLower = selectedRepos.map(name => name.toLowerCase());

    async function fetchData() {
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
            if (!response.ok) throw new Error(`GitHub API error! Status: ${response.status}`);

            const data = await response.json();
            const filteredRepos = data.filter(repo =>
                selectedReposLower.includes(repo.name.toLowerCase())
            );

            return filteredRepos.map(repo => ({
                Name: repo.name,
                Description: repo.description || "No description provided.",
                Language: repo.language || "N/A",
                Link: repo.homepage || repo.html_url,
                GitHub: repo.html_url
            }));
        } catch (error) {
            console.error("Error fetching GitHub data: ", error);
        }
    }

    function createProjectCard(project) {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card h-100 shadow-sm border-0" >
                <div class="card-body" style="background-color:rgb(71, 71, 71); color: #E0E0E0;">
                  <h5 class="card-title">${project.Name}</h5>
                  <p class="card-text">${project.Description}</p>
                  <p><strong>Language:</strong> ${project.Language}</p>
                  <a href="${project.GitHub}" class="btn btn-sm text-light ms-2" target="_blank" style="background-color: #BB86FC;">GitHub</a>
                </div>
              </div>
            </div>
          `;
    }

    function displayProjects(projects) {
        const container = document.getElementById("projects-container");
        container.innerHTML = projects.map(createProjectCard).join("");
    }

    fetchData().then(projects => {
        if (projects) {
            displayProjects(projects);
        }
    });
});

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
