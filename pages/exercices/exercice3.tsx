/** @format */

import type { NextPage } from "next";

const Exercise3: NextPage = () => {
	return (
		<>
			<h1>Exercice 3</h1>
			<p>
				{" "}
				<h3>Consignes :</h3>
				<ul>
					<li> Mettre en forme l&apos;exercice 3</li>
					<li>
						{" "}
						Recopier le formulaire d&apos;inscription précédent ci-dessous
					</li>
					<li>
						{" "}
						Grâce au fichier styles/globals.css,
						<ul>
							<li>Mettre le texte des labels en bleu</li>{" "}
							<li>Agrandir la police dans les input texte</li>{" "}
							<li>
								Placer un bloc en position absolue à droite du champ adresse
								email avec un texte de votre choix en police 10px rouge.
							</li>
						</ul>
					</li>
				</ul>
			</p>
			<h3>Formulaire d'inscription</h3>
			<form method="post">
				<div>
					<label htmlFor="firstname">Prénom</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						placeholder="Prénom"
					/>
				</div>
				<div>
					<label htmlFor="lastname">Nom</label>
					<input type="text" id="lastname" name="lastname" placeholder="Nom" />
				</div>

				<div>
					<label htmlFor="email">Adresse mail</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="example@abc.com"
					/>
					<p id="Paragrapherouge">
						Text rouge avec une taille de police de 10px ;)
					</p>
				</div>

				<div>
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Mot de passe"
					/>
				</div>
				<div>
					<label htmlFor="cgu">CGU</label>
					<input type="checkbox" id="cgu" name="cgu" />
				</div>

				<div>
					<button type="submit">Envoyer</button>
				</div>
			</form>
		</>
	);
};

export default Exercise3;
