$(function(){
	//gestion de la hauteur du bandeau :
	var pageVisitees = []
    afficheNewPage('Présentation ICN',function(){
		$('#bandeau').css('height',$('#blocPage').outerHeight(true))
	})
	$('a').css('color', 'blue')
    //je gère ici le survol des liens du menu navigation
    $('#bandeau>nav>ul>li').css('padding-bottom', '1px')
    $('li>a').on ('mouseover', function(){
        $(this).css('border', '2px rgb(0,100,150) dotted')
        $(this).css('border-radius', '5px')
        $(this).css('box-shadow', '3px 3px 2px rgb(100,100,100)')
        $(this).css('color', 'rgb(0,100,200)')
        $(this).css('font-weight', 'bold')
    })
    $('li>a').on ('mouseleave', function(){
        $(this).css('border', '')
        if(pageVisitees.indexOf($(this).text()) == -1){
            //la page n'a pas encore été visitée
            $(this).css('color', 'blue')
            $(this).css('box-shadow', '')
        } else {
            $(this).css('color', 'rgb(180,180,180)')
            $(this).css('box-shadow', '3px 3px 2px rgb(100,100,100)')
        }
        $(this).css('font-weight', 'normal')
    })

    var contenuInit = $('#blocPage').html()
    $('li>a').on('click', function(){
        var titrePage = $(this).text()
        afficheNewPage(titrePage,function(){
			$('#bandeau').css('height',$('#blocPage').outerHeight(true))
        })

    })
    function afficheNewPage(titre,callback){
        var newContent
        if(pageVisitees.indexOf(titre)==-1)pageVisitees.push(titre)
        switch(titre){
            case 'Site Internet':
                newContent = '<h2>Réaliser un site internet et comprendre les enjeux de la publication d\'information</h2>'
                newContent += '<p>Le projet consiste en la réalisation d\'un site web publiant des documents et informations non encore disponibles en ligne. Par exemple, la description d\'un patrimoine local, les données de relevés météorologiques locaux, les résultats d\'une expérience de chimie, etc.<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme système d\'exploitation, gestionnaire de fichier protocole, internet, documents hypertextes, langages de structuration de document, principe de l\'indexation de documents (métadonnées, référencement), droit(s) et licence, données publiques et données privées.<br/>'
                newContent += 'Les outils utilisés peuvent être : un éditeur de texte, un navigateur, un système de gestion de contenu web ou un logiciel de retouche d\'images.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> quel degré de confiance accorder aux informations diffusées sur le web ?</li>'
                    newContent += '<li> comment évaluer la pertinence des informations retrouvées sur le web ?</li>'
                newContent += '</ul>'
            break
            case 'Réaliser un jeu':
                newContent = '<h2>Réaliser un jeu et comprendre les capacités de l\'informatique à instrumenter l\'activité de loisir</h2>'
                newContent += '<p>Il s\'agit de réaliser un jeu. Par exemple, un jeu éducatif pour réviser une notion en physique, biologie, histoire, etc.<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme système d\'exploitation, gestionnaire de fichier, algorithmique et programmation, numérisation des images, les bases de la création vidéo-ludique.<br/>'
                newContent += 'Les outils utilisés peuvent être : un logiciel de retouche d\'image, un éditeur de texte, une bibliothèque pour la création de jeux dans un langage de programmation.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> jeux vidéos : univers illusoires ou nouveaux espaces réels ?</li>'
                    newContent += '<li> jeux sérieux : peut-on apprendre en jouant ?</li>'
                    newContent += '<li> quel poids économique du jeu vidéo dans l\'industrie du divertissement ?</li>'
                    newContent += '<li> en quoi les jeux vidéo peuvent-ils constituer un support pour la création artistique ?</li>'
                newContent += '</ul>'
            break
            case 'Programmer un robot':
                newContent = '<h2> Programmer un robot et comprendre le rôle de la robotique dans les activités humaines</h2>'
                newContent += '<p>Le projet consiste en la programmation d\'un robot afin de lui faire réaliser une tâche complexe.<br/>'
                newContent += 'Par exemple : programmer un robot suiveur de ligne , ou un robot capable de sortir d\'un labyrinthe, ou faire réaliser une chorégraphie avec un ou plusieurs robots.<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme système d\'exploitation, gestionnaire de fichier, architecture d\'un système microprogrammé, algorithmique et programmation, composants d\'un robot.<br/>'
                newContent += 'Les outils utilisés peuvent être un robot, un environnement de programmation graphique spécifique au robot utilisé ou environnement de programmation spécifique à un langage haut niveau.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> quels peuvent être les rôles des robots au sein de la société, de la famille ?</li>'
                    newContent += '<li> les robots représentent-ils une menace pour les humains ?</li>'
                    newContent += '<li> quels places et rôles des robots dans les métiers de la santé ?</li>'
                newContent += '</ul>'
                newContent += '<p class="exemple">Exemple du robot rurple :</p>'
                newContent += '<p><img src="images/exemple_rurple.PNG" alt="Robot Rurple"></p>'
                newContent += '<p class="exemple">Robot de la NASA :</p>'
                newContent += '<p><a href="https://www.flickr.com/photos/nasahqphoto/18097410404/" target="_blank"><img src="images/18097410404_63bb2d24fe_z.jpg" alt="Robot NASA"></a></p>'
            break
            case 'Traitement de la langue':
                newContent = '<h2>Développer un programme de traitement de la langue et comprendre l\'apport de l\'informatique dans les avancées du traitement des corpus textuels</h2>'
                newContent += '<p>Le projet consiste à réaliser un programme qui relève, compte et classe les occurrences d\'un mot dans un texte.<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme système d\'exploitation, gestionnaire de fichier, codages des caractères d\'un texte, algorithmique et programmation.<br/>'
                newContent += 'Les outils utilisés peuvent être un éditeur de texte, un environnement de programmation.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> en quoi l\'informatique nous permet-elle de mieux comprendre la langue et les textes littéraires ?</li>'
                newContent += '</ul>'
            break
            case 'Œuvre d\'art optique':
                newContent = '<h2>Créer une &oelig;uvre d\'art optique ou op art et comprendre les enjeux du traitement et de la transformation de l\'image</h2>'
                newContent += '<p>Le projet consiste en la réalisation d\'une image produisant une illusion d\'optique ou la modification des œuvres existantes.<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme système d\'exploitation, gestionnaire de fichier, codage des couleurs, de codage des images, algorithmique et programmation, transformations affines, droit(s) d\'auteur et licences de partage.<br/>'
                newContent += 'Les outils utilisés peuvent être un éditeur d\'images, un environnement de programmation dédié à la programmation graphique.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> une image numérique représente-t-elle la réalité ?</li>'
                    newContent += '<li> en quoi l\'image numérique modifie-t-elle notre vision du monde ?</li>'
                    newContent += '<li> jusqu\'à quel point parvient-on à percevoir qu\'une image est transformée ?</li>'
                    newContent += '<li> en quoi et dans quels domaines le traitement de l\'image peut-il être utile ? (Médecine, agriculture, géographie, reconnaissance faciale ou d\'écriture, analyse et authentification de tableaux, etc.)</li>'
                newContent += '</ul>'
                newContent += '<p class="exemple">Exemples</p>'
                newContent += '<div>'
                    newContent += '<div><canvas id="image_masque" width="500" height="257"></canvas><section class="sectioncolonne"><p>Avec un masque (en déplaçant la souris sur l\'image noire).</p> </section></div>'
                    newContent += '<div><canvas id="image_masque2" width="500" height="257"></canvas><section class="sectioncolonne"><p>Floutage d\'une image (en cliquant sur une zone de l\'image, puis en déplaçant la souris).</p> </section></div>'
                newContent += '</div>'
            break
            case 'Base de données':
                newContent = '<h2>Développer une base de données et comprendre les enjeux de l\'exploitation de grandes quantités de données</h2>'
                newContent += '<p>Il s\'agit de réaliser une base de données, et éventuellement de développer une interface web de consultation.<br/>'
                newContent += 'Par exemple, une base recensant des données sur les performances sportives des élèves de la classe, ou une base recensant des données sur les auteurs étudiés en littérature en classe de seconde.<br/>'
                newContent += 'Une progression d\'activités permet d\'aborder des notions comme système d\'exploitation, gestionnaire de fichier, programmation, langages de description et d\'interrogation d\'une base de données, programmation web, droit à la protection des données, droit à l\'oubli.<br/>'
                newContent += 'Les outils utilisés peuvent être un système de gestion de bases de données, un éditeur et navigateur.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> qui détient les droits de propriété sur les informations présentes sur le Web ?</li>'
                    newContent += '<li> comment protéger mes données personnelles sur internet ?</li>'
                newContent += '</ul>'
            break
            case 'Objet connecté':
                newContent = '<h2>Réaliser un objet connecté et comprendre l\'enjeu de la protection de mes données personnelles</h2>'
                newContent += '<p>Il s\'agit de créer un objet connecté permettant de mettre à disposition, via une liaison sans fil ou un serveur Web embarqué, les données issues de capteurs (température, géolocalisation, etc.).<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme architecture d\'un système microprogrammé, algorithmique et programmation, réseau, systèmes embarqués, capteurs, liaisons sans fil.<br/>'
                newContent += 'Les outils utilisés peuvent être une carte de développement à bas coût, un environnement de programmation spécifique au matériel utilisé.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> la confidentialité des données personnelles est-elle remise en cause par la multiplication des objets connectés de la vie quotidienne ?'
                    newContent += '<li> quelles avancées les objets connectés peuvent-ils permettre dans le domaine de l\'aide à la personne et du suivi médical ?</li>'
                newContent += '</ul>'
            break
            case 'Œuvre cinétique':
                newContent = '<h2>Créer une œuvre cinétique et comprendre l\'apport de l\'informatique dans l\'art contemporain</h2>'
                newContent += '<p>Il s\'agit de créer une sculpture en mouvement.<br/>'
                newContent += 'Une progression d\'activités doit permettre d\'aborder des notions comme architecture d\'un système microprogrammé, algorithmique et programmation, capteurs, actionneurs.<br/>'
                newContent += 'Les outils utilisés peuvent être une carte de développement à bas coût, un environnement de programmation spécifique au matériel utilisé.</p>'
                newContent += '<p>Questionnements possibles :</p>'
                newContent += '<ul class="liste_module">'
                    newContent += '<li> L\'aléatoire en informatique peut-il être une source d\'inspiration pour les artistes ?</li>'
                    newContent += '<li> En quoi le numérique offre-t-il un nouveau potentiel d\'expression artistique ?</li>'
                    newContent += '<li> Quels sont les apports de la culture scientifique, en physique, en géométrie, etc., dans les pratiques artistiques'
                newContent += '</ul>'
                newContent += '<p>Ce type de projet pourrait être développé dans un autre domaine, en physique par exemple, avec la réalisation d\'un mobile reproduisant le mouvement des planètes.</p>'
            break
			case 'Organisation année 2016-2017':
				newContent = '<h2>Organisation de l\'année 2016-2017</h2>'
				newContent += '<p>L\'année s\'articule en 4 blocs : <ul class="liste_module">'
				newContent += '<li class="listePrincipale">Participation aux concours Castor-informatique - Algorea</li>'
				newContent += '<p class="paragraphe">Après deux entrainements, les élèves ont passé le coucours Castor-informatique (<a href="http://castor-informatique.fr" target=\'_blank\'>Concours Castor</a>).</br> Ce concours, ouvert à tous les niveaux, vise à faire découvrir aux élèves l\'informatique et les sciences du numérique.</p>'
				newContent += '<section class=\'blocTexte\'><p>À l\'issue de cette épreuve, les élèves les plus méritants sont inscrits au concours <a href=\'http://www.algorea.org/\' target=\'_blank\'>Algoréa</a>, concours orienté sur la programmation.</br> Trois langages sont utilisables cette année : Blockly, Scratch ou Python.</br> Voici un exemple de ce qui peut être demandé sur Blockly :</p></section>'
				newContent += '<aside class=\'imageDroite\'><a href=\'images/algorea.PNG\'><img src="images/algoreaDiapo.PNG" alt=\'Algorea Blockly\' title=\'Algorea Blockly\'></a></aside>'
				newContent += '<li class="listePrincipale">Programmation par blocs - Blockly</li>'
				newContent += '<p class=\'paragraphe\'>Blockly est un langage de programmation visuel, il s\'inspire du projet App Inventor développé par Google.</br> Site de développement du langage : <a href=\'http://developers.google.com/blockly/\' target=\'_blank\'>http://developers.google.com/blockly/</a></br> On se sert d\'une interface Web intégrant une forme plus ou moins complète :'
				newContent += '<ul class="sous_liste"><li> <a href=\'http://raffinat.perso.univ-pau.fr/blockly/sophus/\' target=\'_blank\'>http://raffinat.perso.univ-pau.fr/blockly/sophus/</a></li><li> <a href=\'http://irem.univ-reunion.fr/spip.php?rubrique173\' target=\'_blank\'>http://irem.univ-reunion.fr/spip.php?rubrique173</a></li><li> On peut aussi intégrer le programme dans une interface locale</li></ul></p>'
				newContent += '<section class=\'blocTexte\'><p>Nous avons, par exemple, réalisé la table de multiplication par 5 :</p></section>'
				newContent += '<aside class=\'imageDroite\'><a href=\'images/blocklyTable5.PNG\'><img src=\'images/blocklyTable5Diapo.PNG\' alt=\'Blockly - Table 5\' title=\'Blockly - Table 5\'></a></aside>'
				newContent += '<li class="listePrincipale">Création d\'applications sur Androïd</li>'
				newContent += '<p class=\'paragraphe\'>On se connecte à l\'application <a href=\'http://ai2.appinventor.mit.edu\' target=\'_blank\'>AppInventor</a> à l\'aide d\'un compte Google.</br> Elle nous donne des outils accessibles aux élèves permettant de créer des applications pour le système d\'exploitation Androïd.</br> Une interface graphique permet de déposer et d\'organiser des éléments et une interface de développement par blocs permet de programmer des actions.</br> Un émulateur disponible à l\'adresse <a href=\'https://sourceforge.net/projects/ai2u/\' target=\'_blank\'>https://sourceforge.net/projects/ai2u/</a> permet de tester ses applications sans téléphone.</p>'
				newContent += '<div><a href=\'images/AppInventor.PNG\'><img src="images/AppInventorDiapo.PNG" alt=\'AppInventor\' title=\'AppInventor\'></a><a href=\'images/Emulateur.PNG\'><img src="images/EmulateurDiapo.PNG" alt=\'Emulateur\' title=\'Emulateur\'></a></div></p>'
				newContent += '<li class="listePrincipale">Développement d\'un site Web</li>'
                newContent += '<div><p class=\'paragraphe\'>Création d\'un jeu.</br>La seule contrainte était de créer un chronomètre à intégrer dans le jeu :</p><img src="images/ChronoInit.PNG" alt=\'Chronomètre\' title=\'Initialisation\'><img src="images/ChronoActif.PNG" alt=\'Chronomètre Actif\' title=\'Activé\'></div>'
				newContent += '<p>Mise en forme au format HTML5/CSS3 du travail sur les licences libres réalisé au cours de la programmation sur AppInventor.</br>L\'objectif est d\'initier les élèves à la conception d\'une page Web "à la main" avec l\'organisation en fichiers disjoints (le contenu et la mise en forme).</br>Un groupe plus avancé dans le traval précédent a pu s\'initier au langage javascript : programmation intégrée dans une page Web.</p>'
			break
            case 'Organisation année 2017-2018':
                newContent = '<h2>Organisation de l\'année 2017-2018</h2>'
                newContent += '<p>L\'année s\'articule en 5 blocs :'
                newContent += '<ul class="liste_module">'
                newContent += '<li class="listePrincipale">Travail sous Scratch - Prolongement du travail fait au collège</li>'
                newContent += '<p class="paragraphe">Les élèves ont conçu un programme permettant de construire des polygones réguliers puis un cercle (création de blocs).</br>Le travail s\'est terminé par la création de camemberts.</p>'
                newContent += '<div class="divCentree"><img src="images/camembert1.PNG" alt="Scratch - camembert1" title="10 parts"><img src="images/camembert2.PNG" alt="Scratch - camembert2" title="20 parts"></div>'
                newContent += '<li class="listePrincipale">Participation aux concours Castor-informatique - Algorea</li>'
                newContent += '<p class="paragraphe">Après deux entrainements, les élèves ont passé le coucours Castor-informatique (<a href="http://castor-informatique.fr" target="_blank">Concours Castor</a>).</br>Ce concours, ouvert à tous les niveaux, vise à faire découvrir aux élèves l\'informatique et les sciences du numérique.</p>'
                newContent += '<section class="blocTexte"><p>À l\'issue de cette épreuve, les élèves ont pu se confronter à <a href="http://www.algorea.org/" target="_blank">Algoréa</a>, concours orienté sur la programmation.</br>Trois langages sont utilisables cette année : Blockly, Scratch ou Python.</br>Voici un exemple de ce qui peut être demandé sur Blockly :</p></section>'
                newContent += '<aside class="imageDroite"><a href="images/algorea.PNG"><img src="images/algoreaDiapo.PNG" alt="Algorea Blockly" title="Algorea Blockly"></a></aside>'
                newContent += '<section class="blocTexte"><p>Suivant la réussite au concours Castor, Algoréa propose un niveau adapté aux élèves.</p></section>'
                newContent += '<li class="listePrincipale">Travaux sous Python</li>'
                newContent += '<p>Découverte du langage fonctionnel propre à ce langage (utilisé en mathématiques).</br>Application dans l\'utilisation de <a hrep="http://dichotomies.fr/2011/infomath/guides/python/installation-rurple/?fichier=rurple.msi">Rurple</a>. </br>Création de programmes impliquant les boucles pour déplacer le robot suivant un parcours défini : </br></p>'
                newContent += '<div class="divCentree"><img src="images/escalier.PNG" alt="Rurple - escalier" title="escalier"><img src="images/spirale.PNG" alt="Rurple - spirale" title="spirale"></div>'
                newContent += '<li class="listePrincipale">Développement d\'un site Web</li>'
                newContent += '<p>Mise en forme au format HTML5/CSS3 d\'un travail de recherche sur des métiers du numérique, les licences Creative Commons et sur différents formats d\'images numériques.</p>'
                newContent += '<li class="listePrincipale">Création d\'applications sur Androïd</li>'
                newContent += '<p class="paragraphe">On se connecte à l\'application <a href="http://ai2.appinventor.mit.edu" target="_blank">AppInventor</a> à l\'aide d\'un compte Google.</br>Elle nous donne des outils accessibles aux élèves permettant de créer des applications pour le système d\'exploitation Androïd.</br>Une interface graphique permet de déposer et d\'organiser des éléments et une interface de développement par blocs permet de programmer des actions.</br>Un émulateur disponible à l\'adresse <a href="https://sourceforge.net/projects/ai2u/" target="_blank">https://sourceforge.net/projects/ai2u/</a> permet de tester ses applications sans téléphone.</p></p>'
            break
            default:
                //Présentation ICN
                newContent = contenuInit
            break
        }
		$('#blocPage').html(newContent)

        if(titre == 'Œuvre d\'art optique'){
            $('#blocPage').after('<script src="javascripts/traitementImage.js" id="scriptTraitementImage"></script>')
        } else {
            $('#scriptTraitementImage').remove()
        }
		callback()
    }
})
