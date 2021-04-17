export default [
  {
    name: 'Faceless Void',
    baseColor: '#5759D3',
    image: require('../../assets/charr/facelessVoid/img/ava/ava.png'),
    roles: 'Melee, Initiator',
    type: 'Agility',
    move: 290,
    sound: [
      require('../charr/facelessVoid/sound/sound1.mpeg'),
      require('../charr/facelessVoid/sound/sound2.mpeg'),
    ],
    stats: [
      {type: 'int', base: 15, up: 1.5},
      {type: 'agi', base: 19, up: 3},
      {type: 'str', base: 22, up: 2.4},
    ],
    skills: [
      {
        name: 'Time Walk',
        image: require('../../assets/charr/facelessVoid/img/skills/skill1.png'),
        effect:
          'Rushes to a target location while slowing the movement and attack speed of all enemies along its path for 3 seconds.',
      },
      {
        name: 'Backtrack',
        image: require('../../assets/charr/facelessVoid/img/skills/skill2.png'),
        effect:
          'Faceless Void dodges damage by jumping backward in time, eluding both physical and magical attacks.',
      },
      {
        name: 'Time Lock',
        image: require('../../assets/charr/facelessVoid/img/skills/skill3.png'),
        effect:
          'Adds the chance for an attack to lock an enemy unit in time, stunning it and dealing bonus damage. The duration is twice as long against creeps.',
      },
      {
        name: 'Chronosphere',
        image: require('../../assets/charr/facelessVoid/img/skills/skill4.png'),
        effect:
          'Creates a blister in spacetime, trapping all units caught in its sphere of influence and causes you to move very quickly inside it. Only Faceless Void and any units he controls are unaffected. Invisible units in the sphere will be revealed.',
      },
    ],
  },
  {
    name: 'Juggernaut',
    baseColor: '#BD4C47',
    image: require('../../assets/charr/juggernaut/img/ava/ava.png'),
    roles: 'Melee, Initiator',
    type: 'Agility',
    move: 290,
    sound: [
      require('../charr/juggernaut/sound/sound1.mpeg'),
      require('../charr/juggernaut/sound/sound2.mpeg'),
    ],
    stats: [
      {type: 'int', base: 14, up: 1.4},
      {type: 'agi', base: 34, up: 2.8},
      {type: 'str', base: 20, up: 2.2},
    ],
    skills: [
      {
        name: 'Blade Fury',
        image: require('../../assets/charr/juggernaut/img/skills/skill1.png'),
        effect:
          'Causes a bladestorm of destructive force around Juggernaut, rendering him immune to magic and dealing damage to nearby enemy units.',
      },
      {
        name: 'Healing Ward',
        image: require('../../assets/charr/juggernaut/img/skills/skill2.png'),
        effect:
          'Summons a Healing Ward which heals all nearby allied units, based on their max health. The Healing Ward moves at 350 movement speed after being summoned. Lasts 25 seconds.',
      },
      {
        name: 'Blade Dance',
        image: require('../../assets/charr/juggernaut/img/skills/skill3.png'),
        effect:
          'Gives Juggernaut a chance to deal critical damage on each attack.',
      },
      {
        name: 'Omnislash',
        image: require('../../assets/charr/juggernaut/img/skills/skill4.png'),
        effect:
          'Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.',
      },
    ],
  },
  {
    name: 'Monkey King',
    baseColor: '#926D56',
    image: require('../../assets/charr/monkeyKing/img/ava/ava.png'),
    roles: 'Melee, Initiator',
    type: 'Agility',
    move: 290,
    sound: [
      require('../charr/facelessVoid/sound/sound1.mpeg'),
      require('../charr/facelessVoid/sound/sound2.mpeg'),
    ],
    stats: [
      {type: 'int', base: 18, up: 2.8},
      {type: 'agi', base: 22, up: 3.7},
      {type: 'str', base: 20, up: 1.8},
    ],
    skills: [
      {
        name: 'Blade Fury',
        image: require('../../assets/charr/juggernaut/img/skills/skill1.png'),
        effect:
          'Causes a bladestorm of destructive force around Juggernaut, rendering him immune to magic and dealing damage to nearby enemy units.',
      },
      {
        name: 'Healing Ward',
        image: require('../../assets/charr/juggernaut/img/skills/skill2.png'),
        effect:
          'Summons a Healing Ward which heals all nearby allied units, based on their max health. The Healing Ward moves at 350 movement speed after being summoned. Lasts 25 seconds.',
      },
      {
        name: 'Blade Dance',
        image: require('../../assets/charr/juggernaut/img/skills/skill3.png'),
        effect:
          'Gives Juggernaut a chance to deal critical damage on each attack.',
      },
      {
        name: 'Omnislash',
        image: require('../../assets/charr/juggernaut/img/skills/skill4.png'),
        effect:
          'Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.',
      },
    ],
  },
  {
    name: 'Ogre Magi',
    baseColor: '#673AAC',
    image: require('../../assets/charr/ogreMagi/img/ava/ava.png'),
    roles: 'Melee, Initiator',
    type: 'Intelligent',
    move: 290,
    sound: [
      require('../charr/ogreMagi/sound/sound1.mpeg'),
      require('../charr/ogreMagi/sound/sound2.mpeg'),
    ],
    stats: [
      {type: 'int', base: 15, up: 2.5},
      {type: 'agi', base: 14, up: 1.5},
      {type: 'str', base: 23, up: 3.5},
    ],
    skills: [
      {
        name: 'Fireblast',
        image: require('../../assets/charr/ogreMagi/img/skills/skill1.png'),
        effect:
          'Blasts an enemy unit with a wave of fire, dealing damage and stunning the target.',
      },
      {
        name: 'Ignite',
        image: require('../../assets/charr/ogreMagi/img/skills/skill2.png'),
        effect:
          'Drenches a target in volatile chemicals, causing it to burst into flames. The target is in immense pain, taking damage and moving more slowly.',
      },
      {
        name: 'Bloodlust',
        image: require('../../assets/charr/ogreMagi/img/skills/skill3.png'),
        effect:
          'Incites a frenzy in a friendly unit, increasing its movement speed and attack speed.',
      },
      {
        name: 'Multi Cast',
        image: require('../../assets/charr/ogreMagi/img/skills/skill4.png'),
        effect:
          "Enables the Ogre Magi to rapidly cast his spells, giving them greater potency. Gives a chance to cast a spell multiple times in one cast. Increases Fireblast's mana cost and decreases its cooldown, increases cast range and adds an area of effect to Ignite and reduces Bloodlust's cooldown and gives it a chance to cast on random allies around Ogre Magi.",
      },
    ],
  },
  {
    name: 'Zeus',
    baseColor: '#0F6A88',
    image: require('../../assets/charr/zeus/img/ava/ava.png'),
    roles: 'Melee, Initiator',
    type: 'Intelligent',
    move: 290,
    sound: [
      require('../charr/zeus/sound/sound1.mpeg'),
      require('../charr/zeus/sound/sound2.mpeg'),
    ],
    stats: [
      {type: 'int', base: 22, up: 2.7},
      {type: 'agi', base: 11, up: 1.2},
      {type: 'str', base: 19, up: 2.6},
    ],
    skills: [
      {
        name: "Berserker's Call",
        image: require('../../assets/charr/zeus/img/skills/skill1.png'),
        effect:
          'Hurls a bolt of lightning that leaps through nearby enemy units.',
      },
      {
        name: 'Battle Hunger',
        image: require('../../assets/charr/zeus/img/skills/skill2.png'),
        effect:
          'Calls down a bolt of lightning to strike an enemy unit, causing damage and a mini-stun. When cast, Lightning Bolt briefly provides unobstructed vision and True Sight around the target in a 750 radius. Can be cast on the ground, affecting the closest enemy hero in 375 range.',
      },
      {
        name: 'Counter Helix',
        image: require('../../assets/charr/zeus/img/skills/skill3.png'),
        effect:
          'Zeus shocks any enemy hit by his abilities, causing damage proportional to their current health.',
      },
      {
        name: 'Culling Blade',
        image: require('../../assets/charr/zeus/img/skills/skill4.png'),
        effect:
          "Strikes all enemy heroes with a bolt of lightning, no matter where they may be. Thundergod's Wrath also provides True Sight around each hero struck. If an enemy hero is invisible, it takes no damage, but the True Sight is still created at that hero's location.",
      },
    ],
  },
];
