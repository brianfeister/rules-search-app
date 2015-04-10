window.powers = [
    {
        "name": "Blinded",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            4
        ],
        "attack": [
            "Agility vs. Evasion"
        ],
        "attackAttributes": [
            "Agility"
        ],
        "defenseAttributes": [
            "Evasion"
        ],
        "duration": "Resist ends (Fail x 3 = 1 minute)",
        "description": "The blinding effect can be anything from a handful of sand thrown in an enemies face, to a arctic blast that freezes their eyes, temporarily blinding them, to a bright flash that dazzles all targets in an area attack.",
        "effect": "The target cannot see as long as the effect persists. Before any PERCEPTION or attack roll the target attempts has a 50% chance of failure. Roll this check before the attack or perception roll."
    },
    {
        "name": "Charmed",
        "tags": [
            "Supernatural"
        ],
        "power": [
            7
        ],
        "attack": [
            "Enchantement vs. Resolve"
        ],
        "attackAttributes": [
            "Enchantment"
        ],
        "defenseAttributes": [
            "Resolve"
        ],
        "duration": "Resist ends (special) (Fail x 3 = 24 hours)",
        "description": "Charms are one of the great banes of legend, wielded by powerful enchantress's like Circe (in Homer's The Odyssey), Nymph's, and other enchanter's who control the will of others, not through total domination, but through a magical spell of love or friendship.",
        "effect": "At the option of the attacker, the charmed bane either causes the target to consider the attacker their best friend and one of the most trustworthy and noble people they have met in all their lives. Alternatively, this trust and admiration can manifest as romantic love. The attacker is unable to do anything to plot against the one who afflicted them, and will (at the earliest possible opportunity) tell their charmer of any rumored harm or danger coming their way. The afflicted character becomes immediately suspicious of anyone who speaks ill of their attacker.",
        "special": "While most banes last until the target actively attempts to resist it, this bane prevents the target from being aware of their affliction and thus prevents them from actively attempting to break free. However, the targets true mind is magically suppressed but fights to regain control.  As such, at the end of each of it's turns, the target receives a Resist roll as a free action to break free from the effect. When your target succeeds at a resist roll against this bane, they become to immune to all subsequent attempts by you to inflict the bane for the next 24 hours."
    },
    {
        "name": "Death",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            9
        ],
        "attack": [
            "Agility vs. Toughness",
            "Entropy vs. Toughness"
        ],
        "attackAttributes": [
            "Agility",
            "Entropy"
        ],
        "defenseAttributes": [
            "Toughness"
        ],
        "duration": "Resist ends (special) (Fail x 3 = Permanent)",
        "description": "Utilizing either incredible precision or the power of death, the target's life force is snuffed out completely. The most deadly assassins and most powerful necromancer's are known for such legendary prowess.",
        "effect": "You attempt to completely snuff the life force of your target.  There is a brief window of time where the target can attempt to resist this extinguishing force, but once that window closes, the death is permanent and can only be reversed with resurrection magic.  When the bane is initially applied, the target is IMMOBILE (can't move from their current square) and unconscious. They have DISADVANTAGE 5 on all perception rolls, and are incapable of moving. As a result of being completely incapable of movement, an incapacitated character can be the victim of a finishing blow. ",
        "special": "While most banes last until the target actively attempts to resist it, this bane prevents the target from being aware of their affliction and thus prevents them from actively attempting to break free. However, the targets body fights to regain consciousness and resist the pending death.  As such, at the end of each of it's turns, the target receives a Resist roll as a free action to break free from the effect.  Where 3 failed resist rolls would usually persist the effects of the bane, this bane extinguishes the life force of the target on 3 failed saves, thus it is permanent. When your target succeeds at a resist roll against this bane, they become to immune to all subsequent attempts by you to inflict the bane for the next 24 hours."
    },
    {
        "name": "Dominated",
        "tags": [
            "Supernatural"
        ],
        "power": [
            9
        ],
        "attack": [
            "Enchantment vs. Resolve"
        ],
        "attackAttributes": [
            "Enchantment"
        ],
        "defenseAttributes": [
            "Resolve"
        ],
        "duration": "Resist ends (Fail x 3 = 1 hour)",
        "description": "Though rare, domination is seen from time to time in legendary tales, often wielded by vampires, and sometimes wielded by the most powerful, mentalist sorcerers who command legions of mindless zombies, completely enslaved to their will.",
        "effect": "Dominated characters are under the complete control of the one who targeted them with the dominated bane. Unlike the charmed bane, characters under the effect of domination lose any control over their own actions but their minds are free to think anything, though they are effectively trapped in their own body like a prison. They cannot take action of any kind (except thought) unless it is ordered by the attacker. Every action which the attacker orders the afflicted character to perform which is in extreme violation of their nature gives the target a Resist roll as a free action to break free from the effect.  The attacker does not gain special access to the target's mind and so can only order the character to perform actions that they think or know (from prior knowledge) that the character is capable of. Domination does not prevent other banes, like mind-reading, but each bane must be applied and resolved separately. Lastly, each mental order that the attacker gives to the target is a minor action. When your target succeeds at a resist roll against this bane, they become to immune to all subsequent attempts by you to inflict the bane for the next 24 hours.",
        "special": "While most banes last until the target actively attempts to resist it, this bane prevents the target from being aware of their affliction and thus prevents them from actively attempting to break free. However, the targets true mind is magically suppressed but fights to regain control.  As such, at the end of each of it's turns, the target receives a Resist roll as a free action to break free from the effect. When your target succeeds at a resist roll against this bane, they become to immune to all subsequent attempts by you to inflict the bane for the next 24 hours."
    },
    {
        "name": "Forced Move",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "attack": [
            "Might vs. Toughness",
            "Movement vs. Toughness",
            "Energy vs. Toughness",
            "Agility vs. Evasion"
        ],
        "duration": "Instantaneous",
        "description": "The afflicted target is moved (against it's will) a variable distance at the mercy of the attacker. Possible stories for this movement include a strong gust of magical wind, a powerful blow with a heavy weapon, or a carefully timed shift and redirection an incoming attack's momentum.",
        "effect": "The afflicted target is moved X squares as chosen by the bane's controller, where X is the power level of the bane."
    },
    {
        "name": "Grab",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            0,
            2
        ],
        "attack": [
            "Might vs. Toughness"
        ],
        "attackAttributes": [
            "Might"
        ],
        "defenseAttributes": [
            "Toughness"
        ],
        "duration": "Special",
        "description": "Grab attacks are ones that grapple, wrestle, pin, lock, crush, or otherwise restrain the target.",
        "effect": "The grabbed bane has two variations with the same effect. The power level 0 variation is used when a Grab is attempted as a (non-damaging) bane attack. When attempted as part of a normal attack action, the power level is 2. If the attack is successful, then both the target and the attacker are IMMOBILE in their current squares for the duration of the grab. The attacker can choose to release their target at any time (a free action that immediately ends the bane).",
        "special": "Breaking free from a grab is a move action, in which the grabbed target rolls a challenge roll where both the attacker and the defender roll an attribute check (the attacker can use only Might, the defender can use either Might or Agility). If the defender wins, the grab is ended and they can SLIDE 1 square as a free action."
    },
    {
        "name": "Immobile",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            3
        ],
        "attack": [
            "Agily vs. Toughness",
            "Might vs. Toughness",
            "Enchantment vs. Resolve",
            "Entropy vs. Toughness",
            "Energy vs. Toughness"
        ],
        "attackAttributes": [
            "Enchantment",
            "Might",
            "Agility",
            "Entropy",
            "Energy"
        ],
        "defenseAttributes": [
            "Toughness",
            "Resolve"
        ],
        "duration": "Resist ends (Fail x 3 = 1 minute)",
        "description": "The power to immobilize can come from a number of different sources, including a precision nerve strike that leaves the victim unable to move, a fear-inducing effect that causes awe and terror, or even a cold so extreme that it renders the victim immobile.",
        "effect": "The target cannot move from their current square. This effect does not represent total paralysis, which is covered by the “Incapacitated” bane."
    },
    {
        "name": "Illusion",
        "tags": [
            "Supernatural"
        ],
        "power": [
            1,
            2,
            3,
            7
        ],
        "attack": [
            "Illusion vs. Resolve"
        ],
        "attackAttributes": [
            "Illusion"
        ],
        "defenseAttributes": [
            "Resolve"
        ],
        "duration": "Resist ends (Fail x 3 = 10 minutes)",
        "description": "Illusions come in many shapes and forms, but they boil down to one thing – a manifestation of something that is not real, which is seen by anyone within range of sight / hearing / smell etc. Not to be confused with hallucination (see the description in the POWERS section), which is one creature completely dominating the sensory perception of another",
        "effect": "Any time that a character interacts with an illusion, they make a challenge roll as a free action (DL = Attribute score of the illusion's creator). This challenge roll is in addition to the resist roll that all characters receive beginning the turn after the attacker stops concentrating or fails to sustain the illusion. Beyond that, illusions have a cumulative power level determined with how many senses they deceive as detailed below.<ul><li>PL 1 - Taste</li><li>PL 2 - Sound</li><li>PL 2 - Smell</li><li>PL 2 - Touch</li><li>PL 3 - Sight</li><li>PL 6 - All Senses</li></ul> Your ILLUSION attribute score determines the maximum area that your illusion can cover as follows. The dimensions are depth, width, and height (all squares must touch but can be in any shape/pattern) <ul><li>Illusion 1 - 1 x 1 x 1 square </li><li>Illusion 3 - 2 x 2 x 2 squares </li><li>Illusion 5 - 3 x 3 x 3 squares</li><li>Illusion 7 - 4 x 4 x 4 squares</li><li>Illusion 8 - 6 x 6 x 6 squares</li><li>Illusion 9 - 8 x 8 x 8 squares</li></ul>",
        "special": "When your target succeeds at a resist roll against this bane, they become to immune to all subsequent attempts by you to inflict the bane for the next hour."
    },
    {
        "name": "Incapacitated",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            7
        ],
        "attack": [
            "Agility vs. Toughness",
            "Entropy vs. Toughness",
            "Enchantment vs. Resolve",
            "Psychic vs. Resolve"
        ],
        "attackAttributes": [
            "Agility",
            "Entropy",
            "Enchantment",
            "Psychic"
        ],
        "defenseAttributes": [
            "Toughness",
            "Resolve"
        ],
        "duration": "Resist ends (Fail x 3 = 1 minute)",
        "description": "Incapacitation is a catch-all for a variety of banes including: total paralysis, sleep, petrification, poisoning, being knocked out, or fainting. Examples of possible causes of this bane include: a martial artist's paralyzing strike, being put to sleep, paralyzed by poison, fainting from extreme heat, suffocation, etc.",
        "effect": "The target is IMMOBILE (can't move from their current square) and unconscious. They have DISADVANTAGE 5 on all perception rolls, and are incapable of moving. As a result of being completely incapable of movement, an incapacitated character can be the victim of a finishing blow.",
        "special": "While most banes last until the target actively attempts to resist it, this bane prevents the target from being aware of their affliction and thus prevents them from actively attempting to break free. However, the targets body fights to regain consciousness.  As such, at the end of each of it's turns, the target receives a Resist roll as a free action to break free from the effect. When your target succeeds at a resist roll against this bane, they become to immune to all subsequent attempts by you to inflict the bane for the next hour."
    },
    {
        "name": "Knockdown",
        "tags": [
            "Supernatural",
            "Physical"
        ],
        "power": [
            2
        ],
        "attack": [
            "Agility vs. Evasion",
            "Might vs. Toughness",
            "Energy vs. Toughness"
        ],
        "attackAttributes": [
            "Agility",
            "Might",
            "Energy"
        ],
        "defenseAttributes": [
            "Evasion",
            "Toughness"
        ],
        "duration": "Instantaneous",
        "description": "Fights are called “knock down, drag out” for a reason - knocking an opponent prone is a common way for one combatant to gain the upper hand. Knockdown can be caused by a thunderous blow from a great axe, a thunderbolt of supernatural energy, or a well aimed shove in a direction where the enemies balance is weak.",
        "effect": "Knockdown is an instantaneous effect that knocks the target prone. Being prone gives a -4 penalty to all attacks made from prone. Melee and area attacks against prone characters gain tactical advantage (+2 to attack rolls), while being prone grants the character cover against projectile attacks"
    },
    {
        "name": "Life Drain",
        "tags": [
            "Supernatural"
        ],
        "power": [
            5
        ],
        "attack": [
            "Entropy vs. Toughness"
        ],
        "attackAttributes": [
            "Entropy"
        ],
        "defenseAttributes": [
            "Toughness"
        ],
        "duration": "Instantaneous",
        "description": "The fangs of a vampire and the touch of a black mage that siphons away the very soul of his enemy are some examples of the Life Drain affliction.",
        "effect": "For each point of damage that the attack deals (over and above the target's defense score), you regain 1 hit point."
    },
    {
        "name": "Memory Wipe",
        "tags": [
            "Supernatural"
        ],
        "power": [
            5
        ],
        "attack": [
            "Enchantment vs. Resolve"
        ],
        "attackAttributes": [
            "Enchantment"
        ],
        "defenseAttributes": [
            "Resolve"
        ],
        "duration": "Instantaneous",
        "description": "Warping or controlling the mind is one of the most dreaded powers of Enchanters, causing powerful heroes to forget their homes, families, and quests",
        "effect": "<ul><li>Level 6: You permanently erase the last 5 minutes of the target's memory.  The target does not know what happened during this time (including having seen you, if they did).  Multiple uses of this bane progressively erase consecutive 5 minute increments.</li><li>Level 8: Instead of erasing the immediate past, the invoker of the bane can erase memories from any time in the past, but the invoker must be aware of the memory either from rumor, personal knowledge, or successfully divining it.</li></ul>",
        "special": "When you target an enemy with this bane and your action roll fails to beat the targets RESOLVE, the target is immune to further attempts of this bane from you for the next 24 hours."
    },
    {
        "name": "Mind Dredge",
        "tags": [
            "Supernatural"
        ],
        "power": [
            2,
            4,
            6,
            8,
            9
        ],
        "attack": [
            "Divination vs. Resolve"
        ],
        "attackAttributes": [
            "Divination"
        ],
        "defenseAttributes": [
            "Resolve"
        ],
        "duration": "Resist ends (Fail x 3 = 1)",
        "description": "foo",
        "effect": "bar",
        "special": "is it?"
    }
];
