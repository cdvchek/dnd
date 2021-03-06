const equipment = {
    "abacus":{
        "name":"Abacus",
        "type":"Adventuring Gear",
        "cost":2,
        "cost-type":"gp",
        "weight":2,
        "description":"A standard tool used to make calculations.",
        "tags":["Utility"]
    },
    "acid_vial":{
        "name":"Acid (vial)",
        "type":"Adventuring Gear",
        "cost":25,
        "cost-type":"gp",
        "weight":1,
        "description":"As an action, you can splash the contents of this vial onto a creatur within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.",
        "tags":["Damage","Utility","Combat"]
    },
    "airship":{
        "name":"Airship",
        "type":"Adventuring Gear",
        "cost":20000,
        "cost-type":"gp",
        "weight":"--",
        "description":"Flying characters can move from one place to another in a relatively straight line, ignoring terrain and monsters that can't fly or that lack ranged attacks.",
        "tags":["Movement","Utility","Exploration"]
    },
    "alchemists-fire_flask":{
        "name":"Alchemist's Fire (flask)",
        "type":"Adventuring Gear",
        "cost":50,
        "cost-type":"gp",
        "weight":1,
        "description":"This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
        "tags":["Damage","Utility","Combat","Consumable"]
    },
    "alchemists-supplies":{
        "name":"Alchemist's Supplies",
        "type":"Tool",
        "cost":50,
        "cost-type":"gp",
        "weight":8,
        "description":"These special tools include the items needed to pursue a craft or trade. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
        "tags":["Utility"]
    },
    "alexandrite":{
        "name":"Alexandrite",
        "type":"Gemstone",
        "cost":500,
        "cost-type":"gp",
        "weight":"--",
        "description":"A transparent dark green gemstone worth 500 gold pieces.",
        "tags":[]
    },
    "alms-box":{
        "name":"Alms Box",
        "type":"Adventuring Gear",
        "cost":"--",
        "cost-type":"--",
        "weight":"--",
        "description":"A small box for alms, typically found in a priest's pack.",
        "tags":["Utility"]
    },
    "amber":{
        "name":"Amber",
        "type":"Gemstone",
        "cost":100,
        "cost-type":"gp",
        "weight":"--",
        "description":"A transparent watery gold to rich gold gemstone worth 100 gold pieces.",
        "tags":[]
    },
    "amethyst":{
        "name":"Amethyst",
        "type":"Gemstone",
        "cost":100,
        "cost-type":"gp",
        "weight":"--",
        "description":"A transparent deep purple gemstone worth 100 gold pieces.",
        "tags":[]
    },
    "amulet":{
        "name":"Amulet",
        "type":"Holy Symbol",
        "cost":5,
        "cost-type":"gp",
        "weight":1,
        "description":"A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
        "tags":["Utility"]
    },
    "antimatter-rifle":{
        "name":"Antimatter Rifle",
        "type":"Firearms Ranged Weapon",
        "cost":"--",
        "cost-type":"gp",
        "weight":10,
        "description":"It's up to you to decide whether a character has proficiency a firearm. Characters in most D&D worlds wouldn't have such proficiency. During thier downtime, characters can use the traingin rules to acquire proficiency, assuming that they have enough ammunition to keep the weapons working while mastering their use.",
        "tags":["Damage", "Combat"],
        "damage":"6d8",
        "damage-type":"necrotic",
        "range-normal":120,
        "range-long":360,
        "properties":["Ammunition","Reload","Two-Handed"],
        "notes":"Reload (2 shots)"
    },
    "antitoxin":{
        "name":"Antitoxin",
        "type":"Adventuring Gear",
        "cost":50,
        "cost-type":"gp",
        "weight":"--",
        "description":"A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.",
        "tags":["Utility","Healing"]
    },
    "aquamarine":{
        "name":"Aquamarine",
        "type":"Gemstone",
        "cost":500,
        "cost-type":"gp",
        "weight":"--",
        "description":"A transparent pale blue-green gemstone worth 500 gold pieces.",
        "tags":[]
    },
    "arcane-focus":{
        "name":"Arcane Focus",
        "type":"Arcane Focus",
        "cost":"--",
        "cost-type":"--",
        "weight":"--",
        "description":"An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
        "tags":["Utility"]
    },
    "arrows":{
        "name":"Arrows",
        "type":"Ammunition",
        "cost":1,
        "cost-type":"gp",
        "weight":1,
        "description":"Arrows are used with a weapon that has the ammunition property to make a ranged attack. Each time you attack with the weapon, you expend on piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.",
        "tags":["Damage","Combat"]
    },
    "assassins-blood_ingested":{
        "name":"Assassin's Blood (Ingested)",
        "type":"Poison",
        "cost":150,
        "cost-type":"gp",
        "weight":"--",
        "description":"A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 (1d12) poison damage and is poisoned for 24 hours. On a successful save, the creature takes half damage and isn't poisoned.  INGESTED: A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save.",
        "tags":["Utility"]
    },
    "axe-beak":{
        "name":"Axe Beak",
        "type":"Mount",
        "cost":50,
        "cost-type":"gp",
        "weight":"--",
        "description":"An axe beak's splayed toes allow it to run across snow, and it can carry as much weight as a mule. A domesticated axe beak can be purchased in Ten-Towns for 50 gp. An animal pulling a carriage, cart, chariot, sled, or wagon can move weight up to five times its base carrying capacity, including the weight of the vehicle. If multiple animals pull the same vehicle, they can add their carrying capacity together.",
        "tags":["Utility","Movement","Exploration"]
    },
    "azurite":{
        "name":"Azurite",
        "type":"Gemstone",
        "cost":10,
        "cost-type":"gp",
        "weight":"--",
        "description":"A opaque mottle deep blue gemstone worth 10 gold pieces.",
        "tags":[]
    },
    "backpack":{
        "name":"Backpack",
        "type":"Adventuring Gear",
        "cost":2,
        "cost-type":"gp",
        "weight":5,
        "description":"A backpack is a leather pack carried on the back, typically with straps to secure it. A backpack can hold 1 cubic foot / 30 pounds of gear. You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.",
        "tags":["Container"]
    },
    "bad-news_exandria":{
        "name":"Bad News (Exandria)",
        "type":"Firearms Ranged Weapon",
        "cost":"--",
        "cost-type":"--",
        "weight":25,
        "description":"Firearms are a new and volatitle technology, and as such bring their own unique set of weapon properties. Some properties are followed by a number, and this number signifies an element of that property (outlined below). Firearms are ranged weapons.  RELOAD: The weapon can be fired a number of times equal to its Reload score before you must spend 1 attack or 1 action to reload. You must have on free hand to reload a firearm.  MISFIRE: Whenever you make an attack roll with a firearm, and the dice roll is equal or lower than the weapon's Misfire score, the weapon misfires. The attack missed, and the weapon cannot be used again until you spend an action to try and repair it. To repair your firearm, you must make a successful Tikner's Tools check (DC equal to 8 + misfire score). If you check fails, the weapons is broken and must be mended out of combat at a quarter of the cost of the firearm. Creatures who use a firearm without being proficient increase the weapon's misfire score by 1. EXPLOSIVE: Upon a hit, everyting within 5 ft of the target must make a Dexterity saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier) or suffer 1d8 fire damage. If the weapon missed, the ammunition fails to detonate, or bounces away harmlessly before doing so. AMMUNITION: All firearms require ammunition to make an attack, and due to their rare nature, ammunition may be near impossible to find or purchase. However, if materials are gathered, you can craft ammunition yourself using your Tinker's Tools at half the cost. Each firearm uses its own unique ammunition and is generally sold or crafted in batches.",
        "tags":["Damage", "Combat"],
        "damage":"2d12",
        "damage-type":"piercing",
        "range-normal":120,
        "range-long":360,
        "properties":["Ammunition","Reload","Two-Handed","Misfire"],
        "notes":"Reload (2 shots)"
    },
    "bad-news-bullets":{
        "name":"Bad News Bullets",
        "type":"Ammunition",
        "cost":10,
        "cost-type":"gp",
        "weight":"--",
        "description":"Firearms bullets are used with a weapon that has the reload property to make a ranged attack. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammuntion from a case, or other container is part of the attack (you need a free hand to load a one-handed weapon).",
        "tags":["Damage","Combat"]
    },
    "bagpipes":{
        "name":"Bagpipes",
        "type":"Tool",
        "cost":30,
        "cost-type":"gp",
        "weight":6,
        "description":"If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bar can use bagpipes as a spellcasting focus.",
        "tags":["Instrument"]
    },
    "ball-bearings_bag-of-1000":{
        "name":"Ball Bearings (Bag of 1000)",
        "type":"Adventuring Gear",
        "cost":1,
        "cost-type":"gp",
        "weight":2,
        "description":"As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the save.",
        "tags":["Control","Utility","Combat"]
    },
    "banded-agate":{
        "name":"Banded Agate",
        "type":"Gemstone",
        "cost":10,
        "cost-type":"gp",
        "weight":"--",
        "description":"A translucent striped brown, blue, white, or red gemstone worth 10 gold pieces.",
        "tags":[]
    },
    "barding":{
        "name":"Barding",
        "type":"Adventuring Gear",
        "cost":"--",
        "cost-type":"--",
        "weight":"--",
        "description":"Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weights twice as much.",
        "applicable-armor": {
            "padded":{
                "type":"light",
                "ac":"11+dex-modifier",
                "strength":"--",
                "stealth":"disadvantage"
            },
            "leather":{
                "type":"light",
                "ac":"11+dex-modifier",
                "strength":"--",
                "stealth":"--"
            },
            "studded-leather":{
                "type":"light",
                "ac":"12+dex-modifier",
                "strength":"--",
                "stealth":"--"
            },
            "hide":{
                "type":"medium",
                "ac":"12+dex-modifier (max 2)",
                "strength":"--",
                "stealth":"--"
            },
            "chain-shirt":{
                "type":"medium",
                "ac":"13+dex-modifier (max 2)",
                "strength":"--",
                "stealth":"--"
            },
            "scale-mail":{
                "type":"medium",
                "ac":"14+dex-modifier (max 2)",
                "strength":"--",
                "stealth":"disadvantage"
            },
            "breastplate":{
                "type":"medium",
                "ac":"14+dex-modifier (max 2)",
                "strength":"--",
                "stealth":"--"
            },
            "half-plate":{
                "type":"medium",
                "ac":"15+dex-modifier (max 2)",
                "strength":"--",
                "stealth":"disadvantage"
            },
            "rign-mail":{
                "type":"heavy",
                "ac":"14",
                "strength":"--",
                "stealth":"disadvantage"
            },
            "chain-mail":{
                "type":"heavy",
                "ac":"16",
                "strength":"13",
                "stealth":"disadvantage"
            },
            "splint":{
                "type":"heavy",
                "ac":"17",
                "strength":"15",
                "stealth":"disadvantage"
            },
            "plate":{
                "type":"heavy",
                "ac":"18",
                "strength":"15",
                "stealth":"disadvantage"
            }
        },
        "tags":["Warding"]
    },
    "barrel":{
        "name":"Barrel",
        "type":"Adventuring Gear",
        "cost":2,
        "cost-type":"gp",
        "weight":70,
        "description":"A barrel can hold 40 gallons of liquid, or 4 cubic feet of solid material.",
        "tags":["Container"]
    },
    "basket":{
        "name":"Basket",
        "type":"Adventuring Gear",
        "cost":4,
        "cost-type":"sp",
        "weight":2,
        "description":"A basket can hold 2 cubit feet/40 pounds of gear.",
        "tags":["Container"]
    },
    "battleaxe":{
        "name":"Battleaxe",
        "type":"Martial Melee Weapon",
        "cost":10,
        "cost-type":"gp",
        "weight":4,
        "description":"Proficiency with a battleaxe allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
        "damage":"1d8",
        "damage-type":"slashing",
        "properties":["Versatile(1d10)"],
        "tags":["Utility"]
    },
    "bedroll":{
        "name":"Bedroll",
        "type":"Adventuring Gear",
        "cost":1,
        "cost-type":"gp",
        "weight":7,
        "description":"You never know where you're going to sleep, and a bedroll helps you get better sleep in a hayloft or on the cold ground. A bedroll consists of bedding and a blanket thin enough to be rolled up and tied. In an emergency, it can doulbe as a stretcher.",
        "tags":["Utility"]
    }
}