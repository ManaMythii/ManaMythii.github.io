module.exports = [
  {
    name: "Armored Blow 1",
    spCost: 50,
    icon: "2-5",
    exclude: [{weaponType: "Staff"}],
    effect: "Grants Def+2 during combat if unit initiates the attack."
  },
  {
    name: "Armored Blow 2",
    spCost: 100,
    icon: "2-6",
    prev: ["Armored Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Def+4 during combat if unit initiates the attack."
  },
  {
    name: "Armored Blow 3",
    spCost: 200,
    icon: "2-7",
    prev: ["Armored Blow 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Def+6 during combat if unit initiates the attack."
  },
  {
    name: "Atk/Def 1",
    spCost: 80,
    icon: "14-5",
    stats: {atk: 1, def: 1},
    prev: ["Defense +1", "Attack +1"],
    effect: "Grants Atk/Def+1."
  },
  {
    name: "Atk/Def 2",
    spCost: 160,
    icon: "14-6",
    stats: {atk: 2, def: 2},
    prev: ["Atk/Def 1"],
    last: true,
    effect: "Grants Atk/Def+2."
  },
  {
    name: "Atk/Def Bond 1",
    spCost: 60,
    icon: "32-10",
    effect: "Grants Atk/Def+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Bond 2",
    spCost: 120,
    icon: "32-11",
    prev: ["Atk/Def Bond 1"],
    effect: "Grants Atk/Def+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Bond 3",
    spCost: 240,
    icon: "32-12",
    prev: ["Atk/Def Bond 2"],
    last: true,
    effect: "Grants Atk/Def+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Solo 1",
    spCost: 60,
    icon: "55-0",
    effect: "If unit is not adjacent to an ally, grants Atk/Def+2 during combat."
  },
  {
    name: "Atk/Def Solo 2",
    spCost: 120,
    icon: "55-1",
    prev: ["Atk/Def Solo 1"],
    effect: "If unit is not adjacent to an ally, grants Atk/Def+4 during combat."
  },
  {
    name: "Atk/Def Solo 3",
    spCost: 240,
    icon: "55-2",
    prev: ["Atk/Def Solo 2"],
    last: true,
    effect: "If unit is not adjacent to an ally, grants Atk/Def+6 during combat."
  },
  {
    name: "Atk/Res 1",
    spCost: 80,
    icon: "17-9",
    stats: {atk: 1, res: 1},
    prev: ["Attack +1", "Resistance +1"],
    effect: "Grants Atk/Res+1."
  },
  {
    name: "Atk/Res 2",
    spCost: 160,
    icon: "17-10",
    stats: {atk: 2, res: 2},
    prev: ["Atk/Res 1"],
    last: true,
    effect: "Grants Atk/Res+2."
  },
  {
    name: "Atk/Res Bond 1",
    spCost: 60,
    icon: "30-8",
    effect: "Grants Atk/Res+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Res Bond 2",
    spCost: 120,
    icon: "30-9",
    prev: ["Atk/Res Bond 1"],
    effect: "Grants Atk/Res+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Res Bond 3",
    spCost: 240,
    icon: "30-10",
    prev: ["Atk/Res Bond 2"],
    last: true,
    effect: "Grants Atk/Res+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Res Solo 1",
    spCost: 60,
    icon: "50-0",
    effect: "If unit is not adjacent to an ally, grants Atk/Res+2 during combat."
  },
  {
    name: "Atk/Res Solo 2",
    spCost: 120,
    icon: "50-1",
    prev: ["Atk/Res Solo 1"],
    effect: "If unit is not adjacent to an ally, grants Atk/Res+4 during combat."
  },
  {
    name: "Atk/Res Solo 3",
    spCost: 240,
    icon: "50-2",
    prev: ["Atk/Res Solo 2"],
    last: true,
    effect: "If unit is not adjacent to an ally, grants Atk/Res+6 during combat."
  },
  {
    name: "Atk/Spd Solo 1",
    spCost: 60,
    icon: "52-10",
    effect: "If unit is not adjacent to an ally, grants Atk/Spd+2 during combat."
  },
  {
    name: "Atk/Spd Solo 2",
    spCost: 120,
    icon: "52-11",
    prev: ["Atk/Spd Solo 1"],
    effect: "If unit is not adjacent to an ally, grants Atk/Spd+4 during combat."
  },
  {
    name: "Atk/Spd Solo 3",
    spCost: 240,
    icon: "52-12",
    prev: ["Atk/Spd Solo 2"],
    last: true,
    effect: "If unit is not adjacent to an ally, grants Atk/Spd+6 during combat."
  },
  {
    name: "Atk/Spd 1",
    spCost: 80,
    icon: "26-11",
    stats: {atk: 1, spd: 1},
    prev: ["Speed +1", "Attack +1"],
    effect: "Grants Atk/Spd+1."
  },
  {
    name: "Atk/Spd 2",
    spCost: 160,
    icon: "26-12",
    stats: {atk: 2, spd: 2},
    prev: ["Atk/Spd 1"],
    last: true,
    effect: "Grants Atk/Spd+2."
  },
  {
    name: "Atk/Spd Bond 1",
    spCost: 60,
    icon: "37-0",
    effect: "Grants Atk/Spd+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd Bond 2",
    spCost: 120,
    icon: "37-1",
    prev: ["Atk/Spd Bond 1"],
    effect: "Grants Atk/Spd+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd Bond 3",
    spCost: 240,
    icon: "37-2",
    prev: ["Atk/Spd Bond 2"],
    last: true,
    effect: "Grants Atk/Spd+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd Push 1",
    spCost: 60,
    icon: "44-1",
    effect: "At start of combat, if unit's HP = 100%, grants Atk/Spd+3, but if unit attacked, deals 1 damage to unit after combat."
  },
  {
    name: "Atk/Spd Push 2",
    spCost: 120,
    icon: "44-2",
    prev: ["Atk/Spd Push 1"],
    effect: "At start of combat, if unit's HP = 100%, grants Atk/Spd+4, but if unit attacked, deals 1 damage to unit after combat."
  },
  {
    name: "Atk/Spd Push 3",
    spCost: 240,
    icon: "44-3",
    prev: ["Atk/Spd Push 2"],
    last: true,
    effect: "At start of combat, if unit's HP = 100%, grants Atk/Spd+5, but if unit attacked, deals 1 damage to unit after combat."
  },
  {
    name: "Attack +1",
    spCost: 30,
    icon: "0-7",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Attack +2",
    spCost: 60,
    icon: "0-8",
    stats: {atk: 2},
    prev: ["Attack +1"],
    effect: "Grants Atk+2."
  },
  {
    name: "Attack +3",
    spCost: 120,
    icon: "0-9",
    stats: {atk: 3},
    prev: ["Attack +2"],
    last: true,
    effect: "Grants Atk+3."
  },
  {
    name: "B Duel Flying 1",
    spCost: 70,
    icon: "55-6",
    stats: {hp: 3},
    include: [{colorType: "Blue", moveType: "Flying"}],
    effect: "Grants HP+3. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "B Duel Flying 2",
    spCost: 140,
    icon: "55-7",
    stats: {hp: 4},
    include: [{colorType: "Blue", moveType: "Flying"}],
    effect: "Grants HP+4. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "B Duel Flying 3",
    spCost: 300,
    icon: "55-8",
    stats: {hp: 5},
    include: [{colorType: "Blue", moveType: "Flying"}],
    effect: "Grants HP+5. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "Bonus Doubler 1",
    spCost: 60,
    icon: "59-4",
    include: [{moveType: "Infantry"}],
    effect: "Grants bonus to Atk/Spd/Def/Res during combat = 50% of current bonus on each of unit's stats. Calculates each stat bonus independently."
  },
  {
    name: "Bonus Doubler 2",
    spCost: 120,
    icon: "59-5",
    prev: ["Bonus Doubler 1"],
    include: [{moveType: "Infantry"}],
    effect: "Grants bonus to Atk/Spd/Def/Res during combat = 75% of current bonus on each of unit's stats. Calculates each stat bonus independently."
  },
  {
    name: "Bonus Doubler 3",
    spCost: 240,
    icon: "59-6",
    prev: ["Bonus Doubler 2"],
    include: [{moveType: "Infantry"}],
    last: true,
    effect: "Grants bonus to Atk/Spd/Def/Res during combat = current bonus on each of unit's stats. Calculates each stat bonus independently."
  },
  {
    name: "Bracing Blow 1",
    spCost: 120,
    icon: "30-3",
    prev: ["Armored Blow 1", "Warding Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Def/Res+2 during combat if unit initiates combat."
  },
  {
    name: "Bracing Blow 2",
    spCost: 240,
    icon: "30-4",
    prev: ["Bracing Blow 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Def/Res+4 during combat if unit initiates combat."
  },
  {
    name: "Bracing Stance 1",
    spCost: 100,
    icon: "46-0",
    prev: ["Steady Stance 1"],
    effect: "Grants Def/Res+2 during combat when this unit is attacked."
  },
  {
    name: "Bracing Stance 2",
    spCost: 200,
    icon: "46-1",
    prev: ["Bracing Stance 1"],
    last: true,
    effect: "Grants Def/Res+4 during combat when this unit is attacked."
  },
  {
    name: "Brazen Atk/Def 1",
    spCost: 60,
    icon: "33-10",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+3 during combat."
  },
  {
    name: "Brazen Atk/Def 2",
    spCost: 120,
    icon: "33-11",
    prev: ["Brazen Atk/Def 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+5 during combat."
  },
  {
    name: "Brazen Atk/Def 3",
    spCost: 240,
    icon: "33-12",
    prev: ["Brazen Atk/Def 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+7 during combat."
  },
  {
    name: "Brazen Atk/Spd 1",
    spCost: 60,
    icon: "33-7",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+3 during combat."
  },
  {
    name: "Brazen Atk/Spd 2",
    spCost: 120,
    icon: "33-8",
    prev: ["Brazen Atk/Spd 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+5 during combat."
  },
  {
    name: "Brazen Atk/Spd 3",
    spCost: 240,
    icon: "33-9",
    prev: ["Brazen Atk/Spd 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+7 during combat."
  },
  {
    name: "Brazen Atk/Res 1",
    spCost: 60,
    icon: "45-4",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Res+3 during combat."
  },
  {
    name: "Brazen Atk/Res 2",
    spCost: 120,
    icon: "45-5",
    prev: ["Brazen Atk/Res 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Res+5 during combat."
  },
  {
    name: "Brazen Atk/Res 3",
    spCost: 240,
    icon: "45-6",
    prev: ["Brazen Atk/Res 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Res+7 during combat."
  },
  {
    name: "Brazen Def/Res 1",
    spCost: 60,
    icon: "37-7",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Def/Res+3 during combat."
  },
  {
    name: "Brazen Def/Res 2",
    spCost: 120,
    icon: "37-8",
    prev: ["Brazen Def/Res 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Def/Res+5 during combat."
  },
  {
    name: "Brazen Def/Res 3",
    spCost: 240,
    icon: "37-9",
    prev: ["Brazen Def/Res 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Def/Res+7 during combat."
  },
  {
    name: "C Duel Infantry 1",
    spCost: 70,
    icon: "52-7",
    stats: {hp: 3},
    include: [{colorType: "Neutral", moveType: "Infantry"}],
    effect: "Grants HP+3. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "C Duel Infantry 2",
    spCost: 140,
    icon: "52-8",
    stats: {hp: 4},
    include: [{colorType: "Neutral", moveType: "Infantry"}],
    effect: "Grants HP+4. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "C Duel Infantry 3",
    spCost: 300,
    icon: "52-9",
    stats: {hp: 5},
    include: [{colorType: "Neutral", moveType: "Infantry"}],
    effect: "Grants HP+5. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "Close Counter",
    spCost: 300,
    icon: "4-0",
    include: [{weaponType:"Staff"},{weaponType:"Bow"},{weaponType: "Dagger"},{weaponType: "Tome"}],
    last: true,
    effect: "Enables unit to counterattack regardless of distance to attacker."
  },
  {
    name: "Close Def 1",
    spCost: 60,
    icon: "19-10",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat."
  },
  {
    name: "Close Def 2",
    spCost: 120,
    icon: "19-11",
    prev: ["Close Def 1"],
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat."
  },
  {
    name: "Close Def 3",
    spCost: 240,
    icon: "19-12",
    prev: ["Close Def 2"],
    last: true,
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat."
  },
  {
    name: "Darting Blow 1",
    spCost: 50,
    icon: "2-2",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+2 during combat if unit initiates the attack."
  },
  {
    name: "Darting Blow 2",
    spCost: 100,
    icon: "2-3",
    exclude: [{weaponType:"Staff"}],
    prev: ["Darting Blow 1"],
    effect: "Grants Spd+4 during combat if unit initiates the attack."
  },
  {
    name: "Darting Blow 3",
    spCost: 200,
    icon: "2-4",
    exclude: [{weaponType:"Staff"}],
    prev: ["Darting Blow 2"],
    last: true,
    effect: "Grants Spd+6 during combat if unit initiates the attack."
  },
  {
    name: "Darting Stance 1",
    spCost: 50,
    icon: "39-2",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+2 during combat when this unit is attacked."
  },
  {
    name: "Darting Stance 2",
    spCost: 100,
    icon: "39-3",
    prev: ["Darting Stance 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+4 during combat when this unit is attacked."
  },
  {
    name: "Darting Stance 3",
    spCost: 200,
    icon: "39-4",
    prev: ["Darting Stance 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Spd+6 during combat when this unit is attacked."
  },
  {
    name: "Death Blow 1",
    spCost: 50,
    icon: "1-12",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+2 during combat if unit initiates the attack."
  },
  {
    name: "Death Blow 2",
    spCost: 100,
    icon: "2-0",
    prev: ["Death Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+4 during combat if unit initiates the attack."
  },
  {
    name: "Death Blow 3",
    spCost: 200,
    icon: "2-1",
    prev: ["Death Blow 2"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+6 during combat if unit initiates the attack."
  },
  {
    name: "Death Blow 4",
    spCost: 300,
    icon: "48-1",
    prev: ["Death Blow 3"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk+8 during combat if unit initiates the attack."
  },
  {
    name: "Def/Res 1",
    spCost: 80,
    icon: "51-9",
    stats: {res: 1, def: 1},
    prev: ["Resistance +1", "Defense +1"],
    effect: "Grants Def/Res+1."
  },
  {
    name: "Def/Res 2",
    spCost: 160,
    icon: "51-10",
    stats: {res: 2, def: 2},
    prev: ["Def/Res 1"],
    last: true,
    effect: "Grants Def/Res+2."
  },
  {
    name: "Def/Res Bond 1",
    spCost: 60,
    icon: "54-10",
    effect: "Grants Def/Res+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Def/Res Bond 2",
    spCost: 120,
    icon: "54-11",
    prev: ["Def/Res Bond 1"],
    effect: "Grants Def/Res+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Def/Res Bond 3",
    spCost: 240,
    icon: "54-12",
    prev: ["Def/Res Bond 2"],
    last: true,
    effect: "Grants Def/Res+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Def/Res Solo 1",
    spCost: 60,
    icon: "57-5",
    effect: "If unit is not adjacent to an ally, grants Def/Res+2 during combat."
  },
  {
    name: "Def/Res Solo 2",
    spCost: 120,
    icon: "57-6",
    prev: ["Def/Res Solo 1"],
    effect: "If unit is not adjacent to an ally, grants Def/Res+4 during combat."
  },
  {
    name: "Def/Res Solo 3",
    spCost: 240,
    icon: "57-7",
    prev: ["Def/Res Solo 2"],
    last: true,
    effect: "If unit is not adjacent to an ally, grants Def/Res+6 during combat."
  },
  {
    name: "Defense +1",
    spCost: 30,
    icon: "1-0",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Defense +2",
    spCost: 60,
    icon: "1-1",
    stats: {def: 2},
    prev: ["Defense +1"],
    effect: "Grants Def+2."
  },
  {
    name: "Defense +3",
    spCost: 120,
    icon: "1-2",
    stats: {def: 3},
    prev: ["Defense +2"],
    last: true,
    effect: "Grants Def+3."
  },
  {
    name: "Defiant Atk 1",
    spCost: 40,
    icon: "2-11",
    effect: "Grants Atk+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Atk 2",
    spCost: 80,
    icon: "2-12",
    prev: ["Defiant Atk 1"],
    effect: "Grants Atk+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Atk 3",
    spCost: 160,
    icon: "3-0",
    prev: ["Defiant Atk 2"],
    last: true,
    effect: "Grants Atk+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Def 1",
    spCost: 40,
    icon: "3-4",
    effect: "Grants Def+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Def 2",
    spCost: 80,
    icon: "3-5",
    prev: ["Defiant Def 1"],
    effect: "Grants Def+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Def 3",
    spCost: 160,
    icon: "3-6",
    prev: ["Defiant Def 2"],
    last: true,
    effect: "Grants Def+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Res 1",
    spCost: 40,
    icon: "3-7",
    effect: "Grants Res+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Res 2",
    spCost: 80,
    icon: "3-8",
    prev: ["Defiant Res 1"],
    effect: "Grants Res+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Res 3",
    spCost: 160,
    icon: "3-9",
    prev: ["Defiant Res 2"],
    last: true,
    effect: "Grants Res+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Spd 1",
    spCost: 40,
    icon: "3-1",
    effect: "Grants Spd+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Spd 2",
    spCost: 80,
    icon: "3-2",
    prev: ["Defiant Spd 1"],
    effect: "Grants Spd+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Spd 3",
    spCost: 160,
    icon: "3-3",
    prev: ["Defiant Spd 2"],
    last: true,
    effect: "Grants Spd+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Distant Counter",
    spCost: 300,
    icon: "4-1",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}, {weaponType:"Beast"}],
    last: true,
    effect: "Enables unit to counterattack regardless of distance to attacker."
  },
  {
    name: "Distant Def 1",
    spCost: 60,
    icon: "16-10",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat."
  },
  {
    name: "Distant Def 2",
    spCost: 120,
    icon: "16-11",
    prev: ["Distant Def 1"],
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat."
  },
  {
    name: "Distant Def 3",
    spCost: 240,
    icon: "16-12",
    prev: ["Distant Def 2"],
    last: true,
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat."
  },
  {
    name: "Dragonskin",
    spCost: 300,
    icon: "40-3",
    include: [{name: "Robin (F) (Legendary Heroes)"}],
    last: true,
    effect: "Neutralizes \"effective against flying\" bonuses. Grants Def/Res+4 during combat if foe initiates combat."
  },
  {
    name: "Earth Boost 1",
    spCost: 50,
    icon: "17-0",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+2 during combat."
  },
  {
    name: "Earth Boost 2",
    spCost: 100,
    icon: "17-1",
    prev: ["Earth Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+4 during combat."
  },
  {
    name: "Earth Boost 3",
    spCost: 200,
    icon: "17-2",
    prev: ["Earth Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+6 during combat."
  },
  {
    name: "Fierce Breath",
    spCost: 240,
    icon: "51-5",
    prev: ["Fierce Stance 2"],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}, {weaponType:"Bow"}, {weaponType:"Dagger"}, {weaponType:"Tome"}, {weaponType:"Staff"}],
    last: true,
    effect: "If foe initiates combat, grants Atk+4 during combat and Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)"
  },
  {
    name: "Fierce Stance 1",
    spCost: 50,
    icon: "31-3",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+2 during combat when this unit is attacked."
  },
  {
    name: "Fierce Stance 2",
    spCost: 100,
    icon: "31-4",
    prev: ["Fierce Stance 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+4 during combat when this unit is attacked."
  },
  {
    name: "Fierce Stance 3",
    spCost: 200,
    icon: "31-5",
    prev: ["Fierce Stance 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk+6 during combat when this unit is attacked."
  },
  {
    name: "Fire Boost 1",
    spCost: 50,
    icon: "18-7",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+2 during combat."
  },
  {
    name: "Fire Boost 2",
    spCost: 100,
    icon: "18-8",
    prev: ["Fire Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+4 during combat."
  },
  {
    name: "Fire Boost 3",
    spCost: 200,
    icon: "18-9",
    prev: ["Fire Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+6 during combat."
  },
  {
    name: "Flashing Blade 1",
    spCost: 60,
    icon: "31-6",
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flashing Blade 2",
    spCost: 120,
    icon: "31-7",
    prev: ["Flashing Blade 1"],
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flashing Blade 3",
    spCost: 240,
    icon: "31-8",
    prev: ["Flashing Blade 2"],
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit's Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Fort. Def/Res 1",
    spCost: 100,
    icon: "52-4",
    stats: {atk: -3, def: 3, res: 3},
    prev: ["Fortress Defense 1", "Fortress Resistance 1"],
    effect: "Grants Def/Res+3. Inflicts Atk-2."
  },
  {
    name: "Fort. Def/Res 2",
    spCost: 200,
    icon: "52-5",
    stats: {atk: -3, def: 4, res: 4},
    prev: ["Fort. Def/Res 1"],
    effect: "Grants Def/Res+4. Inflicts Atk-3."
  },
  {
    name: "Fort. Def/Res 3",
    spCost: 300,
    icon: "52-6",
    stats: {atk: -2, def: 6, res: 6},
    prev: ["Fort. Def/Res 2"],
    last: true,
    effect: "Grants Def/Res+6. Inflicts Atk-2."
  },
  {
    name: "Fortress Def 1",
    spCost: 40,
    icon: "15-1",
    stats: {atk: -3, def: 3},
    effect: "Grants Def+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Def 2",
    spCost: 80,
    icon: "15-2",
    stats: {atk: -3, def: 4},
    prev: ["Fortress Def 1"],
    effect: "Grants Def+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Def 3",
    spCost: 160,
    icon: "15-3",
    stats: {atk: -3, def: 5},
    prev: ["Fortress Def 2"],
    last: true,
    effect: "Grants Def+5. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 1",
    spCost: 40,
    icon: "25-0",
    stats: {atk: -3, res: 3},
    effect: "Grants Res+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 2",
    spCost: 80,
    icon: "25-1",
    prev: ["Fortress Res 1"],
    stats: {atk: -3, res: 4},
    effect: "Grants Res+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 3",
    spCost: 160,
    icon: "25-2",
    prev: ["Fortress Res 2"],
    stats: {atk: -3, res: 5},
    last: true,
    effect: "Grants Res+5. Inflicts Atk-3."
  },
  {
    name: "Fury 1",
    spCost: 50,
    icon: "1-6",
    stats: {atk: 1, spd: 1, def: 1, res: 1},
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat."
  },
  {
    name: "Fury 2",
    spCost: 100,
    icon: "1-7",
    stats: {atk: 2, spd: 2, def: 2, res: 2},
    prev: ["Fury 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat."
  },
  {
    name: "Fury 3",
    spCost: 200,
    icon: "1-8",
    stats: {atk: 3, spd: 3, def: 3, res: 3},
    prev: ["Fury 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat."
  },
  {
    name: "Fury 4",
    spCost: 300,
    icon: "58-2",
    stats: {atk: 4, spd: 4, def: 4, res: 4},
    prev: ["Fury 3"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Spd/Def/Res+4. Unit takes 8 damage after combat."
  },
  {
    name: "G Duel Infantry 1",
    spCost: 70,
    icon: "50-12",
    stats: {hp: 3},
    include: [{colorType: "Green", moveType: "Infantry"}],
    effect: "Grants HP+3. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "G Duel Infantry 2",
    spCost: 140,
    icon: "51-0",
    stats: {hp: 4},
    include: [{colorType: "Green", moveType: "Infantry"}],
    effect: "Grants HP+4. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "G Duel Infantry 3",
    spCost: 300,
    icon: "51-1",
    stats: {hp: 5},
    include: [{colorType: "Green", moveType: "Infantry"}],
    effect: "Grants HP+5. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "Grani's Shield",
    spCost: 200,
    icon: "4-2",
    include: [{moveType:"Cavalry"}],
    last: true,
    effect: "Neutralizes \"effective against\" bonuses."
  },
  {
    name: "HP +3",
    spCost: 40,
    icon: "0-4",
    stats: {hp: 3},
    effect: "Grants +3 to max HP."
  },
  {
    name: "HP +4",
    spCost: 80,
    icon: "0-5",
    stats: {hp: 4},
    prev: ["HP +3"],
    effect: "Grants +4 to max HP."
  },
  {
    name: "HP +5",
    spCost: 160,
    icon: "0-6",
    stats: {hp: 5},
    prev: ["HP +4"],
    last: true,
    effect: "Grants +5 to max HP."
  },
  {
    name: "HP/Atk 1",
    spCost: 100,
    icon: "36-11",
    stats: {hp: 3, atk: 1},
    prev: ["Attack +1", "HP +3"],
    effect: "Grants HP+3, Atk+1."
  },
  {
    name: "HP/Atk 2",
    spCost: 200,
    icon: "36-12",
    stats: {hp: 4, atk: 2},
    prev: ["HP/Atk 1"],
    last: true,
    effect: "Grants HP+4, Atk+2."
  },
  {
    name: "HP/Def 1",
    spCost: 100,
    icon: "19-8",
    stats: {hp: 3, def: 1},
    prev: ["HP +3", "Defense +1"],
    effect: "Grants HP+3, Def+1."
  },
  {
    name: "HP/Def 2",
    spCost: 200,
    icon: "19-9",
    stats: {hp: 4, def: 2},
    prev: ["HP/Def 1"],
    last: true,
    effect: "Grants HP+4, Def+2."
  },
  {
    name: "HP/Res 1",
    spCost: 100,
    icon: "31-1",
    stats: {hp: 3, res: 1},
    prev: ["Resistance +1", "HP +3"],
    effect: "Grants HP+3, Res+1."
  },
  {
    name: "HP/Res 2",
    spCost: 200,
    icon: "31-2",
    stats: {hp: 4, res: 2},
    prev: ["HP/Res 1"],
    last: true,
    effect: "Grants HP+4, Res+2."
  },
  {
    name: "HP/Spd 1",
    spCost: 100,
    icon: "22-11",
    stats: {hp: 3, spd: 1},
    prev: ["HP +3", "Speed +1"],
    effect: "Grants HP+3, Spd+1."
  },
  {
    name: "HP/Spd 2",
    spCost: 200,
    icon: "22-12",
    stats: {hp: 4, spd: 2},
    prev: ["HP/Spd 1"],
    last: true,
    effect: "Grants HP+4, Spd+2."
  },
  {
    name: "Heavy Blade 1",
    spCost: 60,
    icon: "15-11",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 2",
    spCost: 120,
    icon: "15-12",
    prev: ["Heavy Blade 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 3",
    spCost: 240,
    icon: "16-0",
    prev: ["Heavy Blade 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Iote's Shield",
    spCost: 200,
    icon: "4-4",
    include: [{moveType:"Flying"}],
    last: true,
    effect: "Neutralizes \"effective against\" bonuses.",
  },
  {
    name: "Kestrel Stance 1",
    spCost: 100,
    icon: "43-3",
    prev: ["Fierce Stance 1"],
    effect: "Grants Atk/Spd+2 during combat when this unit is attacked."
  },
  {
    name: "Kestrel Stance 2",
    spCost: 200,
    icon: "43-4",
    prev: ["Kestrel Stance 1"],
    last: true,
    effect: "Grants Atk/Spd+4 during combat when this unit is attacked."
  },
  {
    name: "Laws of Sacae",
    spCost: 300,
    icon: "41-7",
    include: [{name: "Lyn (Legendary Heroes)"}],
    effect: "If foe initiates combat and the number of allies within 2 spaces ≥ 2, grants Atk/Spd/Def/Res+4 during combat."
  },
  {
    name: "Life and Death 1",
    spCost: 50,
    icon: "1-9",
    stats: {atk: 3, spd: 3, def: -3, res: -3},
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd+3. Inflicts Def/Res-3."
  },
  {
    name: "Life and Death 2",
    spCost: 100,
    icon: "1-10",
    stats: {atk: 4, spd: 4, def: -4, res: -4},
    prev: ["Life and Death 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd+4. Inflicts Def/Res-4."
  },
  {
    name: "Life and Death 3",
    spCost: 200,
    icon: "1-11",
    stats: {atk: 5, spd: 5, def: -5, res: -5},
    prev: ["Life and Death 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Spd+5. Inflicts Def/Res-5."
  },
  {
    name: "Mirror Stance 1",
    spCost: 100,
    icon: "38-7",
    prev: ["Warding Stance 1"],
    effect: "Grants Atk/Res+2 during combat when this unit is attacked."
  },
  {
    name: "Mirror Stance 2",
    spCost: 200,
    icon: "38-8",
    prev: ["Mirror Stance 1"],
    last: true,
    effect: "Grants Atk/Res+4 during combat when this unit is attacked."
  },
  {
    name: "Mirror Strike 1",
    spCost: 120,
    icon: "23-0",
    prev: ["Warding Blow 1", "Death Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Res+2 during combat if unit initiates combat."
  },
  {
    name: "Mirror Strike 2",
    spCost: 240,
    icon: "23-1",
    prev: ["Mirror Strike 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Res+4 during combat if unit initiates combat."
  },
  {
    name: "Ostian Counter",
    spCost: 350,
    icon: "48-0",
    include: [{name:"Hector (Arrival of the Brave)"}],
    effect: "Unit can counterattack regardless of foe's range. If foe initiates combat, grants Atk/Def+4 during combat."
  },
  {
    name: "R Duel Flying 1",
    spCost: 70,
    icon: "50-9",
    stats: {hp: 3},
    include: [{colorType: "Red", moveType: "Flying"}],
    effect: "Grants HP+3. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "R Duel Flying 2",
    spCost: 140,
    icon: "50-10",
    stats: {hp: 4},
    include: [{colorType: "Red", moveType: "Flying"}],
    effect: "Grants HP+4. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "R Duel Flying 3",
    spCost: 300,
    icon: "50-11",
    stats: {hp: 5},
    include: [{colorType: "Red", moveType: "Flying"}],
    effect: "Grants HP+5. If unit is 5★ and level 40 and unit's stats total less than 160, treats unit's stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.)"
  },
  {
    name: "Resistance +1",
    spCost: 30,
    icon: "1-3",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Resistance +2",
    spCost: 60,
    icon: "1-4",
    stats: {res: 2},
    prev: ["Resistance +1"],
    effect: "Grants Res+2."
  },
  {
    name: "Resistance +3",
    spCost: 120,
    icon: "1-5",
    stats: {res: 3},
    prev: ["Resistance +2"],
    last: true,
    effect: "Grants Res+3."
  },
  {
    name: "Sorcery Blade 1",
    spCost: 60,
    icon: "53-10",
    include: [{moveType:"Infantry"}],
    exclude: [{weaponType: "Tome"},{weaponType:"Breath"}],
    effect: "At start of combat, if unit's HP = 100% and unit is adjacent to a magic ally, calculates damage using the lower of foe's Def or Res."
  },
  {
    name: "Sorcery Blade 2",
    spCost: 120,
    icon: "53-11",
    prev: ["Sorcery Blade 1"],
    include: [{moveType:"Infantry"}],
    exclude: [{weaponType: "Tome"},{weaponType:"Breath"}],
    effect: "At start of combat, if unit's HP ≥ 50% and unit is adjacent to a magic ally, calculates damage using the lower of foe's Def or Res."
  },
   {
    name: "Sorcery Blade 3",
    spCost: 240,
    icon: "53-12",
    prev: ["Sorcery Blade 2"],
    last: true,
    include: [{moveType:"Infantry"}],
    exclude: [{weaponType: "Tome"},{weaponType:"Breath"}],
    effect: "At start of combat, if unit is adjacent to a magic ally, calculates damage using the lower of foe's Def or Res."
  },
  {
    name: "Spd/Def 1",
    spCost: 80,
    icon: "24-11",
    stats: {spd: 1, def: 1},
    prev: ["Speed +1", "Defense +1"],
    effect: "Grants Spd/Def+1."
  },
  {
    name: "Spd/Def 2",
    spCost: 160,
    icon: "24-12",
    stats: {spd: 2, def: 2},
    prev: ["Spd/Def 1"],
    last: true,
    effect: "Grants Spd/Def+2."
  },
  {
    name: "Spd/Def Bond 1",
    spCost: 60,
    icon: "34-9",
    effect: "Grants Spd/Def+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Def Bond 2",
    spCost: 120,
    icon: "34-10",
    prev: ["Spd/Def Bond 1"],
    effect: "Grants Spd/Def+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Def Bond 3",
    spCost: 240,
    icon: "34-11",
    prev: ["Spd/Def Bond 2"],
    last: true,
    effect: "Grants Spd/Def+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Res 1",
    spCost: 80,
    icon: "23-11",
    stats: {spd: 1, res: 1},
    prev: ["Speed +1", "Resistance + 1"],
    effect: "Grants Spd/Res+1."
  },
  {
    name: "Spd/Res 2",
    spCost: 160,
    icon: "23-12",
    prev: ["Spd/Res 1"],
    stats: {spd: 2, res: 2},
    last: true,
    effect: "Grants Spd/Res+2."
  },
  {
    name: "Spd/Res Bond 1",
    spCost: 60,
    icon: "39-7",
    effect: "Grants Spd/Res+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Res Bond 2",
    spCost: 120,
    icon: "39-8",
    prev: ["Spd/Res Bond 1"],
    effect: "Grants Spd/Res+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Res Bond 3",
    spCost: 240,
    icon: "39-9",
    prev: ["Spd/Res Bond 2"],
    last: true,
    effect: "Grants Spd/Res+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Speed +1",
    spCost: 30,
    icon: "0-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Speed +2",
    spCost: 60,
    icon: "0-11",
    stats: {spd: 2},
    prev: ["Speed +1"],
    effect: "Grants Spd+2."
  },
  {
    name: "Speed +3",
    spCost: 120,
    icon: "0-12",
    stats: {spd: 3},
    prev: ["Speed +2"],
    last: true,
    effect: "Grants Spd+3."
  },
  {
    name: "Steady Blow 1",
    spCost: 120,
    icon: "26-2",
    prev: ["Armored Blow 1", "Darting Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit initiates combat, unit granted Spd/Def+2 during battle."
  },
  {
    name: "Steady Blow 2",
    spCost: 240,
    icon: "26-3",
    exclude: [{weaponType:"Staff"}],
    prev: ["Steady Blow 1"],
    last: true,
    effect: "If unit initiates combat, unit granted Spd/Def+4 during battle."
  },
  {
    name: "Steady Breath",
    spCost: 240,
    icon: "26-1",
    prev: ["Steady Stance 2"],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}, {weaponType:"Bow"}, {weaponType:"Dagger"}, {weaponType:"Tome"}, {weaponType:"Staff"}],
    last: true,
    effect: "If attacked, unit granted Def+4 during combat; also gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Steady Posture 1",
    spCost: 100,
    icon: "49-6",
    prev: ["Steady Stance 1"],
    effect: "Grants Spd/Def+2 during combat when this unit is attacked."
  },
  {
    name: "Steady Posture 2",
    spCost: 200,
    icon: "49-7",
    prev: ["Steady Posture 1"],
    last: true,
    effect: "Grants Spd/Def+4 during combat when this unit is attacked."
  },
  {
    name: "Steady Stance 1",
    spCost: 50,
    icon: "25-11",
    effect: "Grants Def+2 during combat when this unit is attacked."
  },
  {
    name: "Steady Stance 2",
    spCost: 100,
    icon: "25-12",
    prev: ["Steady Stance 1"],
    effect: "Grants Def+4 during combat when this unit is attacked."
  },
  {
    name: "Steady Stance 3",
    spCost: 200,
    icon: "26-0",
    prev: ["Steady Stance 2"],
    last: true,
    effect: "Grants Def+6 during combat when this unit is attacked."
  },
  {
    name: "Steady Stance 4",
    spCost: 300,
    icon: "53-9",
    prev: ["Steady Stance 3"],
    last: true,
    effect: "If foe initiates combat, grants Def+8 during combat and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)"
  },
  {
    name: "Sturdy Blow 1",
    spCost: 120,
    icon: "18-5",
    prev: ["Death Blow 1", "Armored Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Def+2 during combat if unit initiates combat."
  },
  {
    name: "Sturdy Blow 2",
    spCost: 240,
    icon: "18-6",
    prev: ["Sturdy Blow 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Def+4 during combat if unit initiates combat."
  },
  {
    name: "Sturdy Impact",
    spCost: 300,
    icon: "56-2",
    prev: ["Sturdy Blow 2"],
    exclude: [{weaponType:"Staff"}, {moveType:"Cavalry"}, {moveType:"Armored"}],
    last: true,
    effect: "If unit initiates combat, grants Atk+6, Def+10 during combat and foe cannot make a follow-up attack."
  },
  {
    name: "Sturdy Stance 1",
    spCost: 100,
    icon: "38-1",
    prev: ["Fierce Stance 1"],
    effect: "Grants Atk/Def+2 during combat when this unit is attacked."
  },
  {
    name: "Sturdy Stance 2",
    spCost: 200,
    icon: "38-2",
    prev: ["Sturdy Stance 1"],
    last: true,
    effect: "Grants Atk/Def+4 during combat when this unit is attacked."
  },
  {
    name: "Svalinn Shield",
    spCost: 200,
    icon: "4-3",
    include: [{moveType:"Armored"}],
    last: true,
    effect: "Neutralizes \"effective against\" bonuses."
  },
  {
    name: "Swift Sparrow 1",
    spCost: 120,
    icon: "14-7",
    prev: ["Death Blow 1", "Darting Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit initiates combat, unit granted Atk/Spd+2 during battle."
  },
  {
    name: "Swift Sparrow 2",
    spCost: 240,
    icon: "14-8",
    prev: ["Swift Sparrow 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit initiates combat, unit granted Atk/Spd+4 during battle."
  },
  {
    name: "Swift Stance 1",
    spCost: 100,
    icon: "39-5",
    prev: ["Darting Stance 1"],
    effect: "Grants Spd/Res+2 during combat when this unit is attacked."
  },
  {
    name: "Swift Stance 2",
    spCost: 200,
    icon: "39-6",
    prev: ["Swift Stance 1"],
    last: true,
    effect: "Grants Spd/Res+4 during combat when this unit is attacked."
  },
  {
    name: "Swift Strike 1",
    spCost: 120,
    icon: "24-0",
    prev: ["Darting Blow 1", "Warding Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit initiates combat, unit granted Spd/Res+2 during battle."
  },
  {
    name: "Swift Strike 2",
    spCost: 240,
    icon: "24-1",
    prev: ["Swift Strike 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit initiates combat, unit granted Spd/Res+4 during battle."
  },
  {
    name: "Triangle Adept 1",
    spCost: 50,
    icon: "3-10",
    exclude: [{"colorType":"Neutral"}],
    effect: "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage."
  },
  {
    name: "Triangle Adept 2",
    spCost: 100,
    icon: "3-11",
    prev: ["Triangle Adept 1"],
    exclude: [{"colorType":"Neutral"}],
    effect: "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage."
  },
  {
    name: "Triangle Adept 3",
    spCost: 200,
    icon: "3-12",
    prev: ["Triangle Adept 2"],
    exclude: [{"colorType":"Neutral"}],
    last: true,
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Warding Blow 1",
    spCost: 50,
    icon: "2-8",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Res+2 during combat if unit initiates attack."
  },
  {
    name: "Warding Blow 2",
    spCost: 100,
    icon: "2-9",
    prev: ["Warding Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Res+4 during combat if unit initiates attack."
  },
  {
    name: "Warding Blow 3",
    spCost: 200,
    icon: "2-10",
    prev: ["Warding Blow 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Res+6 during combat if unit initiates attack."
  },
  {
    name: "Warding Breath",
    spCost: 240,
    icon: "36-2",
    prev: ["Warding Stance 2"],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}, {weaponType:"Bow"}, {weaponType:"Dagger"}, {weaponType:"Tome"}, {weaponType:"Staff"}],
    last: true,
    effect: "Grants Res+4 during combat if unit is attacked. Also grants Special cooldown charge +1 per attack. (Does not stack. Only highest value applied.)"
  },
  {
    name: "Warding Stance 1",
    spCost: 50,
    icon: "30-5",
    effect: "Grants Res+2 during combat when this unit is attacked."
  },
  {
    name: "Warding Stance 2",
    spCost: 100,
    icon: "30-6",
    prev: ["Warding Stance 1"],
    effect: "Grants Res+4 during combat when this unit is attacked."
  },
  {
    name: "Warding Stance 3",
    spCost: 200,
    icon: "30-7",
    prev: ["Warding Stance 2"],
    last: true,
    effect: "Grants Res+6 during combat when this unit is attacked."
  },
  {
    name: "Water Boost 1",
    spCost: 50,
    icon: "23-2",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+2 during combat."
  },
  {
    name: "Water Boost 2",
    spCost: 100,
    icon: "23-3",
    prev: ["Water Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+4 during combat."
  },
  {
    name: "Water Boost 3",
    spCost: 200,
    icon: "23-4",
    prev: ["Water Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+6 during combat."
  },
  {
    name: "Wind Boost 1",
    spCost: 50,
    icon: "17-11",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+2 during combat."
  },
  {
    name: "Wind Boost 2",
    spCost: 100,
    icon: "17-12",
    prev: ["Wind Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+4 during combat."
  },
  {
    name: "Wind Boost 3",
    spCost: 200,
    icon: "18-0",
    prev: ["Wind Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+6 during combat."
  }
];
