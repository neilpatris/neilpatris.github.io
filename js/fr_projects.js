//////////////////////////////////////////////////////////////////////////
// FIELDS
//////////////////////////////////////////////////////////////////////////

window.PRO_PROJECTS_FR = [
    {
        "id": "wild-west-panic",
        "title": "Wild West Panic",
        "engine": "Unity",
        "categories": [
            "Unity",
            "VR",
            "Jeu"
        ],
        "pitch": "Jeu de tir arcade en VR, sorti le 31 juillet 2026 sur Steam, Meta Quest et Pico.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "Février - Août 2026",
            "engine": "Unity",
            "platform": "Steam, Meta Quest, Pico"
        },
        "about_project": [
            "J'ai travaillé sur ce jeu chez Vigo Creative jusqu'à sa sortie, surtout sur les boss, l'UI de fin de niveau et l'intégration des plateformes."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Boss",
                    "text": "J'ai codé les boss de la mine, du fort et du camp indien. Ils partent tous d'une même classe de base, et chacun ajoute ses propres règles : celui de la mine lance des TNT qu'il faut détruire en l'air, celui du fort ne peut pas mourir tant que ses soldats sont en vie, et celui du camp indien a une armure à casser avant de pouvoir le toucher."
                },
                {
                    "title": "UI de fin de niveau",
                    "text": "Tous les panneaux de fin (Victory, Success, Defeat, Time Out) animés avec DOTween, à partir d'une classe de base commune. Le score défile chiffre par chiffre comme une machine à sous, puis les étoiles et le leaderboard du niveau s'affichent."
                },
                {
                    "title": "Achievements et leaderboards multi-plateforme",
                    "text": "Un manager pour les achievements et un pour les leaderboards, avec un provider par plateforme (Steam, Meta, Pico) derrière une même interface. Le jeu appelle toujours le manager, et la compilation ne garde que le SDK de la plateforme du build."
                },
                {
                    "title": "Conditions des achievements",
                    "text": "Chaque achievement est un ScriptableObject (titre, icônes, récompense). La plupart sont vérifiés par un seul manager en fin de niveau à partir des stats du joueur, comme la précision ou les tirs sur des alliés, et ceux propres à un niveau passent par une classe de base commune qui suit les ennemis du niveau."
                },
                {
                    "title": "Correction de bugs",
                    "text": "Correction de nombreux bugs avant la sortie, surtout sur les transitions entre les niveaux et sur les problèmes apparus quand on a passé le projet en SpaceWarp."
                }
            ]
        },
        "links": [
            {
                "text": "Site officiel",
                "url": "https://wild-west-panic.com/"
            },
            {
                "text": "Steam",
                "url": "https://store.steampowered.com/app/3165710/Wild_West_Panic/"
            },
            {
                "text": "Meta Quest",
                "url": "https://www.meta.com/experiences/wild-west-panic-early-access/24405775765762581/"
            }
        ],
        "images": [
            "img/wild-west-panic-1.jpg",
            "img/wild-west-panic-2.jpg",
            "img/wild-west-panic-3.jpg",
            "img/wild-west-panic-4.png",
            "img/wild-west-panic-5.webm"
        ],
        "videos": [
            "https://www.youtube.com/watch?v=k-2SbkEdvaQ"
        ]
    },
    {
        "id": "vrts",
        "title": "VRTS (VR Training Solution)",
        "engine": "Unity",
        "categories": [
            "Unity",
            "VR",
            "Serious Game"
        ],
        "pitch": "Simulateur VR d'entraînement au tir et à l'intervention en milieu clos.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "Fin 2025 - Début 2026",
            "engine": "Unity",
            "platform": "Pico"
        },
        "about_project": [
            "J'ai travaillé sur ce simulateur chez Vigo Creative. Il sert à entraîner des professionnels de la sécurité et tourne sur casque Pico en mode LBE (grand espace), sur une zone de 7 m x 7 m à 14 m x 14 m. Les joueurs utilisent des répliques d'airsoft suivies par des trackers Pico."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Tracking des armes",
                    "text": "J'ai utilisé le SDK Pico Motion Tracker pour récupérer la position et la rotation du tracker fixé sur la réplique. Chaque modèle d'arme a un point qui correspond à l'emplacement du tracker, et l'arme virtuelle est recalée avec ce décalage pour se superposer à la vraie."
                },
                {
                    "title": "ID des trackers",
                    "text": "Chaque tracker garde le même identifiant d'une session à l'autre grâce à son numéro de série sauvegardé dans les PlayerPrefs."
                },
                {
                    "title": "Répliques connectées",
                    "text": "Les répliques fonctionnaient déjà avec un ESP32. Je les ai fait passer en Wi-Fi 6 en changeant l'ESP32-C3 pour un ESP32-C6 et en adaptant le code C++. J'ai aussi soudé et assemblé l'alimentation par batterie de l'ESP32 et sa connexion aux armes, dans un boîtier imprimé en 3D."
                },
                {
                    "title": "Unit Test",
                    "text": "Des scènes séparées pour valider chaque partie seule avant de l'intégrer au simulateur. J'ai aussi fait un prototype qui enregistrait les mouvements de l'arme pour entraîner un modèle PyTorch à détecter les tirs, mis de côté par manque de précision."
                },
                {
                    "title": "Enregistrement vidéo",
                    "text": "J'ai mis en place l'enregistrement vidéo avec FFmpeg pour que l'instructeur puisse revoir l'exercice du point de vue de chaque joueur."
                }
            ]
        },
        "links": [],
        "images": [
            "img/vrts-1.png",
            "img/vrts-2.png"
        ],
        "videos": [
            "https://www.youtube.com/watch?v=unNndTb78N4"
        ]
    },
    {
        "id": "engie",
        "title": "Engie, formation industrielle VR",
        "engine": "Unity",
        "categories": [
            "Unity",
            "VR",
            "Serious Game"
        ],
        "pitch": "Formation VR sur Pico aux procédures de la centrale de Tihange.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "2025 - 2026",
            "engine": "Unity",
            "platform": "Pico"
        },
        "about_project": [
            "J'ai fait la majorité de la programmation de cette formation chez Vigo Creative. Pendant une session, un formateur suit les consignes sur papier et l'apprenant fait la procédure dans le casque."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Vannes interactives",
                    "text": "Toutes les vannes héritent d'une même classe d'objet interactif avec une ouverture entre 0 et 1. Les vannes multi-tours tournent en continu et déplacent leur tige, les vannes quart de tour basculent entre ouvert et fermé, et certaines peuvent être consignées."
                },
                {
                    "title": "Procédures",
                    "text": "Chaque niveau a sa propre classe qui vérifie les étapes de la procédure dans l'ordre et affiche le résultat de chaque étape sur un panneau. L'écran de fin indique quels niveaux sont réussis."
                },
                {
                    "title": "Incidents",
                    "text": "Une mauvaise manipulation déclenche un incident : fuite d'eau ou de carburant, surchauffe d'un moteur si l'étanchéité n'est pas faite, fumée ou incendie du groupe électrogène. Chaque effet est retrouvé automatiquement à partir de l'identifiant de sa vanne."
                },
                {
                    "title": "Outil éditeur",
                    "text": "Un tableau Odin Inspector liste tous les objets interactifs par niveau avec leur état, leur ouverture et leur consignation, et applique l'état de départ à toute la scène."
                },
                {
                    "title": "Feedback visuels et sonores",
                    "text": "Surbrillance des objets visés avec Highlight Plus, sons des vannes, voyants du panneau de contrôle et moteurs qui vibrent avec DOTween quand ils tournent."
                }
            ]
        },
        "links": [],
        "images": [
            "img/engie-1.png",
            "img/engie-2.png",
            "img/engie-3.png"
        ],
        "videos": []
    },
    {
        "id": "engie-warehouse",
        "title": "Engie Warehouse",
        "engine": "Unity",
        "categories": [
            "Unity",
            "VR",
            "Serious Game"
        ],
        "pitch": "Formation VR multijoueur à la sécurité dans un entrepôt.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "2025 - 2026",
            "engine": "Unity",
            "platform": "Meta Quest, Pico"
        },
        "about_project": [
            "J'ai repris ce projet chez Vigo Creative quand il était presque fini, pour le terminer et corriger les retours d'Engie après une première formation. Les apprenants sont en casque VR et le formateur, sur Steam Deck, se déplace dans le niveau et peut lancer un feu. Les autres incidents se déclenchent automatiquement.",
            "J'ai perfectionné le multijoueur en VR avec Netcode for GameObjects sur ce projet."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Incendie synchronisé",
                    "text": "J'ai refait le système de feu : une coroutine fait passer l'incendie par plusieurs phases, de la fumée jusqu'au feu hors de contrôle. Le serveur lance la séquence et la synchronise chez tous les joueurs avec des ClientRpc, et le formateur peut la lancer ou l'arrêter depuis son interface."
                },
                {
                    "title": "Joueur PC",
                    "text": "J'ai ajouté un joueur au clavier (ZQSD) et à la souris pour qu'une personne qui supporte mal le casque puisse suivre la formation avec les autres. Il a son propre rig, est synchronisé comme un joueur VR et sélectionne les risques avec un raycast depuis la caméra."
                },
                {
                    "title": "Fin de partie par joueur",
                    "text": "Chaque joueur reçoit son propre message de fin selon l'état du feu, partagé par une NetworkVariable, et selon sa présence dans la zone de sécurité, détectée par un trigger."
                },
                {
                    "title": "Feedback de sélection",
                    "text": "Un cercle de progression se remplit quand on vise un risque, avec la manette VR ou la souris, pour montrer le temps restant avant la validation."
                }
            ]
        },
        "links": [
            {
                "text": "Vidéo LinkedIn",
                "url": "https://www.linkedin.com/posts/vigo-creative_xrconnect-safetydays-formationsecuritaez-activity-7478125635639631872-nknn"
            }
        ],
        "images": [
            "img/engie-warehouse-1.png"
        ],
        "videos": [
            "https://www.youtube.com/watch?v=unNndTb78N4"
        ]
    }
];

