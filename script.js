
const chaptersObj = {
     chapter1: {
        subtitle:'le reveil',
        text:`Mario se lève et entend à la radio que la princess a été kidnapée`,
        img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8be926cafaaa7c33e25333f17e34f6a629279e9e/assets/img/mario_se_leve.jpg",
        options: [
             {
                text:"Continuer",
                action:'goToChapter(`la_princess`)',

            },
        ]
},
 la_princess:{
     subtitle:'Princess kidnapée',
     text:"La princess faissais sa sieste comme d'habitude. D'un coup quelqu'un est entré dans sa chambre et l'a kidnapée, tu es le seul espoir qu'il reste!!!",
     img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8be926cafaaa7c33e25333f17e34f6a629279e9e/assets/img/princess_kidnapee.png",
     options: [
         {
             text:"Rien faire",
             action:'goToChapter(`mangez_par`)',
         },
         {
             text:"Sauver la princess",
             action:'goToChapter(`demande_laide`)',
         },
        ]

},
mangez_par:{
    subtitle:"Vous avez été mangé par un animal sauvage",
    text:"",
    img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/a62d42ba6e1eaaebaedf7369b9c00ed8fb2fbe5d/assets/img/Bowser_SSBU.png",
    options:[
        { 
            text:"Continuer",
            action:'goToChapter(`le_reveil`)',
        },
        ]
},
demande_laide:{
    subtitle:"Il demande de l'aide à son frère",
    text:"Mario ne peut pas réussir cette mission tout seul alors il demande de l'aide à son frère",
    img:"https://github.com/MariaLaura26/Vous-etes-le-heros/blob/3822da082d15211dcb9096e6202caae1b28f3e4b/assets/img/4f9c330_posLbw6FNSTIZNjzB3FnY_ca.jpg",
    options:[
        {
            text:"Il accepte",
            action:'goToChapter(`lac_rempli`)',

        },
            {
                text:"il n'accepte pas",
                action:'goToChapter(`ils_tombent_dans_un_trou`)',
            },
    ]
},
ils_tombent_dans_un_trou:{
    subtitle:"Vouz avez tombé dans un trou",
    text:"",
    img:"",
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`chapter1`)',
        },
    ]

},
lac_rempli:{
    subtitle:'Lac rempli des piranhas',
    text:'Tu es arrivé dans un lac rempli des piranhas',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/8d8ba2753719a1f024e73a475df16848b9dd5c16/assets/img/10759678.jpg',
    options:[
        {
            text:"nager",
            action:'goToChapter(`mangez_par`)',
        },
        {
            text:"sauter",
            action:'goToChapter(`les_sauve`)',
        },
        {
            text:"prendre le bateau qui est à côté",
            action:'goToChapter(`les_cles`)',
        },
    ]
},
les_cles:{
    subtitle:"Vouz avez trouvé les clès",
    text:"",
    img:"",
    options:[
        {
        text:"Continuer",
        action:'goToChapter(`le_reveil`)',
        }
    ]
},
les_sauve:{
    subtitle:'Tu as été sauvé',
    text:'Dragon vous a sauvé la vie ',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/3c8981f71b27b2271817a7eb3d08100942c0a06b/assets/img/film-super-mario-bros-sortie-2022-e1549100004926.jpg',
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`la_foret`)',
        },
    ]
},
la_foret:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/881c370b1479e92a3d132566321c1c147b5d31f9/assets/img/mario-bros.jpg',
    options: [
        {
          text:"Vous voulez abandonné la mission?",
          options:'goToChapter(`morts_par_balle`)',
        },
        {
            text:"Continuer à marcher",
            action:'goTochapter(`ils_trouvent_la_cachette`)',
        },
    ]
},
morts_par_ball:{
    subtitle:"",
    text:"",
    img:"",
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`le_reveil`)',
        },
    ]
},
ils_trouevent_la_cachette:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/33b177e65d7529d972e8e604a97fccbf315a5d08/assets/img/the_super_mario_bros._super_show.jpg',
    options: [
        {
        text:"Continuer",
        action:'goToChapter(`avez_vous_les_cles`)',
        },
    ]
},
avez_vous_les_cles:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/33b177e65d7529d972e8e604a97fccbf315a5d08/assets/img/67029641-dessin-d-or-en-forme-de-cl%C3%A9-coeur-illustration-vectorielle-eps-10.jpg',
    options:[
{
    text:"Oui",
    action:'goToChapter(`princess_sauve`)',
},
{
    text:"Non",
    action:'goToChapter(`morts_par_lennemie`)',
},
    ]
},
morts_par_lennemie:{
    subtitle:"",
    text:"",
    img:"",
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`le_reveil`)',
        },
    ]
},
princess_sauve:{
    subtitle:'',
    text:'',
    img:'https://github.com/MariaLaura26/Vous-etes-le-heros/blob/640d618735559fca2c392704d1a0e14ef3f23424/assets/img/52069d36f025bf8f0400207857adbd41.jpg',
    options:[
        {
            text:"Recommencer",
            action:'goToChapter(`le_reveil`)',
        },
    ]
},
};

function goToChapter(chapterName) { 
console.log(chaptersObj[chapterName].subtitle);
console.log(chaptersObj[chapterName].text);
}