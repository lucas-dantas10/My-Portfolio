const url = "https://api.github.com/users/lucas-dantas10/repos";

const listCourse = document.getElementById('name-course');
const aluraTracker = document.getElementById('course-name');

const nomeRepositorio = fetch(url)
    .then(res => {
        return res.json();
    })
    .then(response => {
        response.forEach(res => {
            if (res.id === 550959984) {
                let nameRepos = res.name;
                aluraTracker.textContent = nameRepos;

            } else if (res.id === 523355110) {
                let nameRepos = res.name;
                listCourse.textContent = nameRepos;
            }
        });
    });