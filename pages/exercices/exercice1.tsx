/** @format */

import type { NextPage } from "next";

const Exercise1: NextPage = () => {
	return (
		<>
			<h1>Exercice 1 </h1>
			<p>
				Consignes :
				<ul>
					<li>
						Mettre en forme l&apos;exercice 1 (car on a pas le droit de mettre
						guillements ou des apostrophes)
					</li>
					<li>
						<table className ="table">
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
						En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans
						un tableau avec en-têtes ayant pour colonnes : Balise, Contenu. Dans
						la colonne contenu spécifier la ou les balises qu&apos;il est
						possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
						(pour les titres par exemple).
					</li>
				</ul>
			</p>
		</>
	);
};

export default Exercise1;
