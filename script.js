const API = "https://api.github.com/users/";

const form = document.getElementById ("search-form");

const input = document.getElementById("search-input");

const satatuLine = document.getElementById("status");

const profile = document.getElementById("profile");

const repositories = document.getElementById("repositories");

const repoHeading = document.getElementById("repo-heading");

function showSkeletons() {
    repositories.innerhtml = "";

    for (let i = 0; i < 6; i++) {
        const skeleton = document.getElementById("div");

        skeleton.className = "skeleton";

        repositories.appendChild(skeleton);

    }
}

async function getUser(username) {

}

async function getUser() {
    const res = fetch('${API}');
    const data = res.json();

    console.log(data);

}


    


getUser();