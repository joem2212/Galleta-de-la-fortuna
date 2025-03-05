import { useState } from 'react';
import phrases from './phrases.json';
import { randomItem } from '.';
import PhraseCard from './Components/PhraseCard';
import Button from './Components/Button';
import {
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
} from './assets';

const colors = [
	'#FF5733',
	'#33FF57',
	'#5733FF',
	'#FF3357',
	'#33FF57',
	'#57FF33',
];
const imagenes = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
];
function App() {
	const [phrase, setPhrase] = useState(randomItem(phrases));
	const [image, setImage] = useState(randomItem(imagenes));

	const changePhrase = () => {
		setPhrase(randomItem(phrases));
		setImage(randomItem(imagenes));
	};
	return (
		<>
			<div className="container" style={{ backgroundImage: `url(${image})` }}>
				<h1>galleta de la fortuna</h1>

				<PhraseCard phrase={phrase.phrase} author={phrase.author} />
			</div>
			<Button handelPhrase={changePhrase}>Obtener Frase</Button>
		</>
	);
}
export default App;
