//////////////////////////////////////////////////////////////////////////
// FIELDS
//////////////////////////////////////////////////////////////////////////

window.PRO_PROJECTS_EN = [
    {
        "id": "wild-west-panic",
        "title": "Wild West Panic",
        "engine": "Unity",
        "categories": [
            "Unity",
            "VR",
            "Game"
        ],
        "pitch": "Arcade VR shooter, released on July 31, 2026 on Steam, Meta Quest and Pico.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "February - August 2026",
            "engine": "Unity",
            "platform": "Steam, Meta Quest, Pico"
        },
        "about_project": [
            "I worked on this game at Vigo Creative until its release, mostly on the bosses, the end-of-level UI and the platform integration."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Bosses",
                    "text": "I coded the mine, fort and Indian camp bosses. They all start from the same base class, and each one adds its own rules: the mine boss throws TNT that you have to destroy in the air, the fort boss can't die while his soldiers are alive, and the Indian camp boss has armor to break before you can hit him."
                },
                {
                    "title": "End-of-level UI",
                    "text": "All the end panels (Victory, Success, Defeat, Time Out) animated with DOTween, from a common base class. The score rolls digit by digit like a slot machine, then the stars and the level leaderboard appear."
                },
                {
                    "title": "Cross-platform achievements and leaderboards",
                    "text": "One manager for achievements and one for leaderboards, with a provider for each platform (Steam, Meta, Pico) behind the same interface. The game always calls the manager, and the build only compiles the SDK of its platform."
                },
                {
                    "title": "Achievement conditions",
                    "text": "Each achievement is a ScriptableObject (title, icons, reward). Most of them are checked by a single manager at the end of the level from the player's stats, like accuracy or shots on allies, and the level-specific ones use a common base class that follows the level's enemies."
                },
                {
                    "title": "Bug fixing",
                    "text": "Fixed many bugs before the release, mostly on level transitions and on issues that came up when we moved the project to SpaceWarp."
                }
            ]
        },
        "links": [
            {
                "text": "Official website",
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
        "pitch": "VR simulator to train shooting and intervention in closed spaces.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "Late 2025 - Early 2026",
            "engine": "Unity",
            "platform": "Pico"
        },
        "about_project": [
            "I worked on this simulator at Vigo Creative. It is used to train security professionals and runs on Pico headsets in LBE mode (large space), on an area from 7 m x 7 m up to 14 m x 14 m. Players use airsoft replicas tracked by Pico trackers."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Weapon tracking",
                    "text": "I used the Pico Motion Tracker SDK to get the position and rotation of the tracker attached to the replica. Each weapon model has a point that matches the tracker's location, and the virtual weapon is offset from it to line up with the real one."
                },
                {
                    "title": "Tracker IDs",
                    "text": "Each tracker keeps the same ID between sessions thanks to its serial number saved in PlayerPrefs."
                },
                {
                    "title": "Connected replicas",
                    "text": "The replicas already worked with an ESP32. I moved them to Wi-Fi 6 by switching from the ESP32-C3 to an ESP32-C6 and adapting the C++ code. I also soldered and assembled the ESP32's battery power and its connection to the weapons, in a 3D-printed case."
                },
                {
                    "title": "Unit Test",
                    "text": "Separate scenes to test each part on its own before adding it to the simulator. I also made a prototype that recorded the weapon movements to train a PyTorch model to detect shots, set aside because it wasn't accurate enough."
                },
                {
                    "title": "Video recording",
                    "text": "I set up video recording with FFmpeg so the instructor can watch the exercise again from each player's point of view."
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
        "title": "Engie, industrial VR training",
        "engine": "Unity",
        "categories": [
            "Unity",
            "VR",
            "Serious Game"
        ],
        "pitch": "VR training on Pico for the procedures of the Tihange power plant.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "2025 - 2026",
            "engine": "Unity",
            "platform": "Pico"
        },
        "about_project": [
            "I did most of the programming of this training at Vigo Creative. During a session, a trainer follows the instructions on paper while the trainee does the procedure in the headset."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Interactive valves",
                    "text": "All valves inherit from the same interactable class with an opening value between 0 and 1. Multi-turn valves turn continuously and move their stem, quarter-turn valves switch between open and closed, and some can be locked out."
                },
                {
                    "title": "Procedures",
                    "text": "Each level has its own class that checks the steps of the procedure in order and shows the result of each step on a panel. The end screen shows which levels were passed."
                },
                {
                    "title": "Incidents",
                    "text": "A wrong action triggers an incident: water or fuel leak, engine overheating if the sealing is not done, smoke or a fire on the generator. Each effect is found automatically from the ID of its valve."
                },
                {
                    "title": "Editor tool",
                    "text": "An Odin Inspector table lists all interactable objects per level with their state, opening and lockout, and applies the starting state to the whole scene."
                },
                {
                    "title": "Visual and sound feedback",
                    "text": "Highlight on aimed objects with Highlight Plus, valve sounds, control panel lights and engines that shake with DOTween when they run."
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
        "pitch": "Multiplayer VR safety training in a warehouse.",
        "project_info": {
            "team_size": "Vigo Creative",
            "date": "2025 - 2026",
            "engine": "Unity",
            "platform": "Meta Quest, Pico"
        },
        "about_project": [
            "I took over this project at Vigo Creative when it was almost finished, to complete it and fix Engie's feedback after a first training session. Trainees wear VR headsets and the trainer, on a Steam Deck, moves around the level and can start a fire. The other incidents trigger automatically.",
            "This is the project where I improved my multiplayer VR skills with Netcode for GameObjects."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Synced fire",
                    "text": "I remade the fire system: a coroutine takes the fire through several phases, from smoke to an out-of-control fire. The server starts the sequence and syncs it to all players with ClientRpcs, and the trainer can start or stop it from his interface."
                },
                {
                    "title": "PC player",
                    "text": "I added a keyboard (WASD) and mouse player so that someone who doesn't handle the headset well can follow the training with the others. He has his own rig, is synced like a VR player and selects hazards with a raycast from the camera."
                },
                {
                    "title": "Per-player ending",
                    "text": "Each player gets his own end message based on the fire state, shared with a NetworkVariable, and on whether he is in the safe zone, detected with a trigger."
                },
                {
                    "title": "Selection feedback",
                    "text": "A progress circle fills up when you aim at a hazard, with the VR controller or the mouse, to show the time left before it is validated."
                }
            ]
        },
        "links": [
            {
                "text": "LinkedIn video",
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

window.PROJECTS_EN = [
    {
        "id": "tower-defense",
        "title": "Tower Defense in C++",
        "engine": "Unreal Engine",
        "categories": [
            "Unreal Engine",
            "Academic Project"
        ],
        "pitch": "Tower defense: protect your castle from waves of enemies by placing turrets.",
        "project_info": {
            "team_size": "Solo",
            "date": "January 2025",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "School project made solo in one week. The goal was to learn C++ in Unreal Engine."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Turrets in C++",
                    "text": "C++ Actor class with a child Blueprint for each turret. The type (simple, explosive…) sets the damage, range and mesh. When a target enters the collision sphere, the turret turns to it and shoots with a cooldown."
                },
                {
                    "title": "Enemy AI",
                    "text": "Movement with pathfinding on a set path. Some enemies take shortcuts with NavModifierVolumes, and each type has its own speed and resistance."
                },
                {
                    "title": "Waves",
                    "text": "Enemy wave system with a difficulty that goes up over time."
                },
                {
                    "title": "Controls and UI",
                    "text": "Top-down camera with WASD, point & click turret placement, enemy health bars and a shop menu linked to the player's resources."
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
        "pitch": "Sled endless runner, played with a homemade controller: a cardboard sled with two ropes tied to a joystick.",
        "project_info": {
            "team_size": "1 prog · 3 artists",
            "date": "April 2024",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "4-day school project in Unreal Engine. The goal was to build an alternative controller and a game for it. I was the only programmer in the team, the others worked on the art and on building the controller."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Endless track",
                    "text": "System of reusable track blocks. When the player passes a block, it is moved to the front of the track. No block is created or destroyed during the run, so the performance stays stable."
                },
                {
                    "title": "Obstacle generation",
                    "text": "Obstacles are placed randomly on each block when it is moved, and their number goes up with the distance."
                },
                {
                    "title": "Progressive speed",
                    "text": "The sled speed goes up with the distance to make the run harder and harder."
                },
                {
                    "title": "UI",
                    "text": "Live distance counter, also used as the final score for the leaderboard."
                }
            ]
        },
        "assets_resources": {
            "Animations": [
                {
                    "text": "The character rigging and animation are from Mixamo"
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
        "pitch": "2D platformer inspired by Super Mario Bros and Super Meat Boy, built around the wall jump.",
        "project_info": {
            "team_size": "Solo",
            "date": "January 2024",
            "engine": "Unity",
            "platform": "PC"
        },
        "about_project": [
            "School project made solo in 12 days in Unity, with one rule: no Unity physics engine. It was also my first real Unity project."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Raycast collisions",
                    "text": "Ground and wall detection with Raycasts around the character. The script moves its position directly instead of using forces."
                },
                {
                    "title": "Wall jump",
                    "text": "Side Raycasts detect the wall and allow one more jump, with handling of the jump reset and the direction."
                },
                {
                    "title": "Controller architecture",
                    "text": "Main CharacterController2D script that splits input, movement, collisions, animations and health. A new mechanic can be added without changing the main controller."
                },
                {
                    "title": "Checkpoints",
                    "text": "Positions saved with PlayerPrefs to keep the progress between scenes. A checkpoint can't be triggered more than once."
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
        "pitch": "3D platformer: reach the end of the level while avoiding traps, without getting crushed by the giant ball chasing you.",
        "project_info": {
            "team_size": "Solo",
            "date": "December 2023",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "School project made solo in one week. It was my first Unreal Engine project, to practice the first lessons. The game is inspired by Crash Bandicoot and Fall Guys."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Character",
                    "text": "BP_Character with a State Machine for the animations and their transitions. Controls with an Input Mapping Context and a third-person camera."
                },
                {
                    "title": "Traps",
                    "text": "Traps animated with Timelines and Box Collisions. Moving platforms and the giant ball follow waypoints with the InterpToMovement component."
                },
                {
                    "title": "Ground mechanics",
                    "text": "Conveyor belt with an Actor Offset and a dynamic material, ice area with 0 friction, trampolines and breakable crates that slow the player down."
                },
                {
                    "title": "UI and sound",
                    "text": "Main menu, pause, end screen and health bar. Sounds play when a trap hits the player."
                }
            ]
        },
        "assets_resources": {
            "Animations": [
                {
                    "text": "The character rigging and animation are from Mixamo"
                }
            ],
            "Environnement_assets": [
                {
                    "text": "I used the « Ultimate Platformer Pack » by Quaternius",
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
        "pitch": "A fish stuck in a rolling fishbowl: the player controls the inertia of the bowl to move forward.",
        "project_info": {
            "team_size": "1 prog · 4 artists",
            "date": "January 2025",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "We made this game during the Global Game Jam 2025, on the theme \"Bubble\". I was the only programmer in the team."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Fishbowl controls",
                    "text": "Physics-based BP_Pawn (not a BP_Character). The bowl rolls, the player controls its inertia and can jump."
                },
                {
                    "title": "Game feel tuning",
                    "text": "Tuning of the physics and controls based on feedback from playtests on site during the jam."
                },
                {
                    "title": "Fish and water",
                    "text": "The bowl spins while the fish and the water stay upright inside."
                }
            ]
        },
        "assets_resources": {
            "Contrôleur": [
                {
                    "text": "3D model of the fish created and animated by one of the team's artists"
                }
            ],
            "Environnement": [
                {
                    "text": "All the assets were created by the artistic team during the jam."
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
        "pitch": "Local co-op game: two players tied by a rope have to repair a space station. One crafts the tools, the other repairs outside in zero gravity.",
        "project_info": {
            "team_size": "2 progs · 4 artists",
            "date": "January 2024",
            "engine": "UE5",
            "platform": "PC"
        },
        "about_project": [
            "We made this game during the Global Game Jam 2024, on the theme \"Make Me Laugh\". It wasn't finished at the end of the jam, so I kept working on it alone for 5 days, with the team's agreement, to show it at the school open day."
        ],
        "development": {
            "What I did": [
                {
                    "title": "Station interactions",
                    "text": "Infinite stock, trash, crafting table and airlock to send items to the player in space."
                },
                {
                    "title": "Local multiplayer",
                    "text": "Spawning the two players with the GameMode, and separate controls for one player with gravity and one in zero gravity."
                },
                {
                    "title": "Repairs",
                    "text": "Repair events triggered with timers, to fix before the time runs out."
                }
            ]
        },
        "assets_resources": {
            "Personnages": [
                {
                    "text": "Models of astronauts created by the team's artists"
                }
            ],
            "Animations": [
                {
                    "text": "The character rigging and animation are from Mixamo"
                }
            ],
            "Environnement": [
                {
                    "text": "Space station assets created during jamming"
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
