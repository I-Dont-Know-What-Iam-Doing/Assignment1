document.addEventListener("DOMContentLoaded", () => {
  const characterButtons = document.querySelectorAll(".filterDiv10");
  const charNameElement = document.getElementById("charName");
  const charDescElement = document.getElementById("charDesc");
  const charBuild = document.getElementById("charBuild")
  const characterGrid = document.getElementById("characterGrid");


  const descriptions = {
      "SS Tier": "The best of the best in the game. These characters are must-haves and will greatly make your gameplay experience easier.",
      "S Tier": "Characters that are very strong in their respective roles. Most of these characters offer unique mechanics or have strong Traces that make them better than the rest.",
      "A Tier": "Good characters who can perform even better when given the right amount of investment. They are considered the base standard of a good character.",
      "B Tier": "Characters who are below average in their respective role. These characters require a ton of investment to make them viable in harder content.",
      "C Tier": "Characters with limited combat utility. These characters are greatly overshadowed by everyone else in their role.",
      "Trailblazer - Harmony": "Trailblazer (Imaginary) is a free-to-play Support that specializes in Break Effect buffs. Their Ultimate can have allies deal Super Break DMG to Weakness Broken enemies. <br> If you have units that scale on the Break Effect stat, we recommend building the Imaginary Trailblazer.",
      "Trailblazer - Destruction": "Insane DPS in patch 1.1",
      "Trailblazer - Preservation": "Insane taunt in patch 1.2",
      "Dan Heng - Imbibitor Lunae": "Dan Heng - Imbibitor Lunae is an outstanding DPS who excels in both single target and AoE DMG. We encourage players to practice SP Management to fully enhance Imbibitor Lunae's Basic Attacks consistently. <br> Get Dan Heng - Imbibitor Lunae if you want another DPS and don't mind spending a lot of SP in combat.",
      "Dan Heng": "Dan Heng is a free playable character you can use to take down Elite enemies and bosses who are weak to Wind. As a Hunt unit, Dan Heng may struggle in scenarios where there are multiple enemies or against Elite enemies that can summon more foes.",
      "March 7th": "March 7th plays a vital role in Remembrance teams for Simulated Universe since her Ultimate can apply Frozen onto enemies. Combined with the Dissociation effect in the Path of Remembrance, March can easily help you clear content such as Swarm Disaster and Gold and Gears.",
      "March 7th - The Hunt": "March 7th (Hunt) is a free-to-play DPS character that can designate one of her allies as her Shifu. Depending on the Shifu's Path, her Basic ATK and Enhanced Basic ATK will receive additional effects. These effects can be increased damage or increased Break Efficiency on her attacks, which lets her become a CRIT DPS or a Break DPS. We highly recommend investing in March 7th's Hunt Variant if you need a versatile DPS.",
      "Welt": "Welt is a Support unit that is capable of dealing a decent amount of Toughness DMG and can Slow enemies down. He can also delay an enemy's turn using his Ultimate, giving more chances for your other units to attack them. <br> If you want a Hybrid Support unit that can deal DMG and delay enemy turns, Welt is worth pulling for.",
      "Himeko": "Himeko is a great 5-star character if you need a Fire damage dealer. She's an excellent Main DPS when fighting multiple enemies, but falls a bit behind when it comes to fighting bosses or in Single Target situations. <br> She is also a good Sub-DPS thanks to her follow-up attacks!",
      "Boothill": "Boothill is a Hunt character who relies on Break Effect to dish out single target burst damage. The Standoff state in his kit is great for single-target scenarios, especially against bosses. Thanks to his Traces, he is also easy to build. <br> Boothill can easily inflict Weakness Break through his Talent. It also allows him to deal Break DMG if the enemy is Weakness Broken, which is amazing on a Break DPS. He can also apply Physical Weakness on his own. <br> Boothill's ability to apply Physical Weakness on any enemy makes him an amazing unit for players who have very few DPS characters because it basically lets him ignore the recommended elements for battles.",
      "Acheron": "Acheron is a remarkably powerful DPS that can annihilate enemies with her powerful Ultimate that can ignore weakness type and does not have an energy cost. <br> If you are looking for a very strong Hypercarry that can also perform well against enemies not weak to Lightning, then Acheron is a must-pull!",
      "Arlan": "Arlan is a DPS unit that doesn't need to use Skill Points and becomes stronger after losing a ton of HP. Despite his SP-Friendly playstyle, his damage output is very lackluster compared to other DPS units. <br> While it's possible to complete endgame content using Arlan, we recommend investing in other characters for a smoother playthrough.",
      "Firefly": "Firefly is a powerful Destruction DPS who can deal a huge amount of Break DMG in her Complete Combustion state. <br> Firefly's attacks will deplete her own HP, but it can be restored during Complete Combustion. <br> Even if an enemy isn't weak to Fire, Firefly can still reduce their Toughness and can apply the Fire Weakness through the use of her Ultimate. This allows her to easily Weakness Break an enemy regardless of their Weakness Type. <br> With absurd Break DMG, self-survival, and the ability to apply Fire Weakness, Firefly is an amazing DPS unit to pull for. She is a great unit, especially for those who want a DPS to fight against any element.",
      "Feixiao": "Feixiao is a strong Follow-Up Attack DPS who deals damage through her Ultimate and Follow-Up Attacks. She gains her Ultimate through Flying Aureus stacks, which she gets after a certain number of ally attacks. <br> Her Ultimate's DMG also counts as Follow-Up Attack DMG, so she synergizes with Follow-Up Attack buffs and other FuA characters since they attack frequently. <br> Pull for Feixiao if you need a Wind DPS that works well with other FuA characters in your team or a character that decimates enemies in single-target scenarios.",
      "Yunli": "Yunli is strong Follow-up DPS who can deal a lot of damage with her Counterattacks, especially when her Ultimate is activated. You must activate Yunli Ultimate before the enemy attacks to effectively dish out a Counterattack. <br> Pull for Yunli if you love Counterattacks or you need a Physical DPS in your roster. Yunli can work well across all endgame content, so she's worth pulling for.",
      "Ruan Mei": "Ruan Mei is a top-tier support who can buff the entire party's DMG, SPD, and Break Efficiency. Ruan Mei can also delay an enemy's recovery after Weakness Break and deal a decent amount of bonus DMG. <br> Ruan Mei is the best-in-slot teammate in a lot of team comps and is a must get for the utility she provides.",
      "Robin": "Robin is a unique Harmony character who can provide strong buffs to the party such as a party-wide DMG boost and CRIT DMG buff, and her Ultimate can immediately make allies take action. <br> Her Concerto state also brings a lot to the table, such as an ATK buff that scales based on her ATK and the extra damage she deals to enemies allies have attacked. <br> If you need a universal Harmony character that brings a lot of offensive utility and buffs or have a Follow-up attack team, then Robin is worth pulling for.",
      "Sparkle": "Sparkle is a very useful support for DPS units who consume a lot of Skill Points. Sparkle can Advance a character's turn forward and increase the entire party's DMG as long as an allied unit consumes a Skill Point. <br> Pull for Sparkle if you want to enhance your Mono-Quantum team or if you need a unit that can provide an abundance of Skill Points and provide turn advancement.",
      "Aventurine": "Aventurine is a Sustain unit who can provide strong shields to the party and deal a decent amount of DMG to enemies. Both his shields and DMG output can increase depending on the amount of DEF stats he has. <br> If you have a Follow-up attack team or need another sustain unit that can also deal DMG, Aventurine is great to pull for.",
      "Lingsha": "Lingsha is a healer that can summon Fuyuan on the field. When Fuyuan takes action, Lingsha can unleash a Follow-up attack that can deal damage to enemies and heal all allies. <br> Lingsha's Ultimate can heal all allies and inflict the Befog debuff on an enemy, which increases the Break DMG they take from your characters. <br> Pull for Lingsha if you want an upgrade to your Break Effect teams or are in need of another Sustain unit.",
      "Bronya": "Bronya is one of the most useful characters in the game so you should definitely get her if you have the chance. The only problem is that Bronya isn't featured in any banner yet so there's no sure-fire way to get her even with the pity system in play.",
      "Tingyun": "Tingyun is a Lightning Harmony character that can provide offensive buffs and restore the Energy of a single ally. Her kit is focused on supporting a DPS character and enabling them as a hyper carry. She is a universal character as well and fits into almost any team. <br> If you find her kit interesting or need a Lightning support character that can provide offensive buffs for your DPS, then Tingyun is a great choice.",
      "Huohuo": "Huohuo's overall healing is way above average since her Skill can heal multiple characters while also providing a bit of healing outside of her turn. More importantly, Huohuo can also provide Energy Regeneration and ATK buffs from her Ultimate. <br> Compared to other top-tier Defensive Support characters, you may find Huohuo unable to match in terms of raw sustain power, but she can make up for it by increasing the party's damage output. After all, you won't take damage if the enemy is already dead.",
      "Fu Xuan": "Fu Xuan is an excellent defensive support who can minimize the DMG taken by other party members and transfer it to herself. Despite the fact that Fu Xuan cannot provide shields, she can still easily keep the team alive. <br> Get Fu Xuan if you need a defensive support unit with some CRIT buffs in your collection.",
      "Gepard": "Gepard is a great defensive unit that can provide shields for your party and take heavy hits. As a support unit, he is quite versatile and can be slotted into different kinds of team comps. However, Gepard is a Standard 5-Star Character, so he does not get rate-up probabilities. <br> The only way to guarantee getting Gepard is to claim him from the 5-Star Selector after doing 300 pulls in the Stellar Warp. If you need another shielder, consider going with Gepard as your chosen 5-Star!",
      "Bailu": "Since Bailu is an Abundance character, it is usually worth investing in her since you need healers in more difficult parts of the game. Bailu's heals are decent and her Talent lets her prevent an ally from being knocked down, which can come in clutch in dire situations. <br> However, what Bailu's kit lacks is a cleanse and her Skill's extra healing for allies is randomly targeted. Other healers like Lynx can cleanse debuffs, which is often vital for enemies that can inflict debuffs on your party. <br> If Bailu's your only healer or you need another healer for your second team, she's a good character to invest in.",
      "Rappa": "Rappa is a Erudition DPS who excels in dealing a lot of Break DMG on multiple enemies with her Sealform state. While in the Sealform state, Rappa gains increased Break Efficency and Break Effect. <br> Despite not having the ability to implant a missing Weakness, Rappa can reduce the Toughness of enemies by using her Enhanced Basic ATK in her Sealform state. <br> Pull for Rappa if you need a Break DPS who specializes in AoE content. Rappa will work effectively in Pure Fiction but will struggle against Elite enemies.",
      "Dr. Ratio": "Dr. Ratio is one of the most powerful units in terms of dealing single-target DMG. His strong Follow-up attacks are most effective against Bosses and can become a lot stronger if enemies are affected by debuffs. <br> Dr. Ratio is worth building if you need a strong boss-killer who specializes in Follow-up Attacks!",
      "Seele": "Seele is one of the best DPS characters in the game. She deals a lot of single-target damage, but she's also a semi-AoE damage dealer because of her Talent which lets her take an extra turn when she kills an enemy. If you need a Hunt character that excels in single-target fights, you can pull for Seele.",
      "Blade": "Blade is an amazing damage dealer who's tailored more for AoE damage. He also does not need to use a lot of SP, which makes your team comps more compatible with units who want to spam their Skills. Get Blade if you need a great AoE damage dealer!",
      "Jingliu": "Jingliu is a powerful Ice DPS who can become stronger by entering a special state and consuming the party's HP. Jingliu is also a Skill Point-friendly DPS as she doesn't need to use any of it while in her special state. <br> If you want a strong AoE DPS who can deal a lot of Ice DMG or don't mind hurting your own party members to become stronger, go ahead and pull for Jingliu!",
      "Kafka": "Kafka is a DoT damage dealer who is best paired with another DoT character to maximize her utility. Though she could be played as a CRIT DPS or Solo DPS, this will go against her greatest potential. <br> Pull for Kafka if you need a Lightning DPS and if you enjoy Damage-over-Time gameplay!",
      "Black Swan": "Black Swan is one of the strongest DoT units in-game whose game plan is to simply apply Arcana onto enemies. Black Swan's DoT becomes a lot stronger the more Arcana stacks an enemy has accumulated. <br> Pull for Black Swan if you want to give a huge upgrade to your DoT teams, especially if you have Kafka.",
      "Jade": "Jade is an amazing AoE Follow-up DPS that is amazing for fights like Pure Fiction where you are constantly bombarded with a lot of enemies. <br> However, a big drawback for her is requiring a second DPS for her to be partnered up with. Ideally, this 2nd DPS also needs to be an AoE DPS or is able to attack multiple times for Jade to take full advantage of her mechanics. <br> Pull for Jade if you already have a strong AoE DPS or a DPS who can attack multiple times and to improve your AoE team. She is amazing for Pure Fiction but doesn't do well for Single-Target or even Two-Target scenarios.",
      "Argenti": "Argenti is very powerful against multiple targets thanks to having one of the strongest Ultimates in-game. He does require Supports who can help him regenerate energy faster as his Ultimate needs a ton of energy to unleash its full power. <br> If you want a simple but strong DPS who specializes in taking out a lot of enemies, pull for the beauty and grace known as Argenti!",
      "Topaz": "Topaz is a great Sub-DPS who can deal a lot of single-target DMG and increase the entire party's Follow-up Attack DMG. <br> If you have DPS characters who specialize in Follow-up Attacks or if you want a cute Trotter that can help you look for treasure, Topaz can be amazing to have in your collection!",
      "Moze": "Moze is a Hunt unit who specializes in dishing out single-target DMG through Follow-up attacks. Moze can use his Skill to cast Prey on an enemy. When allies attack the Preyed enemy, Moze can unleash a Follow-up attack. <br> Most of Moze's DMG will occur outside of his turn, and his Prey effect can increase the Follow-up attack DMG taken by the enemy. This makes him an excellent Sub-DPS on Follow-up attack teams. <br> If you need a Sub-DPS for your Follow-up attack teams, then go ahead and pull for Moze and his Eidolons.",
      "Silver Wolf": "Pull for Silver Wolf if you already have a strong Main DPS. She can make your team comps more flexible by enabling your strongest DPS to work in any fight through careful planning of the Element or Combat Type found in your party.",
      "Jiaoqiu": "Jiaoqiu is a Fire Nihility character that can increase the overall DMG enemies take through his Ashen Roast debuff and boost the Ultimate DMG enemies take through his Ultimate. <br> His kit is focused on debuffing enemies and enabling DPS characters to deal increased DMG to them. He can fit in DoT teams as a support and even better in teams where the DPS deals a lot of damage through their Ultimate like Acheron. <br> If you find his kit interesting or need a Nihility character that can increase the damage enemies take, then Jiaoqiu is a great choice.",
      "Pela": "Pela is one of the best 4-star units thanks to her SP-Positive playstyle and her ability to debuff all enemies' DEF. Pela can also remove enemy buffs with her Skill, which can be beneficial against enemies such as the Shape Shifter and Mara-Struck Soldiers!",
      "Asta": "Asta is an outstanding free Support unit that can increase your party's SPD and ATK. Her Skill is especially useful in taking down enemies with a Fire weakness. <br> Asta is worth investing in since she's a character who can help you in both the early-game and the end-game content.",
      "Hanya": "Hanya is a Harmony character who can boost an ally's SPD and ATK using her kit. She can also apply Burden to enemies which restores SP when allies attack enemies with it. She is a good single-target buffer and Burden she casts on enemies can be very valuable. <br> If you need better SP management in your party or your main DPS is SP hungry, like Imbibitor Lunae and Seele, Hanya would be a good character to pair them up with.",
      "Gallagher": "Gallagher is a Break Effect sustain unit that can heal allies by inflicting a Besotted debuff on the enemy. Allies who attack the Besotted enemy will have their HP restored. <br> If you have units that benefit from enemies inflicted with debuffs or need a sustain unit who scales on the Break Effect stat, go ahead and pull for Gallagher!",
      "Luocha": "Luocha can act as a solo healer for any F2P Team. This lets your second team comp have a Natasha or March 7th on the team to act as a defensive support with the ability to cleanse debuffs.",
      "Lynx": "Lynx is an excellent healer who can heal and increase the maximum HP of her party while also increasing the aggro of Preservation and Destruction characters. Her Ultimate can cleanse a debuff from all allies and this alone makes her very valuable. <br> Additionally, Lynx is a 4-Star character which means she would be easier to get than a 5-Star. We highly suggest pulling for Lynx if you need another healer who can fit in any team. Her AoE cleanses and her strong heals can help your party survive in any situation.",
      "Clara": "Clara is a tanky DPS who specializes in counterattacks and gets stronger when she uses her Ultimate. Clara relies on taking hits from enemies to deal as much DMG as possible. <br> Pull for Clara if you need a hand to take down DPS or if you're into her Follow-up attack playstyle.",
      "Guinaifen": "Guinaifen is a Burn DoT specialist who can easily apply Burn to multiple enemies and trigger the DoT instantly with her Ultimate. Guinaifen can also increase the DMG taken by enemies affected by Burn. <br> Only pull for Guinaifen if you need a DoT unit in your collection that specializes in Fire DMG and AoE Burns.",
      "Jing Yuan": "Jing Yuan is a strong DPS character who can deal a lot of AoE DMG through his Lightning-Lord. He can also deal a decent amount of DMG against a single target thanks to the Lightning-Lord's multiple hits. <br> The only downside to using Jing Yuan is that if he gets affected by a Crowd Control debuff, his Lightning-Lord will not move. Despite this, Jing Yuan is still a strong unit that can demolish multiple enemies.",
      "Qingque": "Qingque is a Quantum DPS that uses matching tiles to maximize her DMG potential. Even though her kit is luck-reliant, she still shines in situations where there are a lot of enemies since her Enhanced Basic ATK and Ultimate damage multiple targets. <br> If you find her kit interesting or need a Quantum DPS that can deal with multiple targets, then Qingque can fit in your party.",
      "Herta": "Herta is great for game modes such as Pure Fiction and Simulated Universe thanks to her AoE Follow-up Attacks. While her DMG is lacking against tougher enemies, Herta will have no problem defeating waves of smaller enemies. <br> If you want another Erudition DPS that can help you farm in Calyxes and beat Pure Fiction, Herta is worth building for.",
      "Xueyi": "Xueyi is a DPS character who focuses on utilizing Break Effect, reducing enemy Toughness, and using Karma stacks for follow-up attacks. She's a unique character because her damage scales with Break Effect. <br> If you want to try out a unique DPS character with an interesting kit or want to try using Break Effect teams, then Xueyi would be a good character to pull and try out.",
      "Serval": "Serval is a Lightning DPS that deals DoT damage through Shock and extends them through her Ultimate. Her Skill and Ultimate can both hit multiple enemies, which makes her perform well in stages that have multiple enemies per wave. <br> If you find her kit interesting or need a Lightning DPS that can deal with multiple targets and inflict Shock, then Serval would be a good DPS choice.",
      "Hook": "Hook is a strong 4-star DPS unit who specializes in both dealing DMG and inflicting Burn DoTs on enemies. Despite being a Destruction unit, Hook's single-target DMG is good against Elite enemies who are weak to Fire. <br> If you're just starting in the game and in need of a DPS who can defeat both Elite enemies and mobs, go ahead and pull for Hook!",
      "Yanqing": "Yanqing is an Ice Main DPS who should avoid taking DMG to keep his Soulsteel Sync up and dish out a ton of DMG. Yanqing will struggle in content with multiple enemies like Pure Fiction or against enemies who can attack all party members. <br> If you find his kit interesting or need an Ice Main DPS that specializes in dealing with single targets, then Yanqing would be a good choice.",
      "Misha": "Misha is a Destruction 4-star DPS whose gameplan focuses on his Ultimate. His Ultimate has a chance to Freeze enemies and can become stronger the more Skill Points you use. <br> If you need a DPS unit with a powerful Ultimate against a single target and capable of Freezing enemies, go ahead and get a copy of Misha!",
      "Luka": "Luka is a great character to have if you want another DoT party member in your collection. Luka can also provide extra utilities such as removing an enemy's buff with his Skill and increasing the DMG taken by an enemy with his Ultimate!",
      "Sampo": "Sampo is a Wind Sub-DPS that relies on inflicting Wind Shear to deal DoT damage. His kit is focused on dealing DoT damage and amplifying it through the debuff his Ultimate inflicts, which is DoT Vulnerability. <br> If you find his kit interesting or need a Wind DoT character that can increase the DoT damage taken by enemies, then Sampo would be a good choice.",
      "Sushang": "Sushang is a Physical DPS that deals damage through Sword Stance and gains buffs when enemies are Weakness Broken. Her Ultimate gives her another turn and Sword Stance stacks, which she can utilize to deal even more DMG. <br> If you find her kit interesting or need a Physical DPS that can deal massive damage to single targets, then Sushang would be nice to pick up.",
      "Yukong": "Yukong is a strong CRIT buffer in the early game especially if you just started the game. The downside is that her buffs only affect allies that come after her in the turn order, so some SPD tuning should be done.",
      "Natasha": "Natasha will likely be your first Healer unit when you start the game. Natasha is a great character for the early-game who is capable of keeping your party alive in all game modes. <br> If you still don't have a healer, we recommend investing into Natasha for a smoother playthrough.",

  };

  const builds = {
      "Trailblazer - Harmony": "The Imaginary Trailblazer should be built with a lot of Break Effect since most of their DMG comes from attacking Weakness Broken enemies. <br> This becomes especially great when the Imaginary Trailblazer has their 4th Eidolon unlocked since it allows them to increase the party's Break Effect based on their own Break Effect. <br> It's also important for them to have at least 145 SPD to activate the effect from the Talia: Kingdom of Banditry set.",
      "Trailblazer - Destruction": "Scholar Lost in Erudition is the Physical Trailblazer's best Relic set since it provides CRIT Rate and boost the damage of their Skill and Ultimate, which synergizes with their kit. <br> Rutilant Arena will increase the Trailblazer's Skill DMG if they have at least 70% CRIT Rate.",
      "Trailblazer - Preservation": "You can build the Fire Trailblazer either with all DEF% main stats for a stronger shield, or with SPD and Energy Regeneration for frequent Ultimate usage. <br> Fire Trailblazer should have at least 30% Effect RES to activate the Broken Keel's party-wide CRIT DMG buff. Having Effect Hit Rate is also welcome since it increases the chances for the Fire Trailblazer to successfully taunt enemies.",
      "Dan Heng - Imbibitor Lunae": "This Imbibitor Lunae build focuses on dealing tons of Basic ATK DMG through CRIT DMG and ATK stats. <br> Since Imbibitor Lunae stacks CRIT Rate from his traces and Rutilant Arena, using a CRIT DMG Body would be better to optimally increase his overall DMG. With the Wastelander of Banditry Desert, you can get more CRIT hits by attacking enemies who are Imprisoned. <br> Imbibitor Lunae should at least have 70% CRIT Rate to activate the Rutilant Arena set. Imbibitor Lunae will also get a bit of CRIT DMG from attacking Imaginary Weak enemies, so take this into account. <br> If Imbibitor Lunae is paired with a High SPD Sparkle, you don't need to invest SPD on him.",
      "Dan Heng": "You would want to prioritize putting CRIT Rate into Dan Heng as he can Slow enemies down when he lands a Critical Hit. <br> Dan Heng can either go with SPD so he can have more turns in one cycle and trigger the Firmament Frontline Glamoth effect, or ATK% if he's using another Planar Ornament and you want to deal more DMG.",
      "March 7th": "For March's Body, you can either use DEF% to increase Shield durabilty or Effect Hit Rate to increase her chances of Freezing an enemy with her Ultimate. <br> It's also important for March to have 134 SPD to take more turns in a cycle.",
      "March 7th - The Hunt": "March 7th (Hunt) can be built as your typical DPS with CRIT stats. March uses the Musketeer of Wild Wheat and Rutilant Arena sets to increase her Basic ATK DMG. It is ideal to pair March with an Erudition, Destruction, or Hunt unit if you are choosing this build. <br> March 7th (Hunt) will need at least a 70% CRIT Rate to activate the Rutilant Arena's effect. <br> As for March 7th (Hunt)'s Speed, you can opt for 124 SPD since she gets additional SPD from her E1, which will make her hit the 134 SPD breakpoint. <br> High SPD stats aren't a requirement for this build since your Main DPS, who will be partnered with March, will ideally be the type who attacks or Ults very often. This way, the Main DPS can also push March 7th to take more actions by activating her passive. <br><br> March 7th (Hunt)'s versatile kit allows her to be built as a Break DPS. It's ideal to pair March with a fast or Ult spamming Harmony, Nihility, Preservation, or Abundance character for this build to take advantage of the increased Toughness Reduction. However, it may not be necessary provided that your paired Unit or March has high enough SPD to attack more often. <br> Prioritize getting Break Effect substats along with SPD since most of her damage comes from Break DMG in this build and more SPD allows her to have more turns. We don't need to abandon CRIT stats in this build since March can deal some decent damage. <br> Iron Cavalry Against the Scourge is her best relic set since it provides Break Effect and allows her Break DMG to ignore a target's DEF. We don't have a lot of BE ornaments currently, so you can either go Talia or Forge of the Kalpagni Lantern if you're up against Fire-weak enemies. <br> Focus on getting Break Effect substats while having some CRIT stats on your Relics. Since March 7th (Hunt)'s Enhanced Basic ATK still benefits from CRIT stats, getting CRIT Rate and CRIT DMG to a decent ratio is good even for a Break DPS build. <br> As for March 7th (Hunt)'s Speed and if you're using Talia, try to hit 135 SPD since her E1 will push you to 145 SPD, which activates Talia's requirements. You can also go higher like 150 SPD to hit the 160 SPD Breakpoint.",
      "Welt": "This Welt build focuses on turning him into a Hybrid DPS and a Debuffer. Welt would need around 67% Effect Hit Rate to apply his Imprisonment consistently. <br> For his Rope Ornament, you can either go with ATK% for more DPS or Energy Regeneration so he can delay enemy turns more frequently with his Ultimate.",
      "Himeko": "With The Ashblazing Grand Duke, Himeko's damage greatly increases because her Follow-up Attacks hit enemies multiple times. Her DMG will significantly increase with Firmament Frontline Glamoth provided she has at least 135 SPD. <br> Himeko wants the usual stats for a DPS which are ATK, CRIT Rate, and CRIT DMG. As usual, the ideal 1:2 Ratio for CRIT Rate and CRIT DMG is recommended. As for ATK, having 2700 or higher is enough out of combat. <br> Having 135 SPD is great for Himeko to get two turns in the first cycle and meet Glamoth's SPD requirement. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Boothill": "Boothill's kit mainly scales with Break Effect. Prioritize getting Break Effect substats along with SPD since most of his damage comes from Break DMG and more SPD allows him to have more turns to attack Weakness Broken enemies. <br> Iron Cavalry Against the Scourge is his best relic set since it provides Break Effect and his Break DMG can ignore a target's DEF. This becomes a lot stronger with Super Break buffs and when paired with the Harmony Trailblazer. <br> Since Boothill will use the Talia: Kingdom of Banditry Ornament for now, make sure that he has at least 145 SPD to activate the Ornament's effect. You can also use Glamoth if you cannot meet Talia's SPD requirement, but Talia is way better. <br> Boothill will want at least 200% Break Effect. Generally speaking, the more Break Effect you add, the more Boothill's damage will increase. Boothill does not need a lot of CRIT stats since his total Break Effect is converted to CRIT stats thanks to his Bonus Ability Ghost Load. <br> With 200% BE, having 55% CRate from stats and 0 CDMG substats will push his total CRIT stats to 75% CRate and 150% CDMG, which achieves the ideal 1:2 Ratio. Just keep in mind that his Bonus Ability has a cap of 300% Break Effect. <br> For speed, 135 SPD is okay for Boothill so he can get two turns in the first cycle, but 145 SPD is optimal since it also activates Talia's effect. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Acheron": "Despite being a Nihility unit, Acheron works as your typical DPS who takes advantage of CRIT Rate and CRIT DMG stats. <br> Speed boots are great for Acheron since they increase her action count, which helps to increase Slashed Dream stacks. It's also good if you're trying to hit speed breakpoints for Ornaments that require it. However, you can also use ATK% boots for Acheron if she's paired with Sparkle or Bronya. <br> As for her Sphere, you can choose between Lightning DMG and ATK%, depending on which has better sub-stats. ATK% is slightly better since Acheron already has a ton of DMG buffs from her Traces and Signature Light Cone.",
      "Arlan": "Arlan can be used as your typical DPS with CRIT Rate and CRIT DMG stats for optimal DMG. Scholar Lost in Erudition increases his CRIT Rate, Skill DMG, and Ultimate DMG. <br> Arlan should have at least 135 SPD to activate the Firmament Frontline Glamoth effect.",
      "Firefly": "The majority of Firefly's DPS will come from Break DMG, so CRIT Rate and CRIT DMG are not important for her. Aside from Break Effect, the ATK stat is also important since this also will increase Firefly's Break Effect. Firefly should try and reach for a total of 360% Break Effect in combat to deal the maximum amount of Super Break DMG provided by her Bonus Ability (Module β: Autoreactive Armor). Break Effect support characters and Relic sets can help you achieve that. <br> At least 2600 ATK is recommended to provide a huge boost of 64% Break Effect to Firefly and make it easier for her to reach the 360% Break Effect requirement. <br> 150 SPD is an ideal goal for Firefly since it provides her with a lot of turns before her Complete Combustion state ends. <br> You can also try push her Base SPD to 154, which will increase to 164 SPD due to Ruan Mei's buff. This is an important speed breakpoint since it gives you 3 attacks in the first cycle (of MoC or PF) and extra attack during Firefly's Combustion State. <br> Techincally, the actual Speed Breakpoint of Firefly with Ruan Mei is 164.34, which is achieveable with Ruan Mei's talent at level 10. However, due to decimal points not being shown in-game, people generally recommend 155 Base SPD instead.",
      "Feixiao": "Feixiao is your typical CRIT damage dealer, so stack as many CRIT stats as possible on her. The Wind-Soaring Valorous is her best Relic set since it increases her Ultimate DMG after using a Follow-Up, which fits well with her kit. <br> Since Feixiao frequently uses Follow-Up Attacks, Duran is a great ornament set for her since it increases her Follow-Up Attack DMG and CRIT DMG. <br> Feixiao wants the usual stats for a DPS which are ATK, CRIT Rate, and CRIT DMG. As usual, the ideal 1:2 Ratio for CRIT Rate and CRIT DMG is recommended. As for ATK, having 2900 or higher is enough out of combat. <br> Having 134 SPD is great for Feixiao to get two turns in the first cycle. Higher SPD is even better since she'll get more turns, but try to hit SPD Breakpoints.",
      "Yunli": "Yunli is your typical Crit-type damage dealer, so you will want to stack as many CRIT stats as you can on her. The Wind-Soaring Valorous and Inert Salsotto are her best Relic sets since they increase her Follow-up attack and Ultimate DMG. <br> Since Yunli's damage will come from her Counters, SPD isn't a necessary stat for her. <br> Yunli's attacks need to have as much CRIT Rate as possible, so we recommend having it as close to 100% to guarantee critical hits on every Follow-up attack. <br> Yunli's Ultimate will increase her CRIT DMG and will last until the turn of your next ally or enemy, so you don't need to build that much CRIT DMG on her.",
      "Ruan Mei": "Ruan Mei's best build includes Watchmaker since she is a Break Effect buffer. Sprightly Vonwacq is the best ornament for most team comps since it allows Ruan Mei to be first in the turn order to apply buffs. <br> Despite Ruan Mei's kit scaling on Break Effect, using an Energy Regeneration Rope is more optimal as it enables her to charge her Ultimate faster. You can get Break Effect stats through sub-stats, traces, and relic sets.",
      "Robin": "Robin's kit mainly scales on the ATK stat. Prioritize getting more ATK% substats over anything else since Robin's ATK buff and the extra damage she deals during Concerto scale with it. <br> Robin doesn't need CRIT stats from relics since the CRIT Rate and CRIT DMG stats for the damage she deals during her Concerto state are fixed. Since Robin's Concerto state also has a fixed SPD, she won't have much use for high SPD values, making ATK% boots better. <br> However, if you're using Ornaments that have speed requirements like Fleet of the Ageless, it may be better to just use Speed boots rather than praying for SPD sub-stats. <br> Robin will want at least 3500 ATK to provide nearly 1000 ATK to the party with her Ultimate. A total of 4000 ATK can provide 1,100 ATK to the party. <br> 121 Speed is enough for Robin to activate the effects of her best Ornaments and reach a Speed Breakpoint.",
      "Sparkle": "Sparkle's build needs the CRIT DMG stat to strengthen the buffs she gives to the Main DPS. Sacerdos allows Sparkle to boost an ally's CRIT DMG even further while also giving her some SPD. <br>Having SPD is also valuable so she can act more than once in one cycle. At least 30% Effect RES is needed to activate the two-piece effect of the Broken Keel Ornament. <br><br> Fast Sparkle <br> Go for a Fast Sparkle if you're going to use her with Slow DPS characters like Imbibitor Lunae or Qingque. <br> This enables the DPS to go right after Sparkle after she uses her Skill and is best used if the DPS uses an ATK Feet instead of SPD. <br><br> Slow Sparkle <br> A Slow Sparkle Build allows the DPS to attack before and after Sparkle's turn. This is better suited for DPS characters who benefit from having a high amount of SPD. <br> Ideally, Slow Sparkle works best if she is 1 SPD lower than the DPS.",
      "Aventurine": "Your main priority is to have 4000 DEF on Aventurine to get up to 48% Base CRIT Rate during combat. Aventurine will appreciate having at least 134 Speed to act twice in one cycle. <br> Once you have enough DEF and Speed, you can prioritize on increasing his DMG with CRIT DMG and Imaginary DMG stats. <br> Aventurine doesn't need Effect RES stats from relics to activate the Broken Keel effect since he can easily activate it from his Skill's Effect RES buff.",
      "Lingsha": "Lingsha needs Break Effect to increase her ATK and Outgoing Healing. For the Rope piece, Energy Regeneration is important to access Lingsha's Ultimate as soon as possible. If you're using a Light Cone that provides energy restoration, use a Break Effect rope instead. <br> Iron Cavalry Against the Scourge can be used on Super Break teams with the Harmony Trailblazer. If you're not using the Harmony Trailblazer with Lingsha, you can use two-piece relic sets that provide Break Effect or SPD. <br> Lingsha needs 200% Break Effect to maximize the ATK and Outgoing Healing increase of the Vermillion Waft Bonus Ability. If Lingsha has Iron Cavalry full-set equipped, she'll need at least 250% Break Effect to fully activate the effect. <br> Having 134 SPD is great for Lingsha to get two turns in the first cycle. Higher SPD is even better since she'll get more turns, but try to hit SPD Breakpoints.",
      "Bronya": "This Bronya build will support your team by increasing the party's damage output while keeping Bronya alive. Sacerdos increases her SPD and also allows her to boost an ally's CRIT DMG after she uses her Skill on them. <br><br> Fast Bronya <br> Use a Fast Bronya with 160+ speed if you want her to be an SP Neutral unit (by enabling her to use a Basic Attack and Skill rotation) that can also be paired with any DPS. <br> This is an excellent choice if you have a lot of DPS units that you use and would rather not stress about speed-tuning Bronya for each one, but it requires more RNG from substats. <br><br> Speed-Tuned Bronya <br> A Speed-Tuned Bronya that's just 1 to 2 speed slower than a DPS allows the DPS to attack just before Bronya's turn. Afterward, Bronya uses her Skill and enables the DPS to attack again in the current cycle. <br> While this is a great option since it guarantees your DPS 1 extra turn per cycle, it makes Bronya an SP Negative unit since it requires Bronya to spam her Skill.",
      "Tingyun": "This build allows Tingyun to provide other useful buffs besides the buffs her kit already has. Sacerdos increases her SPD and provides a stacking CRIT DMG boost for the ally she uses her Skill or Ultimate on. <br> Broken Keel increases Tingyun's resistance to debuffs thanks to the Effect RES and increases the CRIT DMG of the party, as long as she meets the 30% Effect RES requirement. Having ATK% Body and Sphere pieces is also useful since Benediction scales with ATK%. <br> Tingyun's ATK buffs scales on the ATK stat, so prioritize that along with SPD. Having some HP sub-stats will help Tingyun survive hard-hitting attacks. <br> Having high SPD on Tingyun allows her to regen SP and Energy more often by having more turns. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Huohuo": "Huohuo's best Relic set is the Messenger Traveling Hackerspace to further enhance the party with speed buffs. You can also choose to forgo the speed buff to increase her healing instead by going with a 2pc Passerby of Wandering Cloud for a mixed set. <br> Fleet of the Ageless is a great Ornament since it increases her HP for her healing while providing an ATK% buff. You can also go with Broken Keel instead if you want to focus on providing a stronger damage buff.",
      "Fu Xuan": "This build allows Fu Xuan to be as tanky as possible with a lot of HP stats with some DMG Reduction. Fu Xuan would need an Energy Regeneration Rope to be able to use her Ultimate frequently and gain stacks to use for her Talent. <br> Getting DEF% sub-stats is good since it reduces the DMG Fu Xuan takes, both directly and indirectly from damage redirected to her. Fu Xuan will also want some Effect RES in her sub-stats to not only resist debuffs but also trigger the passive for the Broken Keel ornament if you're using it.",
      "Gepard": "This Gepard build focuses on increasing the durability of his shields to enhance his effectiveness as a Tank. <br> DEF% as his Main Stat for the chest piece is the go-to choice for increasing the strength of his shields. However, if you find yourself not needing it, Effect Hit Rate as a Main Stat can be useful for increasing Gepard's chance to Freeze enemies on Skill. <br> Once you have an E1 Gepard, you can go back to using DEF% as the Main Stat for his chest. E1 will increase the base chance of his Freeze to 100%, but you will need 67% EHR to freeze enemies in high-tier content since enemies can have up to 40% Effect Res. <br> Gepard would want a lot of HP and DEF since he's a tank and his shields scale off DEF. As for SPD, just hit the minimum 134 or higher if you need him to take more actions in a cycle.",
      "Bailu": "Bailu's build focuses on giving her HP% to make her heal stronger. The Messenger relic set gives her more SPD and also lets her buff her allies' SPD when using her Ultimate, which means more actions for both her and her allies. <br> Fleet of the Ageless provides her party with an ATK boost and increases her max HP. <br> Bailu would want a lot of HP and DEF since she's a healer and her heals scale off HP. As for SPD, just hit the minimum 134 or higher if you need her to take more actions in a cycle. Higher SPD is even better, but try to hit Speed breakpoints.",
      "Rappa": "Most of Rappa's DPS will come from Break DMG, so CRIT Rate and CRIT DMG stats are unnecessary. Aside from Break Effect, the ATK stat is also important since this will increase Rappa's Break DMG on Weakness Broken enemies. <br> Rappa should aim for 3200 ATK to max out the Break DMG conversion provided by her Bonus Ability (Ninjutsu Inscription: Withered Leaf). <br> Rappa should also have 250% Break Effect to activate the full-set effect of the Iron Cavalry relic. Characters and Relic sets that provide Break Effect can help you achieve that. <br> Any SPD Breakpoint above 145 is ideal for Rappa to activate the full-set effect of the Talia: Kingdom of Banditry.",
      "Dr. Ratio": "Dr. Ratio's best build is pretty straightforward as Pioneer Diver of Dead Waters will increase his DMG on debuffed enemies. The 4pc. effect can be boosted after Dr. Ratio uses his Ultimate. <br> Duran, Dynasty of Running Wolves will increase Dr. Ratio's Follow-up Attack DMG and CRIT DMG as long as allies use Follow-up attacks.",
      "Seele": "This Seele build boosts her overall damage and allows her to ignore a percentage of the enemy's DEF when dealing damage. Because of Seele's very high base Speed stat, we recommend using ATK% over a SPD Main Stat for her feet Relic piece. <br> Seele wants the usual stats for a DPS which are ATK, CRIT Rate, and CRIT DMG. As usual, the ideal 1:2 Ratio for CRIT Rate and CRIT DMG is recommended. As for ATK, having 2600 or higher is enough out of combat. <br> Having 115 SPD is great for Seele since with her Skill's SPD boost, this allows her to hit 143 SPD in combat which is enough to give her two turns in the first and third cycle. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Blade": "This Blade build focuses on increasing his HP% and CRIT Damage to make the most out of his abilities and Traces. <br> Blade's damage scales better with HP% than ATK%, so try to get HP% stats when you can. Blade should have at least 50% CRIT Rate to activate the Inert Salsotto's effect, which should be easily achieved thanks to his CRIT Rate traces and the Longevous Disciple relic set.",
      "Jingliu": "This Jingliu Build is designed to deal a lot of DMG using her Enhanced Skill and is stacked with a lot of CRIT DMG from relic stats and Traces. Scholar Lost in Erudition increases the DMG of her Skill and Ultimate, while also giving her some CRIT Rate. <br> Despite needing CRIT Rate to activate the Rutilant Arena's effect, we highly recommend using a CRIT DMG Body instead as she can gain a lot of CRIT Rate from her Talent. Just make sure not to overcap Jingliu's CRIT Rate since it'll be wasted, so plan your build accordingly. <br> Jingliu should have at least 40% to 50% CRIT Rate from sub-stats to be able to deal consistent CRIT Hits during her Spectral Transmigration state.",
      "Kafka": "This Kafka build specializes in increasing her DoT and Speed so you can maximize her damage and trigger more Skill attacks, which is the main focus of her Kit. <br> Kafka's Ascension 6 Trace and Effect Hit Rate stat bonuses let you apply her Lightning DoT on enemies reliably, so getting more Effect Hit Rate is not necessary. <br> Kafka should have at least 135 SPD to activate the Firmament Ornament's effect. The Effect Hit Rate from Kafka's Traces is already enough to guarantee the Shock DoT with her Follow-up attack at E0. <br> However, you may want to increase her Effect Hit Rate to 28% if you have her signature Light Cone and E1 unlocked since it applies a Debuff that increases the DoT that enemies receive.",
      "Black Swan": "Black Swan needs at least 120% Effect Hit Rate to max out her DMG buff from her Third Bonus Ability. You can equip the Firmament Frontline: Glamoth instead if you have managed to get enough Effect Hit Rate through substats. <br> Black Swan's DoTs scale on the ATK stat and SPD is useful for letting her act sooner and take more turns in one cycle. If you have Ruan Mei in your party, use an ATK% Sphere on Black Swan as the former already provides a huge buff to the latter's DMG.",
      "Jade": "Jade is your typical Crit-type damage dealer, so you will want to stack as many CRIT stats as you can on her. When up against non-Quantum weak enemies, using The Ashblazing Grand Duke will yield more damage compared to Genius of Brilliant Stars. <br> Since Jade's follow-up attack talent is partly tied to the DPS she's paired with, she will not need high SPD. Feel free to choose any SPD breakpoint. <br> Jade's Talent Passive increases her CRIT DMG value for each stack(up to 50 stacks) she gains by doing a follow-up attack. Because of this, you will want to focus more on getting a lot of CRIT Rate substats. <br> As for Jade's Speed, you can go for any Speed breakpoint you want. You can go for her Base speed or you can go for 120 SPD if you're using Vonwacq to help put her in front of the paired DPS that she plans to buff.",
      "Argenti": "Argenti's best Relic set is the Champion of Streetwise Boxing for the additional Physical DMG and also the stacking ATK bonus. Compared to a 2pc mixed Relic set, Argenti gets more value out of this Relic set. <br> Inert Salsotto is the best Ornament for Argenti since it gives him CRIT Rate and increases his Ultimate DMG. Firmament Frontline Glamoth is also great, but you have to make sure Argenti reaches the SPD requirements for the DMG boost it provides.",
      "Topaz": "This Topaz Build is designed to dish out a lot of Fire DMG through Follow-up Attacks. Duran, Dynasty of Running Wolves will be her best Planar Ornament as all of her attacks are considered to be Follow-Up attacks. <br> As for her Relic set, The Ashblazing Grand Duke will be her best set since Topaz's Follow-up attacks deal multiple hits.",
      "Moze": "Moze is best built as your typical DPS with CRIT stats. Moze can use the Pioneer Diver of Dead Waters since the Prey state on an enemy counts as a debuff. Duran is Moze's best ornament since this can increase his CRIT DMG. <br> Thanks to Moze's Advance Forward mechanic from his Bonus Ability, you don't need to build him with SPD stats. <br> Since Moze has CRIT DMG from his Trace nodes, you should prioritize having a lot of CRIT Rate first to ensure most of his attacks CRIT. Once Moze's CRIT Rate is at least 80% or above, then you can prioritize his CRIT DMG next. <br> You will get a lot of ATK stats from the Feet and Rope pieces, so getting 2800 ATK should be no problem.",
      "Silver Wolf": "Silver Wolf's ideal build will focus on a mix of dealing damage and applying debuffs. A 96% total Effect Hit Rate will guarantee all of your abilities applying the debuff on enemies (if your Skill is level 10), but this can be greatly reduced to 47% if you have Silver Wolf at E2. <br> Silver Wolf will want at least 3000 HP for survivability on hard content, but this isn't an issue with sustain characters like Fu Xuan or shielders who can prevent her from getting one-shot. If you're using a healer with her, then you still need high HP for survivability. <br> For Effect Hit Rate, Silver Wolf needs 96% EHR to land her debuffs in end-game content. Again, this value goes lower if you have her E2. <br> For Speed, the usual breakpoints are enough for Silver Wolf to have more turns and generate SP. However, remember that she should be faster than your DPS to inflict debuffs on the enemy before your DPS gets their turn.",
      "Jiaoqiu": "Jiaoqiu is best built with a lot of Effect Hit Rate and SPD so that he can effectively apply Ashen Roast onto enemies before the start of their turn. Sprightly Vonwacq can help put Jiaoqiu at the start of the turn order and apply the debuffs. <br> If Jiaoqiu is used in DoT-centric teams, he can use the Prisoner in Deep Confinement and Pan-Cosmic Commercial Enterprise sets to deal a lot of DMG with Ashen Roast. <br> Jiaoqiu needs at least 140% Effect Hit Rate to maximize the effect of his Hearth Kindle Bonus Ability. If you have Jiaoqiu's Light Cone, Those Many Springs, it is best to have 180% Effect Hit Rate to guarantee the Unarmored debuff. <br> As for Jiaoqiu's SPD, you can hit any breakpoint as long as he goes first before your DPS in the turn order.",
      "Pela": "This Pela build ensures that her debuff applies to enemies and that she gets more turns. Pela only needs 67% Effect Hit Rate to guarantee her DEF% debuff application on enemies. Eagle of Twilight Line allows Pela to have more turns because of the Advance Forward. <br> After reaching 67% Effect Hit Rate, you can focus on stats that increase her survivability like HP% or DEF%. SPD is also a very important stat since Pela can provide more Skill Points on a lot of turns through Basic ATKs.",
      "Asta": "Asta can be built with tons of HP% and DEF% stats to increase her overall survivability. Having at least 134 SPD will also be useful so that Asta can have more turns in one cycle. <br> Asta will also want Energy Regeneration so she can access her Ultimate more frequently.",
      "Hanya": "Except for SPD, Hanya's support buffs do not scale on her stats. Knowing this, you can build Hanya with more survivability through HP% and DEF% stats. <br> Hanya's best Relic set is the Messenger Traversing Hackerspace for the additional SPD stats and also to enhance the team's SPD. You can also forgo the SPD buff to increase her HP% instead by going with a 2pc Longevous Disciple for a mixed set. <br> Fleet of the Ageless is an excellent Ornament for Hanya since it increases her HP for more survivability. Broken Keel is a great alternative that provides a stronger buff non-DoT characters. Penacony, Land of the Dreams is also a good alternative if you want the best DMG buff for only Physical characters! <br> Thanks to Hanya's SPD stats and Traces, it should be easy to achieve 147 SPD or above to reach the SPD Breakpoints. Having a high amount of SPD will also improve her SPD buffs.",
      "Gallagher": "Gallagher would need at least 150% Break Effect in combat to maximize the Outgoing Healing buff from his Bonus Ability. <br> As for Gallagher's Rope piece, Energy Regeneration is the best for more frequent Ultimates. You can opt to use Break Effect to reach his 150% BE requirement and increase his damage in Super Break teams.",
      "Luocha": "Luocha's build focuses on increasing his healing output and Speed. Stack ATK% Stats on him to increase the amount of heals he provides and increase his Speed so he can take more actions and enable his Talent passive faster. <br> It takes Luocha the same number of turns to charge his Ultimate between an S1 Post-Op Light Cone and an Energy Regen Rope, so simply equip what you have between the two. Using a Post-Op Lightcone lets you equip an ATK% Rope instead for more healing and damage.",
      "Lynx": "Lynx's build prioritizes her healing output and Speed. Her heals scale with HP, so stack HP% stats to increase the heal amount she does along with some Speed so she can take more actions. <br> Lynx can also use some Effect RES in her sub-stats not only to resist debuffs but to use Broken Keel's passive. For the Rope, Energy Regen is better if the enemy does AoE damage and applies debuffs constantly. Otherwise, she can use an HP% Rope. <br> Since Lynx's heals are based on her HP, getting HP% substats on her relics should be the priority. A good amount of DEF also helps reduce the damage she takes in harder content. <br> For Speed, Lynx should have at least 134 SPD to get two turns in the first cycle. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Clara": "Clara doesn't need SPD stats since she relies on the enemy being faster to dish out Follow-up attacks. <br> As for her Rope Ornament, use ATK if you have Tingyun or Huohuo in the party. If those characters aren't on the team, Clara can use an Energy Regen Rope to easily access her Ultimate.",
      "Guinaifen": "Guinaifen's best relic set is the Prisoner in Deep Confinement as a lot of her DMG focuses on DoTs and scales on the ATK stat. <br> Guinaifen will also want at least a 67% Effect Hit Rate to consistently apply the Burn DoT onto enemies and 135 SPD to activate the Firmament Frontline Glamoth effect.",
      "Jing Yuan": "This Jing Yuan build focuses on all aspects of his DMG. The Ashblazing Grand Duke and The Wondrous BananAmusement Park will increase his Follow-up attack and CRIT DMG respectively. <br> Jing Yuan wants the usual stats for a DPS which are ATK, CRIT Rate, and CRIT DMG. As usual, the ideal 1:2 Ratio for CRIT Rate and CRIT DMG is recommended. As for ATK, having 2500 or higher is enough out of combat. <br> Having 135 SPD is great for Jing Yuan to get two turns in the first cycle and meet Glamoth's SPD requirement. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Qingque": "This build ensures Qingque gets the things she needs to maximize her DPS. Genius of the Brilliant Stars provides her Quantum DMG and DEF ignore, which are huge buffs for her DMG. Rutilant Arena increases her Basic ATK damage which is her bread and butter. <br> Qingque should have at least 70% CRIT Rate for Rutilant Arena's set requirement. As a DPS, substats like CRIT Rate and CRIT DMG are the best stats for her which boosts her DMG even further. <br> If Qingque is paired with a High SPD Sparkle, you don't need to invest SPD on her. If Qingque uses the Firmament ornament, she needs at least 135 SPD. Always try to hit SPD Breakpoints.",
      "Herta": "Herta's best build involves equipping the Hunter of Glacial Forest to increase her CRIT DMG whenever she uses her Ultimate. <br> Sigonia, the Unclaimed Desolation will be Herta's best ornament thanks to its ability to increase her CRIT DMG for every enemy taken out. <br> Since Herta will get a lot of CRIT DMG stats from her best Relic sets, focus on getting more CRIT Rate to even out the CRIT Ratio. As for her SPD, we recommend having at least 134 SPD to take more turns. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Xueyi": "Xueyi's DMG can be increased based on the amount of Break Effect she has thanks to her first Bonus Ability. Xueyi can benefit from the full set of Genius of Brilliant Stars as she can deal more Quantum DMG and ignore enemy DEF. <br> Talia: Kingdom of Banditry will be her best Ornament as she can get more Break Effect as long as she has 145 SPD. <br> Since Xueyi boosts her DMG based on her Break Effect, stacking a lot of Break Effect on her is recommended. She also benefits from crit stats, so the ideal 1:2 Ratio for CRIT Rate and CRIT DMG is good to have. <br> As for Speed, Xueyi needs at least 145 SPD to activate Talia's effect and get two turns in the first and third cycles during battle. Higher SPD is even better, but try to hit SPD Breakpoints.",
      "Serval": "This build allows Serval to deal more damage through her DoTs and her Ultimate. Pioneer Diver of Dead Waters will enable Serval to deal more DMG against debuffed enemies. <br> Firmament Frontline Glamoth increases her ATK and directly increases her DMG which is great for her DoTs, Skill, and Ultimate. Just make sure that Serval has at least 135 SPD for the set requirement.",
      "Hook": "Hook's best Relic set is the Pioneer Diver of Dead Waters as her kit can apply the Burn debuff on enemies, making her attacks against them significantly stronger. <br> We recommend Hook to have at least 70% CRIT Rate to increase her Skill DMG thanks to the Rutilant Arena ornament. <br> Hook wants your typical DPS stats like CRIT Rate, CRIT DMG, and ATK. Her Burn scales off ATK so make sure she has a high amount of it. As for SPD, just hit the minimum 134 or higher if you need her to take more actions in a cycle.",
      "Yanqing": "This build increases Yanqing's CRIT Rate and overall damage of his Skill and Ultimate. The Scholar Lost in Erudition set can increase Yanqing's Skill DMG even more after using his Ultimate. <br> Firmament Frontline Glamoth gives Yanqing ATK and a direct DMG boost as long as he meets the 135 SPD requirement. This isn't hard to achieve since he has a high base SPD and a built-in SPD buff in one of his Traces. <br> Yanqing's Ultimate can guarantee a critical hit as long as he has at least 20% CRIT Rate outside of combat and his Soulsteel Sync is active.",
      "Misha": "This build focuses on giving Misha the tools he needs to increase his damage. Hunter of Glacial Forest gives increases his Ice DMG and CRIT DMG after using his Ultimate, which synergizes well with his Ultimate's multiple hits.  <br> Firmament Frontline Glamoth directly increases his DMG as long as he meets the minimum 135 SPD requirement.",
      "Luka": "This debuffer build allows Luka to inflict DEF and Bleed debuffs. A total of 67% Effect Hit Rate is ideal for making sure that Luka can inflict Bleed at all times. <br> Building CRIT is unnecessary as most of Luka's DMG will come from the Bleed debuff, which scales on the ATK stat. SPD is also important to activate the effect of the Firmament ornament.",
      "Sampo": "This build allows Sampo to deal DMG while also making sure that his debuffs land through stacking Effect Hit Rate. Prisoner in Deep Confinement increases his DoT damage and provides DEF ignore, which increases his overall DMG. <br> Firmament Frontline Glamoth increases Sampo's ATK and directly increases his DMG as long as he meets the 135 SPD requirement. This should be easy with SPD boots and some SPD substats, which are recommended for DoT characters like him.",
      "Sushang": "This build allows Sushang to deal more damage through her Skill and Ultimate. Scholar Lost in Erudition provides her with increased CRIT Rate and boosts to both her Skill and Ultimate DMG. <br> Firmament Frontline Glamoth increases her ATK and directly increases her DMG which is great for her kit. Just make sure that Sushang has at least 135 SPD for the set requirement, but it shouldn't be a problem since she has a lot of SPD sources.",
      "Yukong": "Yukong's buffs aren't tied to her stats, so we recommend building Yukong with HP% and DEF% stats to help her survive much longer. You also need at least 30% Effect RES to activate the Broken Keel effect. <br> It's important to tune Yukong's SPD to be 1 or 2 SPD faster than the DPS since her Skill and Ultimate will buff the next ally taking their turn.",
      "Natasha": "Natasha's healing scales on the HP stat, so put as much HP on her. The Fleet of the Ageless is her best Ornament since it provides HP for herself and ATK% to other party members.",
  };

  const images = {
      "Acheron": [
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jiaoqiu-character_head_icon.webp?x49467", text: "Jiaoqiu Nihility" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Harmony" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jiaoqiu-character_head_icon.webp?x49467", text: "Jiaoqiu Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/pela-character_head_icon.webp?x49467", text: "Pela Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/asta-character_head_icon.webp?x49467", text: "Asta Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-4_head_icon.webp?x49467", text: "Trailblazer Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" }
      ],
      "Firefly": [
          { src: "https://starrail.honeyhunterworld.com/img/character/firefly-character_wait_icon.webp?x49467", text: "Firefly DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/firefly-character_wait_icon.webp?x49467", text: "Firefly DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/asta-character_head_icon.webp?x49467", text: "Asta Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" }
      ],
      "Feixiao": [
          { src: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_head_icon.webp?x49467", text: "Feixiao DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_head_icon.webp?x49467", text: "Feixiao DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character-2_head_icon.webp?x49467", text: "March 7th Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/asta-character_head_icon.webp?x49467", text: "Asta Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/natasha-character_wait_icon.webp?x49467", text: "Natasha Sustain" }
      ],
      "Yunli": [
          { src: "https://starrail.honeyhunterworld.com/img/character/yunli-character_head_icon.webp?x49467", text: "Yunli DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/yunli-character_head_icon.webp?x49467", text: "Yunli DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/yunli-character_head_icon.webp?x49467", text: "Yunli DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character-2_head_icon.webp?x49467", text: "March 7th Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" }
      ],
      "Boothill": [
          { src: "https://starrail.honeyhunterworld.com/img/character/boothill-character_head_icon.webp?x49467", text: "Boothill DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/boothill-character_head_icon.webp?x49467", text: "Boothill DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/boothill-character_head_icon.webp?x49467", text: "Boothill DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/asta-character_head_icon.webp?x49467", text: "Asta Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/natasha-character_wait_icon.webp?x49467", text: "Natasha Sustain" }
      ],
      "Ruan Mei": [
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/firefly-character_wait_icon.webp?x49467", text: "Firefly DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/black-swan-character_head_icon.webp?x49467", text: "BlackSwan Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Robin": [
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_head_icon.webp?x49467", text: "Dr. Ratio DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_head_icon.webp?x49467", text: "Jingliu DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Sparkle": [
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/qingque-character_head_icon.webp?x49467", text: "Qingque DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dan-heng-imbibitor-lunae-character_wait_icon.webp?x49467", text: "Imbibitor DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Bronya": [
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_head_icon.webp?x49467", text: "Jingliu DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dan-heng-character_head_icon.webp?x49467", text: "Dan Heng DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/yukong-character_head_icon.webp?x49467", text: "Yukong Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/natasha-character_wait_icon.webp?x49467", text: "Natasha Sustain" }
      ],
      "Tingyun": [
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/yukong-character_head_icon.webp?x49467", text: "Yukong Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dan-heng-character_head_icon.webp?x49467", text: "Dan Heng DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/natasha-character_wait_icon.webp?x49467", text: "Natasha Sustain" }
      ],
      "Aventurine": [
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_head_icon.webp?x49467", text: "Feixiao DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_head_icon.webp?x49467", text: "Dr. Ratio DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character-2_head_icon.webp?x49467", text: "March 7th Support" }
      ],
      "Lingsha": [
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/firefly-character_wait_icon.webp?x49467", text: "Firefly DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" }
      ],
      "Fu Xuan": [
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/seele-character_head_icon.webp?x49467", text: "Seele DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Sub-DPS" }
      ],
      "Huohuo": [
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/black-swan-character_head_icon.webp?x49467", text: "BlackSwan Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" }
      ],
      "Dr. Ratio": [
          { src: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_head_icon.webp?x49467", text: "Dr. Ratio DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" }
      ],
      "Rappa": [
          { src: "https://starrail.honeyhunterworld.com/img/character/rappa-character_head_icon.webp?x49467", text: "Rappa DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" }
      ],
      "Jingliu": [
          { src: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_head_icon.webp?x49467", text: "Jingliu DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_head_icon.webp?x49467", text: "Jingliu DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Dan Heng - Imbibitor Lunae": [
          { src: "https://starrail.honeyhunterworld.com/img/character/dan-heng-imbibitor-lunae-character_wait_icon.webp?x49467", text: "Imbibitor DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" }
      ],
      "Kafka": [
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/black-swan-character_head_icon.webp?x49467", text: "BlackSwan DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Seele": [
          { src: "https://starrail.honeyhunterworld.com/img/character/seele-character_head_icon.webp?x49467", text: "Seele DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Blade": [
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_head_icon.webp?x49467", text: "Jingliu DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
          
      ],
      "Black Swan": [
          { src: "https://starrail.honeyhunterworld.com/img/character/black-swan-character_head_icon.webp?x49467", text: "BlackSwan Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Jade": [
          { src: "https://starrail.honeyhunterworld.com/img/character/jade-character_head_icon.webp?x49467", text: "Jade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/argenti-character_head_icon.webp?x49467", text: "Argenti DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jade-character_head_icon.webp?x49467", text: "Jade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" }
      ],
      "Argenti": [
          { src: "https://starrail.honeyhunterworld.com/img/character/argenti-character_head_icon.webp?x49467", text: "Argenti DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo sustain" }
      ],
      "Moze": [
          { src: "https://starrail.honeyhunterworld.com/img/character/moze-character_head_icon.webp?x49467", text: "Moze Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_head_icon.webp?x49467", text: "Feixiao DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" }
      ],
      "Trailblazer - Harmony": [
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/firefly-character_wait_icon.webp?x49467", text: "Firefly DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_wait_icon.webp?x49467", text: "Lingsha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_head_icon.webp?x49467", text: "Dr. Ratio DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" }
      ],
      "Silver Wolf": [
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/pela-character_head_icon.webp?x49467", text: "Pela Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/qingque-character_head_icon.webp?x49467", text: "Qingque DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Jiaoqiu": [
          { src: "https://starrail.honeyhunterworld.com/img/character/jiaoqiu-character_head_icon.webp?x49467", text: "Jiaoqiu Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/pela-character_head_icon.webp?x49467", text: "Pela Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jiaoqiu-character_head_icon.webp?x49467", text: "Jiaoqiu Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/black-swan-character_head_icon.webp?x49467", text: "BlackSwan Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
      ],
      "Topaz": [
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_head_icon.webp?x49467", text: "Feixiao DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/himeko-character_head_icon.webp?x49467l", text: "Himeko DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Pela": [
          { src: "https://starrail.honeyhunterworld.com/img/character/pela-character_head_icon.webp?x49467", text: "Pela Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jiaoqiu-character_head_icon.webp?x49467", text: "Jiaoqiu Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/pela-character_head_icon.webp?x49467", text: "Pela Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_head_icon.webp?x49467", text: "Jingliu DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "March 7th - The Hunt": [
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character-2_head_icon.webp?x49467", text: "March 7th DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_head_icon.webp?x49467", text: "Feixiao DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" }
      ],
      "Asta": [
          { src: "https://starrail.honeyhunterworld.com/img/character/asta-character_head_icon.webp?x49467", text: "Asta Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/himeko-character_head_icon.webp?x49467l", text: "Himeko DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Hanya": [
          { src: "https://starrail.honeyhunterworld.com/img/character/hanya-character_head_icon.webp?x49467", text: "Hanya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/argenti-character_head_icon.webp?x49467", text: "Argenti DPs" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/hanya-character_head_icon.webp?x49467", text: "Hanya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/clara-character_wait_icon.webp?x4946", text: "Clara DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" }
      ],
      "Gallagher": [
          { src: "https://starrail.honeyhunterworld.com/img/character/gallagher-character_wait_icon.webp?x49467", text: "Gallagher Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/firefly-character_wait_icon.webp?x49467", text: "Firefly DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_head_icon.webp?x49467", text: "Trailblazer Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" }
      ],
      "Luocha": [
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" }
      ],
      "Lynx": [
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/yunli-character_head_icon.webp?x49467", text: "Yunli DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/blade-character_wait_icon.webp?x49467", text: "Blade DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" }
      ],
      "Clara": [
          { src: "https://starrail.honeyhunterworld.com/img/character/clara-character_wait_icon.webp?x4946", text: "Clara DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Himeko": [
          { src: "https://starrail.honeyhunterworld.com/img/character/himeko-character_head_icon.webp?x49467l", text: "Himeko DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/himeko-character_head_icon.webp?x49467l", text: "Himeko DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/herta-character_head_icon.webp?x49467", text: "Herta Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/robin-character_head_icon.webp?x49467", text: "Robin Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Support" }
      ],
      "Guinaifen": [
          { src: "https://starrail.honeyhunterworld.com/img/character/guinaifen-character_head_icon.webp?x49467", text: "Guinaifen Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Jing Yuan": [
          { src: "https://starrail.honeyhunterworld.com/img/character/jing-yuan-character_head_icon.webp?x49467", text: "Jing Yuan DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Qingque": [
          { src: "https://starrail.honeyhunterworld.com/img/character/qingque-character_head_icon.webp?x49467", text: "Qingque DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/qingque-character_head_icon.webp?x49467", text: "Qingque DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Herta": [
          { src: "https://starrail.honeyhunterworld.com/img/character/herta-character_head_icon.webp?x49467", text: "Herta Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/himeko-character_head_icon.webp?x49467l", text: "Himeko DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/herta-character_head_icon.webp?x49467", text: "Herta DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character_head_icon.webp?x49467", text: "March 7th Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/gepard-character_head_icon.webp?x49467", text: "Gepard Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Xueyi": [
          { src: "https://starrail.honeyhunterworld.com/img/character/xueyi-character_head_icon.webp?x49467", text: "Xueyi DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Welt": [
          { src: "https://starrail.honeyhunterworld.com/img/character/welt-character_head_icon.webp?x49467", text: "Welt Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/acheron-character_head_icon.webp?x49467", text: "Acheron DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/pela-character_head_icon.webp?x49467", text: "Pela Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/welt-character_head_icon.webp?x49467", text: "Welt Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_head_icon.webp?x49467", text: "Dr. Ratio DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Support" }
      ],
      "Gepard": [
          { src: "https://starrail.honeyhunterworld.com/img/character/gepard-character_head_icon.webp?x49467", text: "Gepard Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dan-heng-character_head_icon.webp?x49467", text: "Dan Heng DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/serval-character_head_icon.webp?x49467", text: "Serval DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/lynx-character_wait_icon.webp?x49467", text: "Lynx Sustain" }
      ],
      "Bailu": [
          { src: "https://starrail.honeyhunterworld.com/img/character/bailu-character_wait_icon.webp?x49467", text: "Bailu Sustain" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any DPS" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Support" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Flex" }
      ],
      "Hook": [
          { src: "https://starrail.honeyhunterworld.com/img/character/hook-character_wait_icon.webp?x49467", text: "Hook DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/hook-character_wait_icon.webp?x49467", text: "Hook DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/guinaifen-character_head_icon.webp?x49467", text: "Guinaifen Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Serval": [
          { src: "https://starrail.honeyhunterworld.com/img/character/serval-character_head_icon.webp?x49467", text: "Serval Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Yanqing": [
          { src: "https://starrail.honeyhunterworld.com/img/character/yanqing-character_head_icon.webp?x49467", text: "Yanqing DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine" }
      ],
      "Misha": [
          { src: "https://starrail.honeyhunterworld.com/img/character/misha-character_head_icon.webp?x49467", text: "Misha DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character_head_icon.webp?x49467", text: "March 7th Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/gepard-character_head_icon.webp?x49467", text: "Gepard Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/misha-character_head_icon.webp?x49467", text: "Misha DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/gepard-character_head_icon.webp?x49467", text: "Gepard Sustain" }
      ],
      "Luka": [
          { src: "https://starrail.honeyhunterworld.com/img/character/luka-character_head_icon.webp?x49467", text: "Luka Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luka-character_head_icon.webp?x49467", text: "Luka Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sushang-character_head_icon.webp?x49467", text: "Sushang DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/natasha-character_wait_icon.webp?x49467", text: "Natasha Sustain" }
      ],
      "Sampo": [
          { src: "https://starrail.honeyhunterworld.com/img/character/sampo-character_head_icon.webp?x49467", text: "Sampo Sub-DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/kafka-character_head_icon.webp?x49467", text: "Kafka DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_head_icon.webp?x49467", text: "Ruan Mei Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Dan Heng": [
          { src: "https://starrail.honeyhunterworld.com/img/character/dan-heng-character_head_icon.webp?x49467", text: "Dan Heng DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/welt-character_head_icon.webp?x49467", text: "Welt Sub-DPS" },
          { src: "zhttps://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467zz", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467", text: "Huohuo Sustain" }
      ],
      "Sushang": [
          { src: "https://starrail.honeyhunterworld.com/img/character/sushang-character_head_icon.webp?x49467", text: "Sushang DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_head_icon.webp?x49467", text: "Sparkle Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_head_icon.webp?x49467", text: "Fu Xuan Sustain" }
      ],
      "Yukong": [
          { src: "https://starrail.honeyhunterworld.com/img/character/yukong-character_head_icon.webp?x49467", text: "Yukong Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_head_icon.webp?x49467", text: "Dr. Ratio DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_head_icon.webp?x49467", text: "SilverWolf Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/yukong-character_head_icon.webp?x49467", text: "Yukong Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/seele-character_head_icon.webp?x49467", text: "Seele DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Natasha": [
          { src: "https://starrail.honeyhunterworld.com/img/character/natasha-character_wait_icon.webp?x49467", text: "Natasha Support" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any DPS" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Sub-DPS" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Support" }
      ],
      "March 7th": [
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character_head_icon.webp?x49467", text: "March 7th Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/clara-character_wait_icon.webp?x4946", text: "Clara DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_head_icon.webp?x49467", text: "Topaz Support" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Sustain or DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/march-7th-character_head_icon.webp?x49467", text: "March 7th Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/misha-character_head_icon.webp?x49467", text: "Misha DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/gepard-character_head_icon.webp?x49467", text: "Gepard Sustain" },
          { src: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467", text: "Luocha Sustain" }
      ],
      "Trailblazer - Preservation": [
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-4_head_icon.webp?x49467", text: "Trailblazer Sustain" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any DPS" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Support" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Sustain" }
      ],
      "Trailblazer - Destruction": [
          { src: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-2_head_icon.webp?x49467", text: "Trailblazer DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "zhttps://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467zz", text: "Tingyun Support" },
          { src: "https://img.game8.co/3866215/f7593e81bc8d072e4683e1f44d4a5528.png/show", text: "Any Sustain" }
      ],
      "Arlan": [
          { src: "https://starrail.honeyhunterworld.com/img/character/arlan-character_wait_icon.webp?x49467", text: "Arlan DPS" },
          { src: "https://starrail.honeyhunterworld.com/img/character/bronya-character_head_icon.webp?x49467", text: "Bronya Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_head_icon.webp?x49467", text: "Tingyun Support" },
          { src: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_head_icon.webp?x49467", text: "Aventurine Sustain" }
      ],

  };

  // Function to update character info dynamically
  function updateCharacterInfo(character) {
      // Update the text content for name, description, and build
      charNameElement.textContent = character;
      charDescElement.innerHTML = descriptions[character] || "No description available.";
      charBuild.innerHTML = builds[character] || "No build information available.";

      // Clear the grid before adding new images
      characterGrid.innerHTML = "";

      // Get the images and text for the selected character
      const characterImages = images[character] || [];

      // Create the grid items dynamically
      characterImages.forEach((item, index) => {
          const imageBox = document.createElement("div");
          imageBox.classList.add("image-box");
          imageBox.style.backgroundImage = `url(${item.src})`;

          const overlay = document.createElement("div");
          overlay.classList.add("overlay");

          const imageText = document.createElement("div");
          imageText.classList.add("image-text");
          imageText.textContent = item.text; // Use the custom text for each image

          imageBox.appendChild(overlay);
          imageBox.appendChild(imageText);
          characterGrid.appendChild(imageBox);
      });
  }

  // Add event listeners for character buttons
  characterButtons.forEach(button => {
      button.addEventListener("click", () => {
          const character = button.value;
          updateCharacterInfo(character);
      });
  });

});