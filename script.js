
const chaptersObj = {
     chapter1: {
        subtitle:'Le reveil',
        text:`Vous vous  levez et vouz entendez à la radio que la princess a été kidnapée`,
        img:"assets/img/Mario-35th-anniversary-Paper-Mario-remasters-scaled.jpg",
        options: [
             {
                text:"Continuer",
                action:'goToChapter(`la_princess`)',

            },
        ]
},
 la_princess:{
     subtitle:'Princess kidnapée',
     text:"La princess faissais sa sieste comme d'habitude. D'un coup quelqu'un est entré dans sa chambre et l'a kidnapée, Tu es le seul espoir qu'il reste!!!",
     img:"assets/img/princess_kidnapee.png",
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
    img:"assets/img/1611257680_super-mario-3d-world-bowsers-fury.jpg",
    options:[
        { 
            text:"Continuer",
            action:'goToChapter(`le_reveil`)',
        },
        ]
},
demande_laide:{
    subtitle:"Vous demandez de l'aide à votre frère",
    text:"Vouz ne pouvez pas réussir cette mission tout seul alors vous demandez de l'aide à votre frère. Travailler en équipe est toujours mieux",
    img:"assets/img/mario-bros.jpg",
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
    subtitle:"Vous et votre frère vous tombés dans un trou",
    text:"Vous et Luigi(votre frère) marchiez pour retour à la maison. Tout d'un coup vouz êtes tombés dans un trou",
    img:"assets/img/111-1118745_mario-and-luigi-download-transparent-png-image-transparent.png",
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`chapter1`)',
        },
    ]

},
lac_rempli:{
    subtitle:'Lac rempli des piranhas',
    text:'Vous acceptez de continuer cette mission. Lorque vous marchez, vous arrivez dans un lac rempli des piranhas vous avez trois options ',
    img:"assets/img/10759678.jpg",
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
    text:"Malgré que  le bateau a coulé, vous avez trouvez les clès pour pouvoir sauver la princess",
    img:"assets/img/67029641-dessin-d-or-en-forme-de-clé-coeur-illustration-vectorielle-eps-10.jpg",
    options:[
        {
        text:"Continuer",
        action:'goToChapter(`le_reveil`)',
        }
    ]
},
les_sauve:{
    subtitle:'Vous avez été sauvé',
    text:'Votre bon ami Dragon a vu que vous aviez des ennuis et est venu vous sauver',
    img:"assets/img/film-super-mario-bros-sortie-2022-e1549100004926.jpg",
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`la_foret`)',
        },
    ]
},
la_foret:{
    subtitle:'Vous êtes arrivés dans la forêt',
    text:"Vous avez réussi à échapper tous les difficultés jusqu'à maintenant. Il vous reste quelques étapes avant de finir:)",
    img:"assets/img/the_super_mario_bros._super_show.jpg",
    options: [
        {
          text:"Vous voulez abandonné la mission?",
          options:'goToChapter(`mangez_par`)',
        },
        {
            text:"Continuer à marcher",
            action:'goTochapter(`ils_trouvent_la_cachette`)',
        },
    ]
},
ils_trouevent_la_cachette:{
    subtitle:'Felicitations vous avez trouvé la cachette',
    text:'La cachette est juste devant vous, je vous felicite',
    img:"assets/img/162864-mario.jpg",
    options: [
        {
        text:"Continuer",
        action:'goToChapter(`avez_vous_les_cles`)',
        },
    ]
},
avez_vous_les_cles:{
    subtitle:'Les clès',
    text:'Pendant votre chemin est-ce que vous avez trouvé les clès? pour pouvoir ouvrir la porte',
    img:"assets/img/unnamed (1).jpg",
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
    subtitle:"L'ennemie arrive",
    text:"Pendant que vous cherchiez la clès, l'ennemie les a vus et vous a attaqué ",
    img:"assets/img/Bowser_SSBU.png",
    options:[
        {
            text:"Continuer",
            action:'goToChapter(`le_reveil`)',
        },
    ]
},
princess_sauve:{
    subtitle:'Vous avez réussi',
    text:'Felicitations vous avez sauvé la princess!!!!!!!!',
    img:"assets/img/52069d36f025bf8f0400207857adbd41.jpg",
    options:[
        {
            text:"Recommencer",
            action:'goToChapter(`le_reveil`)',
        },
    ]
},
};

function goToChapter(chapterName) { 
let titre = document.querySelector(".chapter");
let texte = document.querySelector(".txt");
let img = document.querySelector(".img");

titre.innerHTML =chaptersObj[chapterName].subtitle;
texte.innerHTML =chaptersObj[chapterName].text;
img.innerHTML =`<img src="${chaptersObj[chapterName].img}" alt="chapter_img" />`;
console.log(chaptersObj[chapterName].subtitle);
console.log(chaptersObj[chapterName].text);
}