window.PROJECTS_FR = [
    {
        "id": "tower-defense",
        "title": "Tower Defense en C++",
        "engine": "Unreal Engine",
        "categories": [
            "Unreal Engine",
            "Academic Project"
        ],
        "pitch": "Tower defense : défendre son château contre des vagues d'ennemis en plaçant des tourelles.",
        "project_info": {
            "team_size": "Solo",
            "date": "Janvier 2025",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "Projet d'école réalisé seul en une semaine. Le but était d'apprendre le C++ dans Unreal Engine."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Tourelles en C++",
                    "text": "Classe Actor en C++ avec un Blueprint enfant par tourelle. Le type (simple, explosive…) définit les dégâts, la portée et le mesh. Quand une cible entre dans la sphère de collision, la tourelle s'oriente vers elle et tire selon un cooldown."
                },
                {
                    "title": "IA ennemie",
                    "text": "Déplacement par pathfinding sur un chemin défini. Certains ennemis prennent des raccourcis grâce à des NavModifierVolume, et chaque type a sa propre vitesse et résistance."
                },
                {
                    "title": "Vagues",
                    "text": "Système de vagues d'ennemis dont la difficulté augmente progressivement."
                },
                {
                    "title": "Contrôles et interface",
                    "text": "Caméra top-down en ZQSD, placement des tourelles en point & click, barres de vie des ennemis et menu d'achat lié aux ressources du joueur."
                }
            ]
        },
        "assets_resources": {
            "Environment": [
                {
                    "text": "KayKit Medieval Hexagon Pack",
                    "link": "https://kaylousberg.itch.io/kaykit-medieval-hexagon"
                },
                {
                    "text": "Low Poly Pack Forest",
                    "link": "https://jaks.itch.io/lowpolyforestpack"
                }
            ],
            "Towers": [
                {
                    "text": "Lindou Tower Defense Pack",
                    "link": "https://lindou.itch.io/tower-defens"
                }
            ]
        },
        "links": [
            {
                "text": "Game Build",
                "url": "https://coloneil.itch.io/tower-defense-c"
            }
        ],
        "images": [
            "img/tower-defense-1.png",
            "img/tower-defense-2.png"
        ],
        "videos": []
    },
    {
        "id": "sled-the-hill",
        "title": "Sled the Hill",
        "engine": "Unreal Engine",
        "categories": [
            "Unreal Engine",
            "Academic Project"
        ],
        "pitch": "Endless runner en luge, joué avec une manette faite maison : une luge en carton avec deux cordes reliées à un joystick.",
        "project_info": {
            "team_size": "1 prog · 3 artistes",
            "date": "Avril 2024",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "Projet d'école de 4 jours sur Unreal Engine. Le but était de créer une manette alternative et un jeu adapté à cette manette. J'étais le seul programmeur de l'équipe, les autres s'occupaient des graphismes et de la construction de la manette."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Piste infinie",
                    "text": "Système de blocs de piste réutilisables. Quand le joueur dépasse un bloc, il est déplacé à l'avant de la piste. Aucun bloc n'est créé ni détruit pendant la partie, ce qui garde les performances stables."
                },
                {
                    "title": "Génération des obstacles",
                    "text": "Placement aléatoire des obstacles sur chaque bloc quand il est replacé, avec un nombre d'obstacles qui augmente selon la distance parcourue."
                },
                {
                    "title": "Vitesse progressive",
                    "text": "La vitesse de la luge augmente avec la distance pour rendre la partie de plus en plus difficile."
                },
                {
                    "title": "Interface",
                    "text": "Compteur de distance en temps réel, réutilisé comme score final pour le classement."
                }
            ]
        },
        "assets_resources": {
            "Animations": [
                {
                    "text": "Le Rigging du personnage et l'animation du personnage viennent de Mixamo"
                }
            ]
        },
        "links": [
            {
                "text": "Game Build",
                "url": "https://coloneil.itch.io/arcade-sledding-game"
            }
        ],
        "images": [
            "img/sled-the-hill-1.png",
            "img/sled-the-hill-2.png"
        ],
        "videos": [
            "https://www.youtube.com/watch?v=RSnl94IKGC4",
            "https://youtube.com/shorts/rtisT-_VF3U"
        ]
    },
    {
        "id": "platformer-2d",
        "title": "2D Platformer",
        "engine": "Unity",
        "categories": [
            "Unity",
            "Academic Project"
        ],
        "pitch": "Plateformer 2D inspiré de Super Mario Bros et Super Meat Boy, centré sur le wall jump.",
        "project_info": {
            "team_size": "Solo",
            "date": "Janvier 2024",
            "engine": "Unity",
            "platform": "PC"
        },
        "about_project": [
            "Projet d'école réalisé seul en 12 jours sur Unity, avec une contrainte : ne pas utiliser le moteur physique d'Unity. C'était aussi mon premier vrai projet sur Unity."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Collisions par Raycasts",
                    "text": "Détection du sol et des murs avec des Raycasts autour du personnage. Le script modifie directement sa position au lieu d'utiliser des forces."
                },
                {
                    "title": "Wall jump",
                    "text": "Des Raycasts latéraux détectent le mur et autorisent un saut supplémentaire, avec la gestion du reset du saut et de la direction."
                },
                {
                    "title": "Architecture du contrôleur",
                    "text": "Script central CharacterController2D qui sépare les entrées, le mouvement, les collisions, les animations et la vie. Une nouvelle mécanique s'ajoute sans toucher au contrôleur principal."
                },
                {
                    "title": "Checkpoints",
                    "text": "Positions sauvegardées avec PlayerPrefs pour garder la progression entre les scènes. Un checkpoint ne peut pas être activé plusieurs fois."
                }
            ]
        },
        "assets_resources": {
            "Personnage": [
                {
                    "text": "Ethan the Hero",
                    "link": "https://assetstore.unity.com/packages/2d/characters/ethan-the-hero-237992"
                }
            ],
            "Environnement": [
                {
                    "text": "2D Pixel Art Platformer Biome - Plains",
                    "link": "https://assetstore.unity.com/packages/2d/environments/2d-pixel-art-platformer-biome-plains-255002"
                }
            ]
        },
        "links": [
            {
                "text": "Game Build",
                "url": "https://coloneil.itch.io/2d-platformer"
            }
        ],
        "images": [
            "img/platformer-2d-1.png"
        ],
        "videos": [
            "https://www.youtube.com/watch?v=VQ_ed4mqN3g"
        ]
    },
    {
        "id": "deathrun",
        "title": "3D Platformer DeathRun",
        "engine": "Unreal Engine 5",
        "categories": [
            "Unreal Engine",
            "Academic Project"
        ],
        "pitch": "Jeu de plateforme 3D : atteindre la fin du niveau en évitant les pièges, sans se faire écraser par la boule géante qui vous poursuit.",
        "project_info": {
            "team_size": "Solo",
            "date": "Décembre 2023",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "Projet d'école réalisé seul en une semaine. C'était mon premier projet sur Unreal Engine, pour mettre en pratique les premiers cours. Le jeu s'inspire de Crash Bandicoot et de Fall Guys."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Personnage",
                    "text": "BP_Character avec une State Machine pour gérer les animations et leurs transitions. Contrôles avec un Input Mapping Context et caméra à la troisième personne."
                },
                {
                    "title": "Pièges",
                    "text": "Pièges animés avec des Timelines et des Box Collisions. Les plateformes mobiles et la boule géante suivent des points de passage avec le composant InterpToMovement."
                },
                {
                    "title": "Mécaniques de terrain",
                    "text": "Tapis roulant avec un Actor Offset et un matériau dynamique, zone de glace avec une friction à 0, trampolines et caisses destructibles qui ralentissent le joueur."
                },
                {
                    "title": "Interface et son",
                    "text": "Menu principal, pause, écran de fin et barre de vie. Des sons se déclenchent quand un piège touche le joueur."
                }
            ]
        },
        "assets_resources": {
            "Animations": [
                {
                    "text": "Le Rigging du personnage et l'animation du personnage viennent de Mixamo"
                }
            ],
            "Environnement_assets": [
                {
                    "text": "J'ai utilisé le « Ultimate Platformer Pack » de Quaternius",
                    "link": "https://quaternius.itch.io/ultimate-platformer-pack"
                }
            ]
        },
        "links": [
            {
                "text": "Game Build",
                "url": "https://coloneil.itch.io/3d-platformer-deathrun"
            }
        ],
        "images": [
            "img/deathrun-1.png"
        ],
        "videos": [
            "https://www.youtube.com/watch?v=LatNLAlD0_I"
        ]
    },
    {
        "id": "only-balls",
        "title": "Only Balls",
        "engine": "Unreal Engine",
        "categories": [
            "Unreal Engine",
            "Game Jam"
        ],
        "pitch": "Un poisson coincé dans un bocal qui roule : le joueur contrôle l'inertie du bocal pour avancer.",
        "project_info": {
            "team_size": "1 prog · 4 artistes",
            "date": "Janvier 2025",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "Nous avons créé ce jeu pendant la Global Game Jam 2025, sur le thème « Bubble ». J'étais le seul programmeur de l'équipe."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Contrôle du bocal",
                    "text": "BP_Pawn (et pas BP_Character) basé sur la physique. Le bocal roule, le joueur contrôle son inertie et peut sauter."
                },
                {
                    "title": "Réglage des sensations",
                    "text": "Ajustement de la physique et des contrôles à partir des retours des playtests faits sur place pendant la jam."
                },
                {
                    "title": "Poisson et eau",
                    "text": "Rotation du bocal sur lui-même pendant que le poisson et l'eau restent droits à l'intérieur."
                }
            ]
        },
        "assets_resources": {
            "Contrôleur": [
                {
                    "text": "Modèle du poisson en 3D créé et animé par une artiste de l'équipe"
                }
            ],
            "Environnement": [
                {
                    "text": "Tous les assets ont été créés par l'équipe artistique pendant la jam"
                }
            ]
        },
        "links": [
            {
                "text": "Game Jam Page",
                "url": "https://globalgamejam.org/games/2025/only-balls-8"
            }
        ],
        "images": [
            "img/only-balls-1.png"
        ],
        "videos": []
    },
    {
        "id": "space-cleaners",
        "title": "Space Cleaners",
        "engine": "Unreal Engine",
        "categories": [
            "Unreal Engine",
            "Game Jam"
        ],
        "pitch": "Jeu coop local : deux joueurs reliés par une corde doivent réparer une station spatiale. L'un fabrique les outils, l'autre répare dehors en apesanteur.",
        "project_info": {
            "team_size": "2 progs · 4 artistes",
            "date": "Janvier 2024",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "Nous avons créé ce jeu pendant la Global Game Jam 2024, sur le thème « Make Me Laugh ». Il n'était pas terminé à la fin de la jam, alors j'ai continué seul pendant 5 jours, avec l'accord de l'équipe, pour le présenter aux portes ouvertes de l'école."
        ],
        "development": {
            "Ce que j'ai fait": [
                {
                    "title": "Interactions de la station",
                    "text": "Stock infini, poubelle, table de craft et sas pour envoyer les objets au joueur qui est dans l'espace."
                },
                {
                    "title": "Multijoueur local",
                    "text": "Placement des deux joueurs au spawn avec le GameMode, et contrôles séparés pour un joueur avec gravité et un joueur en apesanteur."
                },
                {
                    "title": "Réparations",
                    "text": "Événements de réparation déclenchés avec des timers, à régler avant la fin du temps."
                }
            ]
        },
        "assets_resources": {
            "Personnages": [
                {
                    "text": "Modèles d'astronautes créés par les artistes de l'équipe"
                }
            ],
            "Animations": [
                {
                    "text": "Le Rigging du personnage et l'animation du personnage viennent de Mixamo"
                }
            ],
            "Environnement": [
                {
                    "text": "Les actifs de la station spatiale créés pendant le brouillage"
                }
            ]
        },
        "links": [
            {
                "text": "Game Build",
                "url": "https://coloneil.itch.io/space-cleaners"
            },
            {
                "text": "Game Jam Page",
                "url": "https://globalgamejam.org/games/2024/space-cleaner-7"
            }
        ],
        "images": [
            "img/space-cleaners-1.png",
            "img/space-cleaners-3.png",
            "img/space-cleaners-2.png"
        ],
        "videos": []
    }
];
