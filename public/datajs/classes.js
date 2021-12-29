const classes = {
    "artificer":{
        "equipment":[
            ["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"],
            ["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"],
            "Light Crossbow",
            {"name":"bolts","amount":20},
            ["Studded Leather Armor","Scale Mail"],
            "Thieves' Tools",
            "Dungeon Pack"
        ],
    },
    "barbarian":{
        "equipment":[
            ["Greataxe",["Any Martial Weapon",["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]]],
            [{"name":"Handaxes","amount":2},["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            "Explorer's Pack",
            {"name":"Javelins","amount":4}
        ]
    },
    "bard":{
        "equipment":[
            ["Rapier","Longsword",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Diplomat's Pack","Entertainer's Pack"],
            ["Bagpipes","Drum","Dulcimer","Flute","Lute","Lyre","Horn","Pan Flute","Shawm","Viol","Hurdy-Gurdy","Sackbut","Whistle-Stick","Harp","Tambourine","Erhu","Hulusi","Udu","Maracas","Gong/Wargong"]
        ]
    },
    "blood-hunter":{
        "equipment":[
            [["A martial weapon",["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]],["Two simple weapons",[]]],
            ["Light Crossbow","Hand Crossbow"],
            {"name":"bolts","amount":20},
            ["Studded Leather Armor","Scale Mail Armor"],
            "Explorer's Pack"
        ]
    },
    "cleric":{
        "equipment":[
            ["Mace","Warhammer (if proficient)"],
            ["Scale Mail","Leather Armor","Chain Mail (if proficient)"],
            ["Light Crossbow and 20 bolts",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Priest's Pack","Explorer's Pack"],
            "Shield",
            "Holy Symbol"
        ]
    },
    "druid":{
        "equipment":[
            ["Wooden Shield",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Scimitar",["Any simple melee weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear"]]],
            "Leather Armor",
            "Explorer's Pack",
            "Druidic Focus"
        ]
    },
    "fighter":{
        "equipment":[
            ["Chain Mail","Leather Armor, Longbow, and 20 arrows"],
            [["A martial weapon and a shield",["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]],["Two martial weapons",["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"],["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]]],
            ["Light Crossbow and 20 bolts","Two Handaxes"],
            ["Dungeoneer's Pack","Explorer's Pack"]
        ]
    },
    "monk":{
        "equipment":[
            ["Shortsword",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Dungeoneer's Pack","Explorer's Pack"],
            "10 darts"
        ]
    },
    "paladin":{
        "equipment":[
            [["A martial weapon and a shield",["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]],["Two martial weapons",["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"],["Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip"]]],
            ["5 Javelins",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Priest's Pack","Explorer's Pack"],
            "Chain Mail",
            "Holy Symbol"
        ]
    },
    "ranger":{
        "equipment":[
            ["Scale Mail","Leather Armor"],
            [{"name":"shortswords","amount":2},["2 Simple Melee Weapons",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear"],["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear"]]],
            ["Dungeoneer's Pack","Explorer's Pack"],
            "Longbow",
            "Quiver",
            {"name":"arrows","amount":20}
        ],
    },
    "rogue":{
        "equipment":[
            ["Rapier","Shortsword"],
            ["Shortbow and a quiver of 20 arrows","Shortsword"],
            ["Burglar's Pack","Dungeoneer's Pack","Explorer's Pack"],
            "Leather Armor",
            "2 Daggers",
            "Thieves' Tools"
        ]
    },
    "sorcerer":{
        "equipment":[
            ["Light crossbow and 20 bolts",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Component Pouch","Arcane Focus"],
            ["Dungeoneer's Pack","Explorer's Pack"],
            "2 Daggers"
        ]
    },
    "warlock":{
        "equipment":[
            ["Light crossbow and 20 bolts",["Any simple weapon",["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"]]],
            ["Component Pouch","Arcane Focus"],
            ["Scholar's Pack","Dungeoneer's Pack"],
            "Leather Armor",
            ["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Light Crossbow","Dart","Shortbow","Sling"],
            "2 Daggers"
        ]
    },
    "wizard":{
        "equipment":[
            ["Quarterstaff","Dagger"],
            ["Component Pouch","Arcane Focus"],
            ["Scholar's Pack","Explorer's Pack"],
            "Spellbook"
        ]
    }
}