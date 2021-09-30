
let chaptersObj = {
     le_reveil: {
        subtitle:'Mario se lève',
        text:'Mario se lève et entend à la radio que la princess a été kidnapée',
        img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8be926cafaaa7c33e25333f17e34f6a629279e9e/assets/img/mario_se_leve.jpg",
        options: ["continuer"],
},
 la_princess:{
     subtitle:'Princess kidnapée',
     text:"La princess à été kidnapée, tu es le seul espoir qu'il reste",
     img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8be926cafaaa7c33e25333f17e34f6a629279e9e/assets/img/princess_kidnapee.png",
     options:["rien faire, la sauver"],

},

demande_laide:{
    subtitle:"Il demande de l'aide à son frère",
    text:"Mario ne peut pas réussir cette mission tout seul alors il demande de l'aide à son frère",
    img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/3822da082d15211dcb9096e6202caae1b28f3e4b/assets/img/4f9c330_posLbw6FNSTIZNjzB3FnY_ca.jpg",
    options:["Il n'accepte pas, il accepte"],
},
lac_rempli:{
    subtitle:'Lac rempli des piranhas',
    text:'Tu es arrivé dans un lac rempli des piranhas',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8d8ba2753719a1f024e73a475df16848b9dd5c16/assets/img/10759678.jpg',
    options:["Nager,ils prennent le bateau qui est à côté"],
},
les_sauve:{
    subtitle:'Tu as été sauvé',
    text:'Dragon vous a sauvé la vie ',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/3c8981f71b27b2271817a7eb3d08100942c0a06b/assets/img/film-super-mario-bros-sortie-2022-e1549100004926.jpg',
    options:[""],
},
la_foret:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/881c370b1479e92a3d132566321c1c147b5d31f9/assets/img/mario-bros.jpg',
    options: ["ils abandonnent,continuet à marcher"],
},
ils_trouevent_la_cachette:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/33b177e65d7529d972e8e604a97fccbf315a5d08/assets/img/the_super_mario_bros._super_show.jpg',
    options: [""],
},
avez_vous_les_cles:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/33b177e65d7529d972e8e604a97fccbf315a5d08/assets/img/67029641-dessin-d-or-en-forme-de-cl%C3%A9-coeur-illustration-vectorielle-eps-10.jpg',
    options:["non,oui"],
},
princess_sauve:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/640d618735559fca2c392704d1a0e14ef3f23424/assets/img/52069d36f025bf8f0400207857adbd41.jpg',
    options:[""],
},
};

function goToChapter(chapterName){
const chapitre = ("chapterName");
console.log(chapterName.subtitle);
console.log(chapterName.text);
};