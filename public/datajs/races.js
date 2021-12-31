const races = {
    "dragonborn":{
        "description":"The dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids.",
        "subraces":{
            "standard-dragonborn":{
                "ability-score-increase:":" Your Strength score increases by 2, and your Charisma score increases by 1.",
                "age:":" Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                "alignment:":" Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
                "size:":" Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                "speed":" Your base walking speed is 30 ft.",
                "draconic-ancestry":{
                    "choice":["Black","Blue","Brass","Bronze","Copper","Gold","Green","Red","Silver","White"],
                    "description":" You are distantly related to a particular kind of dragon. Choose a type of dragon from the below list; this determines the damage and area of your breath weapon, and the type of resistance you gain."
                },
                "damage-resistance:":" You have resistance to the damage type associated with your ancestry.",
                "breath-weapon:":" You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest.",
                "languages:":" You can read, speak, and write Common and Draconic.",
            },
            "draconblood":{
                "ability-score-increase:":" Your Intelligence score increases by 2, and your Charisma score increases by 1.",
                "age:":" Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                "alignment:":" Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
                "size:":" Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                "speed":" Your base walking speed is 30 ft.",
                "draconic-ancestry":{
                    "choice":["Black","Blue","Brass","Bronze","Copper","Gold","Green","Red","Silver","White"],
                    "description":" You are distantly related to a particular kind of dragon. Choose a type of dragon from the below list; this determines the damage and area of your breath weapon, and the type of resistance you gain."
                },
                "darkvision:":" You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "forceful-presence:":" When you make a Intimidation or Persuasion check, you can do so with advantage once per long rest.",
                "breath-weapon:":" You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest.",
                "languages:":" You can read, speak, and write Common and Draconic.",
            },
            "ravenite":{
                "ability-score-increase:":" Your Strength score increases by 2, and your Constitution score increases by 1.",
                "age:":" Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                "alignment:":" Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
                "size:":" Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                "speed":" Your base walking speed is 30 ft.",
                "draconic-ancestry":{
                    "choice":["Black","Blue","Brass","Bronze","Copper","Gold","Green","Red","Silver","White"],
                    "description":" You are distantly related to a particular kind of dragon. Choose a type of dragon from the below list; this determines the damage and area of your breath weapon, and the type of resistance you gain."
                },
                "darkvision:":" You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "vengeful-assault:":" When you take damage from a creature in range of a weapon you are wielding, you can use your reaction to make an attack against that creature. You can do this once per short or long rest.",
                "breath-weapon:":" You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest.",
                "languages:":" You can read, speak, and write Common and Draconic.",
            },
            "chromatic-dragonborn":{
                "ability-score-increase:":{
                    "description":" Increase one ability score by 2 and increase a different one by 1, or you increase three different scores by 1.",
                    "choice":["Incr. 1 AB by 1 and 1 AB by 2","Incr. 3 AB by 1"],
                    "choice-result":{
                        "one":["unique",["Strength by 2","Dexterity by 2","Constitution by 2","Intelligence by 2","Widsom by 2","Charisma by 2"],["Strength by 1","Dexterity by 1","Constitution by 1","Intelligence by 1","Widsom by 1","Charisma by 1"]],
                        "two":["unique",["Strength by 1","Dexterity by 1","Constitution by 1","Intelligence by 1","Widsom by 1","Charisma by 1"],["Strength by 1","Dexterity by 1","Constitution by 1","Intelligence by 1","Widsom by 1","Charisma by 1"],["Strength by 1","Dexterity by 1","Constitution by 1","Intelligence by 1","Widsom by 1","Charisma by 1"]],
                    }
                },
                "age:":" Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                "alignment:":" Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
                "size:":" Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                "speed":" Your base walking speed is 30 ft.",
                "chromatic-ancestry:":{
                    "choice":["Black","Blue","Green","Red","White"],
                    "description":" You are distantly related to a particular kind of dragon. Choose a type of dragon from the below list; this determines the damage and area of your breath weapon, and the type of resistance you gain."
                },
                "breath-weapon:":" When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes 1d10 damage of the type associated with your Chromatic Ancestry. On a successful save, it takes half as much damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10). You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                "draconic-resistance:":" You have resistance to the damage type associated with your Chromatic Ancestry.",
                "chromatic-warding.:":" Starting at 5th level, as an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune to the damage type associated with your Chromatic Ancestry. Once you use this trait, you can’t do so again until you finish a long rest.",
                "languages:":{
                    "choice":["Abyssal","Aquan","Auran","Celestial","Common","Deep Speech","Draconic","Druidic","Dwarvish","Elvish","Giant","Gnomish","Goblin","Gnoll","Halfling","Ignan","Infernal","Orc","Primordial","Sylvan","Terran","Uncercommon"],
                    "description":" You can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character."
                }
            },
            "gem-dragonborn":{
                "age:":" Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                "alignment:":" Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
                "size:":" Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                "speed":" Your base walking speed is 30 ft.",

            },
            "metalic-dragonborn":{
                "age:":" Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                "alignment:":" Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
                "size:":" Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                "speed":" Your base walking speed is 30 ft.",

            }
        }
    },
    "dwarf":{
        "description":"Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.",
    },
    "elf":{
        "description":"Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry.",
        "subraces":{
            "standard-elf":{
                "ability-score-increase:":"Your Dexterity score increases by 2.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "languages:":" You can speak, read, and write Common and Elven."
            },
            "dark-elf":{
                "ability-score-increase:":"Your Charisma score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "superior-darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "languages:":" You can speak, read, and write Common and Elven.",
                "sunlight-sensitivity:":" You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of the attack, or whatever you are trying to perceive is in direct sunlight.",
                "drow-magic:":" You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell onceand regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
                "drow-weapon-training:":" You have proficiency with rapiers, shortswords, and hand crossbows."
            },
            "eladrin-mzztzzozzfzz":{
                
            },
            "eladrin-dzzmzzgzz":{
                "description":"Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over into the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.",
                "ability-score-increase:":" Your Intelligence score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "elf-weapon-training:":" You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                "fey-step:":" You can cast the Misty Step spell once using this trait. You regain the ability to do so when you finish a short or long rest.",
                "languages:":" You can speak, read, and write Common and Elven."
            },
            "high-elf":{
                "ability-score-increase:":" Your Intelligence score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "cantrip:":" You know one cantrip of your choice from the Wizard spell list. Intelligence is your spellcasting ability for it.",
                "elf-weapon-training:":" You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                "languages:":" You can speak, read, and write Common and Elven.",
                "extra-language:":{
                    "choice":["Abyssal","Aquan","Auran","Celestial","Common","Deep Speech","Draconic","Druidic","Dwarvish","Elvish","Giant","Gnomish","Goblin","Gnoll","Halfling","Ignan","Infernal","Orc","Primordial","Sylvan","Terran","Uncercommon"],
                    "description":" You can read, speak, and write one additional language of your choice."
                }
            },
            "sea-elf":{
                "description":"Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, the sea elves navigated the deepest currents and explored the waters across a hundred worlds. Today, they live in small, hidden communities in the ocean shallows and on the Elemental Plane of Water.",
                "ability-score-increase:":" Your Constitution score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "sea-elf-training:":" You have proficiency with the spear, trident, light crossbow, and net.",
                "child-of-the-sea:":" You have a swimming speed of 30 feet, and you can breathe air and water.",
                "friend-of-the-sea:":" Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.",
                "languages:":" You can speak, read, and write Aquan."
            },
            "wood-elf":{
                "ability-score-increase:":"Your Wisdom score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "elf-weapon-training:":" You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                "fleet-of-foot":" Your base walking speed increases to 35 ft.",
                "masks-of-the-wild":" You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
                "languages:":" You can speak, read, and write Common and Elven."
            },
            "shadar-kai":{
                "ability-score-increase:":"Your Constitution score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "necrotic-resistance:":" You have resistance to necrotic damage.",
                "blessing-of-the-raven-queen:":" As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
                "languages:":" You can speak, read, and write Common and Elven."
            },
            "pallid-elf":{
                "ability-score-increase:":"Your Wisdom score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "incisive-sense:":" You have advantage on Investigation and Insight checks.",
                "blessing-of-the-moonweaver:":" You know the Light cantrip. When you reach 3rd level, you can cast Sleep once, and it recharges after a long rest. When you reach 5th level, you can cast Invisibility (Self Only) once, and it recharges after a long rest. You do not need the material components required of the spells. Wisdom is your spellcasting ability for these spells.",
                "languages:":" You can speak, read, and write Common and Elven."
            },
            "mark-of-shadow-elf":{
                "ability-score-increase:":"Your Charisma score increases by 1.",
                "age:":" Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
                "alignment:":" Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
                "size:":" Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
                "speed:":" Your base walking speed is 30 feet.",
                "darkvision:":" Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                "fey-ancestry:":" You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                "trance:":" Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is 'trance.' While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
                "keen-senses:":" You have proficiency in the Perception skill.",
                "cunning-intuition:":" Whenever you roll a Dexterity (Stealth) check or a Charisma (Performance) check, roll a d4 and add the number rolled to the total ability check.",
                "shape-shadows:":" You know the Minor Illusion cantrip. Starting at 3rd level, you can also cast the Invisibility spell with this trait. Once you cast either spell with this trait, you can't cast that spell again until you finish a long rest. Charisma is your Spellcasting Ability for these spells.",
                "spells-of-the-mark:":" If you have the Spellcasting or Pact Magic class features, the spells on the Mark of Shadow Spells table are added to the spell list of your spellcasting class.",
                "languages:":" You can speak, read, and write Common and Elven."
            }
        }
    },
    "gnome":{
        "description":"A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
    },
    "half-elf":{
        "description":"Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.",
    },
    "half-orc":{
        "description":"When alliances between humans and orcs are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.",
    },
    "halfling":{
        "description":"The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. Halflings work readily with others, and they are loyal to their friends, whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.",
    },
    "human":{
        "description":"In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    },
    "tiefling":{
        "description":"To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus, overlord of the Nine Hells (and many of the other powerful devils serving under him) into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.",
    },
    "aarakocra":{

    },
    "aasimar":{

    },
    "fairy":{

    },
    "firbolg":{

    },
    "genasi":{

    },
    "gith":{

    },
    "goliath":{

    },
    "harengon":{

    },
    "kenku":{

    },
    "locathah":{
        
    },
    "tabaxi":{

    },
    "tortle":{

    },
    "triton":{

    },
    "verdan":{

    }
}