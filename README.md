# anniversary221026

Juego interactivo de The Amazing Digital Circus para el 22 de octubre.
Es una página estática: HTML, CSS y JavaScript, sin build ni servidor.

## Estructura

- `index.html`: la página
- `css/style.css`: estilos
- `js/main.js`: el juego (preguntas en `Q`, frases de Caine, sonidos de las fotos secretas en `SND`)
- `js/data.js`: lista de sonidos (`AUD`) y de dibujos (`IMG`)
- `js/matter.min.js`: motor de física (Matter.js)
- `assets/audio/`: telon, abrir-telon, aventura-main, final-question, redoble
- `assets/img/dibujos/`: dibujos que salen al azar
- `assets/img/secretos/`: fotos escondidas detrás de los bloques
- `assets/img/`: Caine

## Render

Static Site, repositorio conectado, Build Command vacío, Publish Directory `.`

## Probar en el computador

Los audios no cargan abriendo `index.html` con doble clic. Hay que servirlo:

    python -m http.server 8000

y abrir http://localhost:8000

## Sonidos de las fotos secretas

Copia el mp3 a `assets/audio/` y en `js/main.js` cambia el `null` de `SND`, por ejemplo:
`const SND={mc:"assets/audio/minecraft.mp3",rb:null,alice:null,nina:null,mario:null};`
