window.onload = async function () {
    let data = await recup_data("../json/livre_or.json");
    update_top(data[1]);
    update_corps(data[1].parties_list)
}

let template_intro = document.querySelector("#top");
let template_corps = document.querySelector("#body");

function update_top(data) {
    let clone = document.importNode(template_intro.content, true);
    newcontent = clone.firstElementChild.innerHTML
            .replace(/{{nom_article}}/g, data.article_name)
            .replace(/{{intro_article}}/g, data.intro_article);
    
    clone.firstElementChild.innerHTML = newcontent;
    document.getElementById("article").appendChild(clone);
}

function update_corps(data) {
    // fonction pour mettre à jour la grille des destination
    // utilisation d'un template
    for (const p of data) {

        let clone = document.importNode(template_corps.content, true);

        // remplacement des valeurs
        newcontent = clone.firstElementChild.innerHTML
            .replace(/{{partie_name}}/g, p.partie_name)
            .replace(/{{intro_partie}}/g, p.intro)
            .replace(/{{corps_partie}}/g, p.corps);

        // ajout du clone.
        clone.firstElementChild.innerHTML = newcontent;
        document.getElementById("article").appendChild(clone);
    }
}