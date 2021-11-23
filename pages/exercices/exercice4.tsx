/** @format */

import type { NextPage } from "next";

const Exercise4: NextPage = () => {
	return (
		<div className="container">
			<h1>Exercice 4</h1>
			<p>
				<ul>
					{" "}
					<h3>Consignes :</h3>
					<li>Recopier les exercices 1 et 2 ci-dessous</li>
					<li>
						Les adapter pour que les 2 exercices soient sur 2 colonnes
						différentes sur Desktop, et sur une seule colonne sur Mobile
					</li>
					<li>
						Adapter le formulaire pour qu&apos;il respecte les guidelines
						Bootstrap sur les formulaires
					</li>
				</ul>
			</p>
			<div className="row">
        <div className="col-sm-6">
          <table className="table">
							<tr>
                <th>Balises</th>
                <th>Contenu</th>
              </tr>
              <tr>
                <td>h1</td>
                <td> Text -> Titre </td>
              </tr>
              <tr>
                <td> p  </td>
                <td> Text / photo -> Paragraphe </td>
              </tr>
              <tr>
                <td>ul/ol</td>
                <td> text/tableau/ ce qu'on veut ! même des blocs -> List </td>
              </tr>
              <tr>
                <td>Table</td>
                <td> Des lignes, colonnes, avec ce qu'on veut ou des titres -> table </td>
              </tr>
        </table>
        </div>
        <div className="col-sm-6">
          <form method="post">
					<div className="mb-3">
						<label htmlFor="firstname" className="form-label">Prénom</label>
						<input
							type="text"
							id="firstname"
							name="firstname"
                placeholder="Prénom"
                className="form-control"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="lastname" className="form-label">Nom</label>
						<input
							type="text"
							id="lastname"
							name="lastname"
              placeholder="Nom"
              className="form-control"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="form-label">Adresse mail</label>
						<input
							type="email"
							id="email"
							name="email"
              placeholder="example@abc.com"
              className="form-control"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="password" className="form-label">Mot de passe</label>
						<input
							type="password"
							id="password"
							name="password"
              placeholder="Mot de passe"
              className="form-control"
						/>
					</div>
					<div className="form-check">
						<label htmlFor="cgu" class="form-check-label">CGU</label>
						<input type="checkbox" id="cgu" name="cgu" class="form-check-input" />
					</div>

					<div className="d-grid">
						<button type="submit" class="btn btn-primary">Envoyer</button>
					</div>
				</form>
        </div>
			</div>
		</div>
	);
};

export default Exercise4;
