function affich_page (page_name, page, SousPage, name_button) {
		list_argument = [page, SousPage];
		const list_id = {
			PosteAction : ["HomePA", "Secourisme", "Messager", "Pionnier", "Cuisinier", "Liturgiste", "Sportif", "Topographe", "Bout","TechniqueTopo", "MenuMessager", "MenuTopographe", "MenuPionnier", "MenuSportif", "MenuBout", "MenuCuisinier", "MenuLiturgiste", "RecapMessager", "Code", "RecapBout", "RecapSportif", "RecapPionnier", "RecapCuisinier", "RecapLiturgiste", "RecapTopographe", "Feu", "Priere", "Veille"],
			Progression : ["Promesse", "Seconde", 'Premiere', "Badge", "HomeProgression"],
			LivreOr : ["Histoire", "Scout", "Spatial", "HomeLivre-dOr", "Couleur", "Specialite", "marrant", "ETN", "Secouriste", "Sites", "Camp"],
			Technique : ["Marin", "Montagne", "Noeud", "Nautique", "Raid", "Optique", "MaterielCamp", "Week", "Meteo",  "HomeTechnique",  "Embuscade", "Olympiade", "Parcours"] 
		}
		console.log(list_id[page_name])
		for (let id_num in list_id[page_name]){
			console.log(id_num)
			document.getElementById(list_id[page_name][id_num]).style.display = "none";
		}
		for (let argument_num in list_argument){
			if (list_argument[argument_num] != 0) {
			document.getElementById(list_argument[argument_num]).style.display = "inline-block";
			}
		}
		if (name_button != 0){
			document.getElementById(name_button).style.color = "#FFA500"; // change couleur du text du bouton
		}
	}