/* Dibujos: cada uno tiene su archivo en assets/img/dibujos. g="f" sale antes de la pregunta final, g="e" en la pantalla final, el resto al azar en el juego. */
const AUD={
 "tel": "assets/audio/telon.mp3",
 "open": "assets/audio/abrir-telon.mp3",
 "adv": "assets/audio/aventura-main.mp3",
 "fin": "assets/audio/final-question.mp3",
 "dr": "assets/audio/redoble.mp3"
};
const IMG=[
{
"s": "assets/img/dibujos/001.webp",
"a": "Dos personajes sonriendo con corazones en una casa de tinta"
},
{
"s": "assets/img/dibujos/002.webp",
"a": "Conejita rosa descansando sobre una mariposa en un campo de flores"
},
{
"s": "assets/img/dibujos/003.webp",
"a": "Conejita rosa y gato gris sobre fondo de corazones"
},
{
"s": "assets/img/dibujos/004.webp",
"a": "Conejita rosa abrazando un ramo azul"
},
{
"s": "assets/img/dibujos/005.webp",
"a": "Ramo morado con un corazón rojo"
},
{
"s": "assets/img/dibujos/006.webp",
"a": "Carta de corazones con la conejita y el gato"
},
{
"s": "assets/img/dibujos/007.webp",
"a": "Conejita con corona de torre Eiffel, un ramo y corazones"
},
{
"s": "assets/img/dibujos/008.webp",
"a": "Conejita con corona de torre Eiffel abrazando un ramo morado"
},
{
"s": "assets/img/dibujos/009.webp",
"a": "Gato gris y conejita rosa vestidos de piratas en un barco"
},
{
"s": "assets/img/dibujos/010.webp",
"a": "Gato gris con un tulipán y un corazón de bombones"
},
{
"s": "assets/img/dibujos/011.webp",
"a": "Conejita con un ramo de flores amarillas"
},
{
"s": "assets/img/dibujos/012.webp",
"a": "Gato gris con un ramo y un corazón de bombones"
},
{
"s": "assets/img/dibujos/013.webp",
"a": "Conejita con corona de torre Eiffel y una paloma"
},
{
"s": "assets/img/dibujos/014.webp",
"a": "Gato y conejita juntos"
},
{
"s": "assets/img/dibujos/015.webp",
"a": "Gato gris con un ramo: las mejores flores para la mejor novia",
"g": "f"
},
{
"s": "assets/img/dibujos/016.webp",
"a": "Gato gris sonriendo con tulipanes y corazones"
},
{
"s": "assets/img/dibujos/017.webp",
"a": "Conejita con ramo, globos, helado y un muñeco de tinta"
},
{
"s": "assets/img/dibujos/018.webp",
"a": "Gato y conejita con flores"
},
{
"s": "assets/img/dibujos/019.webp",
"a": "Tres flores amarillas en una maceta"
},
{
"s": "assets/img/dibujos/020.webp",
"a": "Gato y conejita frente a un Pollo Campero"
},
{
"s": "assets/img/dibujos/021.webp",
"a": "Gato gris entregando un ramo con corona de torre Eiffel a la conejita"
},
{
"s": "assets/img/dibujos/022.webp",
"a": "Gato gris con un ramo de flores amarillas frente a la conejita con tiara"
},
{
"s": "assets/img/dibujos/023.webp",
"a": "Gato y conejita abrazados en la playa con palmeras"
},
{
"s": "assets/img/dibujos/024.webp",
"a": "Conejita con tiara y ramo morado flotando sobre el gato"
},
{
"s": "assets/img/dibujos/025.webp",
"a": "Conejita con tiara asomada sobre la cabeza del gato"
},
{
"s": "assets/img/dibujos/026.webp",
"a": "Conejita con tiara y ramo viendo fuegos artificiales, y el gato con pastelitos"
},
{
"s": "assets/img/dibujos/027.webp",
"a": "Gato y conejita abrazados frente a un atardecer rosado"
},
{
"s": "assets/img/dibujos/028.webp",
"a": "Gato gris sosteniendo un corazón grande"
},
{
"s": "assets/img/dibujos/029.webp",
"a": "Conejita con tiara sobre fondo de rosas"
},
{
"s": "assets/img/dibujos/030.webp",
"a": "Conejita con tiara abrazando un ramo morado"
},
{
"s": "assets/img/dibujos/031.webp",
"a": "Gato abrazando a la conejita detrás de un corazón rojo"
},
{
"s": "assets/img/dibujos/032.webp",
"a": "Conejita abrazando al gato rodeada de corazones"
},
{
"s": "assets/img/dibujos/033.webp",
"a": "Gato gris cargando a la conejita en brazos con corazones"
},
{
"s": "assets/img/dibujos/034.webp",
"a": "Conejita con tiara y gato abrazados"
},
{
"s": "assets/img/dibujos/035.webp",
"a": "Gato y conejita con tiara bailando de la mano"
},
{
"s": "assets/img/dibujos/036.webp",
"a": "Conejita con alas y gorro naranja sobre fondo negro con corazones"
},
{
"s": "assets/img/dibujos/037.webp",
"a": "Gato gris con un ramo con tiara y la conejita detrás, con las palabras Te amo",
"g": "e"
},
{
"s": "assets/img/dibujos/038.webp",
"a": "Conejita con tiara sobre un fondo de Soy Ivy"
},
{
"s": "assets/img/dibujos/039.webp",
"a": "Gato y conejita abrazados con corazones y M+I"
},
{
"s": "assets/img/dibujos/040.webp",
"a": "Gato gris con un ramo de rosas en un bosque de bloques"
},
{
"s": "assets/img/dibujos/041.webp",
"a": "Gato y conejita abrazados frente a un atardecer en el mar"
},
{
"s": "assets/img/dibujos/042.webp",
"a": "Gato y conejita con un corazón M+I y las palabras Te amo",
"g": "e"
},
{
"s": "assets/img/dibujos/043.webp",
"a": "Una rosa sobre un corazón rojo brillante"
},
{
"s": "assets/img/dibujos/044.webp",
"a": "Conejita con tiara y un ramo celeste"
},
{
"s": "assets/img/dibujos/045.webp",
"a": "Conejita con tiara y ramo: Feliz 22, por más momentos juntos",
"g": "e"
},
{
"s": "assets/img/dibujos/046.webp",
"a": "Gato de esmoquin con una rosa preguntando: ¿Quieres ser mi novia?",
"g": "f"
},
{
"s": "assets/img/dibujos/047.webp",
"a": "Gato con un corazón de chocolate: Would you be my Valentine?",
"g": "f"
},
{
"s": "assets/img/dibujos/048.webp",
"a": "Gato con un ramo coronado: Para mi reina #22",
"g": "f"
},
{
"s": "assets/img/dibujos/049.webp",
"a": "Conejita con audífonos y traje celeste"
},
{
"s": "assets/img/dibujos/050.webp",
"a": "Conejita con moños mandando besos"
},
{
"s": "assets/img/dibujos/051.webp",
"a": "Conejita y gato elegantes bailando: Feliz 22",
"g": "e"
},
{
"s": "assets/img/dibujos/052.webp",
"a": "Gato abrazando a la conejita bajo un corazón en la noche"
},
{
"s": "assets/img/dibujos/053.webp",
"a": "Gato consolando a la conejita: Todo estará bien",
"g": "e"
},
{
"s": "assets/img/dibujos/054.webp",
"a": "Gato y conejita abrazados sobre un fondo de rosas"
},
{
"s": "assets/img/dibujos/055.webp",
"a": "Gato gris con un ramo morado de rosas"
}
];
