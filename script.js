
let chaptersObj = {
     le_reveil: {
        subtitle:'Mario se lève',
        text:'Mario se lève et entend à la radio que la princess a été kidnapée',
        img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8be926cafaaa7c33e25333f17e34f6a629279e9e/assets/img/mario_se_leve.jpg",
        options:["continuer"],
},
 la_princess:{
     subtitle:'Princess kidnapée',
     text:"La princess à été kidnapée par l'ennemie Vous voulez faire quoi?",
     img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8be926cafaaa7c33e25333f17e34f6a629279e9e/assets/img/princess_kidnapee.png",
     options:["rien faire, la sauver"],

},
rien_faire:{
    subtitle:'Mangé par une bête sauvage',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/d80359ded36a6d0e45c477bd40645c9a49cf7569/assets/img/1611257680_super-mario-3d-world-bowsers-fury.jpg',
    options:["début du jeu"],

},
demande_laide:{
    subtitle:"Il demande de l'aide à son frère",
    text:"Mario ne peut pas reussir cette mision tout seul alors il demande de l'aide à son frère",
    img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/3822da082d15211dcb9096e6202caae1b28f3e4b/assets/img/4f9c330_posLbw6FNSTIZNjzB3FnY_ca.jpg",
    options:["Il n'accepte pas, il accepte"],
},
lac_rempli:{
    subtitle:'Lac rempli des piranhas',
    text:'Vous êtes arrivé dans un lac rempli des piranhas',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8d8ba2753719a1f024e73a475df16848b9dd5c16/assets/img/10759678.jpg',
    options:["Nager,ils prennent le bateau qui est à côté"],
},
le_bateau_coule:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/c7fe2f3f2569df3c0f6b20b142fc22d96dd10476/assets/img/istockphoto-1257129389-170667a.jpg',
    options:[""],
},
na_ger:{
subtitle:'',
text:'',
img:'',
options:['']
},
les_sauve:{
    subtitle:'',
    text:'',
    img:'',
    options:[""],
},
la_foret:{
    subtitle:'',
    text:'',
    img:'',
    options: [""],
},
ils_trouevent_la_cachette:{
    subtitle:'',
    text:'',
    img:'',
    options: [""],
},
avez_vous_les_cles:{
    subtitle:'',
    text:'',
    img:'',
    options:[""],
},
princess_sauve:{
    subtitle:'',
    text:'',
    img:'',
    options:[""],
},
};

function gotochapter(chapterName){
const chapitre = chapterName;
console.log(chapitre.subtitle);
console.log(chapitre.text);
}