import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"
import { MeleeMain } from '../screens/Terraria/Melee/MeleeMain'
import { SummonerMain } from '../screens/Terraria/Summoner/SummonerMailn'
import { Starfury } from "../screens/Terraria/Melee/MeleeWeapons/Starfury"
import { BladeOfGrass } from '../screens/Terraria/Melee/MeleeWeapons/BladeOfGrass'
import { PlatinumArmor } from "../screens/Terraria/Melee/MeleeArmor/PlatinumArmor"
import { MoltenArmor } from "../screens/Terraria/Melee/MeleeArmor/MoltenArmor"
import { NightsEdge } from '../screens/Terraria/Melee/MeleeWeapons/NightsEdge'
import { SharpeningStation } from "../screens/Terraria/Melee/MeleeBuffs/SharpeningStation"
import { IceSickle } from "../screens/Terraria/Melee/MeleeWeapons/IceSickle"
import { ShadowflameKnife } from "../screens/Terraria/Melee/MeleeWeapons/ShadowflameKnife"
import { TitaniumArmor } from "../screens/Terraria/Melee/MeleeArmor/TitaniumArmor"
import { Sake } from "../screens/Terraria/Melee/MeleeBuffs/Sake"
import { Ichor } from "../screens/Terraria/Melee/MeleeBuffs/Ichor"
import { CursedFlames } from "../screens/Terraria/Melee/MeleeBuffs/CursedFlames"
import { WarriorEmblem } from "../screens/Terraria/Melee/MeleeAcs/WarriorEmblem"
import { BerserkerGlove } from "../screens/Terraria/Melee/MeleeAcs/BerserkerGlove"
import { WrathPotion } from "../screens/Terraria/Melee/MeleeBuffs/WrathPotion"
import { Rage } from "../screens/Terraria/Melee/MeleeBuffs/Rage"
import { HardModeAnvils } from "../screens/Wiki/Items/HardMode/From_underbroundHard/HardModeAnvils"
import { Jungle_Spores } from "../screens/Wiki/Items/PreHardMode/From_mobs/Jungle_Spores"
import { Stingers } from "../screens/Wiki/Items/PreHardMode/From_mobs/Stingers"
import { Vine } from "../screens/Wiki/Items/PreHardMode/From_mobs/Vine"
import { PreHardModeAnvils } from "../screens/Wiki/Items/PreHardMode/From_underground/PreHardModeAnvils"
import { IronBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/IronBar"
import { LeadBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/LeadBar"
import { Muramasa } from '../screens/Terraria/Melee/MeleeWeapons/CraftWeapons/Muramasa'
import { LightsBane } from '../screens/Terraria/Melee/MeleeWeapons/CraftWeapons/LightsBane'
import { Volcano } from '../screens/Terraria/Melee/MeleeWeapons/CraftWeapons/Volcano'
import { TrueNightsEdge } from "../screens/Terraria/Melee/MeleeWeapons/TrueNightsEdge"
import { MeleePreBosses } from "../screens/Terraria/Melee/GuideMelee/Pre-bosses(melee)/MeleePreBosses"
import { MeleePreHardMode } from "../screens/Terraria/Melee/GuideMelee/Pre-hardmode(melee)/MeleePreHardMode"
import { MeleePreMechBosses } from "../screens/Terraria/Melee/GuideMelee/Pre-MechBosses(melee)/MeleePreMechBosses"
import { MeleePrePlantera } from "../screens/Terraria/Melee/GuideMelee/Pre-plantera(melee)/MeleePrePlantera"
import { MeleePreGolem } from "../screens/Terraria/Melee/GuideMelee/Pre-Golem(melee)/MeleePreGolem"
import { MeleePreLunarEvents } from "../screens/Terraria/Melee/GuideMelee/Pre-LunarEvents(melee)/MeleePreLunarEvents"
import { MeleePreMoonLord } from '../screens/Terraria/Melee/GuideMelee/Pre-Moon-Lord(melee)/MeleePreMoonLord'
import { Excalibur } from "../screens/Terraria/Melee/MeleeWeapons/Excalibur"
import { TurtleArmor } from "../screens/Terraria/Melee/MeleeArmor/TurtleArmor"
import { FireGauntlet } from "../screens/Terraria/Melee/MeleeAcs/FireGauntlet"
import { HermesBoots } from "../screens/Terraria/Acs/PreBosses/HermesBoots"
import { RocketBoots } from "../screens/Terraria/Acs/Crafting/RocketBoots"
import { SpectreBoots } from "../screens/Terraria/Acs/Crafting/SpectreBoots"
import { LightningBoots } from "../screens/Terraria/Acs/PreBosses/LightningBoots"
import { FrostsparkBoots } from "../screens/Terraria/Acs/Crafting/FrostsparkBoots"
import { LavaWaders } from "../screens/Terraria/Acs/Crafting/LavaWaders"
import { ObsidianWaterWalkingBoots } from "../screens/Terraria/Acs/Crafting/ObsidianWaterWalkingBoots"
import { Magiluminescence } from "../screens/Terraria/Acs/PreBosses/Magiluminescence"
import { CloudInABottle } from "../screens/Terraria/Acs/PreBosses/CloudInABottle"
import { BandOfRegeneration } from "../screens/Terraria/Acs/PreBosses/BandOfRegeneration"
import { SharkToothNecklace } from "../screens/Terraria/Acs/PreBosses/SharkToothNecklace"
import { FledglingWings } from "../screens/Terraria/Acs/PreBosses/FledglingWings"
import { TerraBlade } from "../screens/Terraria/Melee/MeleeWeapons/TerraBlade"
import { TrueExcalibur } from "../screens/Terraria/Melee/MeleeWeapons/TrueExcalibut"
import { BeetleArmor } from "../screens/Terraria/Melee/MeleeArmor/BeetleArmor"
import { TerrasparkBoots } from "../screens/Terraria/Acs/PreHardMode/TerrasparkBoots"
import { BrainOfConfusion } from "../screens/Terraria/Acs/PreHardMode/BrainOfConfusion"
import { ShieldOfCthulhu } from "../screens/Terraria/Acs/PreHardMode/ShieldOfCthulhu"
import { WormScarf } from "../screens/Terraria/Acs/PreHardMode/WormScarf"
import { AnkhShied } from "../screens/Terraria/Acs/PreMechBosses/AnkhShied"
import { FrozenWings } from "../screens/Terraria/Acs/PreMechBosses/FrozenWings"
import { AvangerEmblem } from "../screens/Terraria/Acs/PrePlantera/AvangerEmblem"
import { FlameWings } from "../screens/Terraria/Acs/PrePlantera/FlameWings"
import { MoonStone } from "../screens/Terraria/Acs/PreGolem/MoonStone"
import { CelestialStone } from "../screens/Terraria/Acs/PreLunarEvents/CelestialStone"
import { CelestialShell } from "../screens/Terraria/Acs/PreLunarEvents/CelestialShell"
import { MoonShell } from "../screens/Terraria/Acs/PreLunarEvents/MoonShell"
import { DestroyerEmblem } from "../screens/Terraria/Acs/PreLunarEvents/DestroyerEmblem"
import { SolarEruption } from "../screens/Terraria/Melee/MeleeWeapons/SolarEruption"
import { Daybreak } from "../screens/Terraria/Melee/MeleeWeapons/Daybreak"
import { Test } from "../../tests/Test"
import { RangedMain } from "../screens/Terraria/Ranged/RangedMain"
import { RangedPreBosses } from "../screens/Terraria/Ranged/GuideRanged/Pre-bosses(ranged)/RangedPreBosses"
import { RangedPreHardMode } from "../screens/Terraria/Ranged/GuideRanged/Pre-hardmode(ranged)/RangedPreHardMode"
import { RangedPreMechBosses } from "../screens/Terraria/Ranged/GuideRanged/Pre-mechbosses(ranged)/RangedPreMechBosses"
import { RangedreGolem } from "../screens/Terraria/Ranged/GuideRanged/Pre-golem(ranged)/RangedPreGolem"
import { RangedPrePlantera } from "../screens/Terraria/Ranged/GuideRanged/Pre-plantera(ranged)/RangedPrePlantera"
import { RangedPreLunarEvents } from "../screens/Terraria/Ranged/GuideRanged/Pre-lunarevents(ranged)/RangedPreLunarEvents"
import { RangedPreMoonLord } from "../screens/Terraria/Ranged/GuideRanged/Pre-moonlord(ranged)/RangedPreMoonLord"
import { Minishark } from "../screens/Terraria/Ranged/RangedWeapons/Minishark"
import { ArcheryPotion } from "../screens/Terraria/Ranged/RangedBuffs/ArcheryPotion"
import { TheBeesKnees } from "../screens/Terraria/Ranged/RangedWeapons/TheBeesKnees"
import { NecroArmor } from "../screens/Terraria/Ranged/RangedArmor/NecroArmor"
import { DaedalusStormbow } from "../screens/Terraria/Ranged/RangedWeapons/DaedalusStormbow"
import { OnyxBlaster } from "../screens/Terraria/Ranged/RangedWeapons/OnyxBlaster"
import { RangerEmblem } from "../screens/Terraria/Ranged/RangedAcs/RangerEmblem"
import { Quivers } from "../screens/Terraria/Ranged/RangedAcs/Quivers"
import { Megashark } from "../screens/Terraria/Ranged/RangedWeapons/Megashark"
import { HallowedArmor } from "../screens/Terraria/Ranged/RangedArmor/HallowedArmor"
import { ShroomiteArmor } from "../screens/Terraria/Ranged/RangedArmor/ShroomiteArmor"
import { Tsunami } from "../screens/Terraria/Ranged/RangedWeapons/Tsunami"
import { SniperScope } from "../screens/Terraria/Ranged/RangedAcs/SniperScope"
import { Phantasm } from "../screens/Terraria/Ranged/RangedWeapons/Phantasm"
import { MageMain } from "../screens/Terraria/Mage/MageMain"
import { MagePreBosses } from "../screens/Terraria/Mage/GuideMage/Pre-bosses(mage)/MagePreBosses"
import { MagePreHardmode } from "../screens/Terraria/Mage/GuideMage/Pre-hardmode(mage)/MagePreHardmode"
import { MagePreMechBosses } from "../screens/Terraria/Mage/GuideMage/Pre-mechbosses(mage)/MagePreMechBosses"
import { MagePrePlantera } from "../screens/Terraria/Mage/GuideMage/Pre-plantera(mage)/MagePrePlantera"
import { MagePreGolem } from "../screens/Terraria/Mage/GuideMage/Pre-golem(mage)/MagePreGolem"
import { MagePreLunarEvents } from "../screens/Terraria/Mage/GuideMage/Pre-lunarevents(mage)/MagePreLunarEvents"
import { MagePreMoonLord } from "../screens/Terraria/Mage/GuideMage/Pre-moonlord(mage)/MagePreMoonLord"
import { ThunderZapper } from "../screens/Terraria/Mage/MageWeapons/ThunderZapper"
import { ManaRegenerationPotion } from "../screens/Terraria/Mage/MageBuffs/ManaRegenerationPotion"
import { MagicPowerPotion } from "../screens/Terraria/Mage/MageBuffs/MagicPowerPotion"
import { BeeGun } from "../screens/Terraria/Mage/MageWeapons/BeeGun"
import { JungleArmor } from "../screens/Terraria/Mage/MageArmor/JungleArmor"
import { SkyFracture } from "../screens/Terraria/Mage/MageWeapons/SkyFracture"
import { ScorcererEmblem } from "../screens/Terraria/Mage/MageAcs/ScorcererEmblem"
import { CelestialEmblem } from "../screens/Terraria/Mage/MageAcs/CelestialEmblem"
import { Razorpine } from "../screens/Terraria/Mage/MageWeapons/Razorpine"
import { SpectreArmor } from "../screens/Terraria/Mage/MageArmor/SpectreArmor"
import { NebulaBlaze } from "../screens/Terraria/Mage/MageWeapons/NebulaBlaze"
import { Snapthorn } from "../screens/Terraria/Summoner/SumWeapons/Snapthorn"
import { SumPreBosses } from "../screens/Terraria/Summoner/GuideSum/Pre-bosses(sum)/SumPreBosses"
import { FlinxStaff } from "../screens/Terraria/Summoner/SumWeapons/FlinxStaff"
import { SumPreGolem } from "../screens/Terraria/Summoner/GuideSum/Pre-golem(sum)/SumPreGolem"
import { SumPreHardmode } from "../screens/Terraria/Summoner/GuideSum/Pre-hardmode(sum)/SumPreHardmode"
import { SumreLunarEvents } from "../screens/Terraria/Summoner/GuideSum/Pre-lunarevents(sum)/SumPreLunarEvents"
import { SumPreMechBosses } from "../screens/Terraria/Summoner/GuideSum/Pre-mechbosses(sum)/SumPreMechBosses"
import { SumPreMoonlord } from "../screens/Terraria/Summoner/GuideSum/Pre-moonlord(sum)/SumPreMoonlord"
import { SumPrePlantera } from "../screens/Terraria/Summoner/GuideSum/Pre-plantera(sum)/SumPrePlantera"
import { FlinxFurCoat } from "../screens/Terraria/Summoner/SumArmor/FlinxFurCoat"
import { SummoningPotion } from "../screens/Terraria/Summoner/SumBuffs/SummoningPotion"
import { FeralClaws } from "../screens/Terraria/Summoner/SumAcs/FeralClaws"
import { SpinalTap } from "../screens/Terraria/Summoner/SumWeapons/SpinalTap"
import { ImpStaff } from "../screens/Terraria/Summoner/SumWeapons/ImpStaff"
import { ObsidianArmor } from "../screens/Terraria/Summoner/SumArmor/ObsidianArmor"
import { PygmyNecklace } from "../screens/Terraria/Summoner/SumAcs/PygmyNecklace"
import { CoolWhip } from "../screens/Terraria/Summoner/SumWeapons/CoolWhip"
import { SpiderArmor } from "../screens/Terraria/Summoner/SumArmor/SpiderArmor"
import { SummonerEmblem } from "../screens/Terraria/Summoner/SumAcs/SummonerEmblem"
import { Durendal } from "../screens/Terraria/Summoner/SumWeapons/Durendal"
import { SpiderStaff } from "../screens/Terraria/Summoner/SumWeapons/SpiderStaff"
import { OpticStaff } from "../screens/Terraria/Summoner/SumWeapons/OpticStaff"
import { MorningStar } from "../screens/Terraria/Summoner/SumWeapons/MorningStar"
import { Terraprisma } from "../screens/Terraria/Summoner/SumWeapons/Terraprisma"
import { TikiArmor } from "../screens/Terraria/Summoner/SumArmor/TikiArmor"
import { HerculesBeetle } from "../screens/Terraria/Summoner/SumArmor/HerculesBeetle"
import { PapyrusScarab } from "../screens/Terraria/Summoner/SumAcs/PapyrusScarab"
import { NecromanticScroll } from "../screens/Terraria/Summoner/SumAcs/NecromanticScroll"
import { CalMeleeMain } from "../screens/Calamity/Melee/CalMeleeMain"
import { CalMeleePreBosses } from "../screens/Calamity/Melee/CalMeleeGuide/CalMeleePreBosses"
import { GladiatorsLocket } from "../screens/Calamity/Mix/Acs/Accessories/GladiatorsLocket"
import { FrogLeg } from "../screens/Calamity/Mix/Acs/Accessories/FrogLeg"
import { CalFeralClaws } from "../screens/Calamity/Melee/CalMeleeAcs/FeralClaws"
import { Rover_Drive } from "../screens/Calamity/Mix/Acs/Accessories/Rover_Drive"
import { CalMeleePreEater_of_Worlds} from "../screens/Calamity/Melee/CalMeleeGuide/Pre-Eater_of_Worlds"
import { CalBladeOfGrass } from "../screens/Calamity/Melee/CalMeleeWeapons/CalBladeOfGrass"
import { BurntSienna } from "../screens/Calamity/Melee/CalMeleeWeapons/BurntSienna"
import { RedtideSpear } from "../screens/Calamity/Melee/CalMeleeWeapons/RedtideSpear"
export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
            <Route element={<Test/>} path="/test"/>


            {/* clases */}
            <Route element={<MeleeMain/>} path="/melee"/>
            <Route element={<MageMain/>} path="/mage"/>
            <Route element={<RangedMain/>} path="/ranged"/>
            <Route element={<SummonerMain/>} path="/summoner"/>

            {/* melee */}
            <Route element={<Starfury/>} path="/melee/pre-bosses/starfury"/>
            <Route element={<BladeOfGrass/>} path="/melee/pre-bosses/bladeofgrass"/>
            <Route element={<NightsEdge/>} path="/melee/pre-hardmode/nightsEdge"/>
            <Route element={<PlatinumArmor/>} path="/classes/platinumArmor"/>
            <Route element={<MoltenArmor/>} path="/melee/pre-hardmode/moltenArmor"/>
            <Route element={<SharpeningStation/>} path="melee/buffs/sharpeningStation" />
            <Route element={<Sake/>} path="/buffs/sake"/>
            <Route element={<Ichor/>} path="/buffs/ichor" />
            <Route element={<CursedFlames/>} path="/buffs/cursedFlames" />
            <Route element={<IceSickle/>} path="/melee/pre-mechbosses/iceSickle" />
            <Route element={<ShadowflameKnife/>} path="/melee/pre-mechbosses/shadowflameKnife"/>
            <Route element={<TitaniumArmor/>} path="/classes/titanumArmor"/>
            <Route element={<WarriorEmblem/>} path="/melee/warriorEmblem"/>
            <Route element={<BerserkerGlove/>} path="/melee/berserkerGlove"/>
            <Route element={<WrathPotion/>} path="/buffs/wrathPotion"/>
            <Route element={<Rage/>} path="/buffs/rage"/>
            <Route element={<Muramasa/>} path="/melee/muramasa"/>
            <Route element={<LightsBane/>} path="/melee/lightsBane"/>
            <Route element={<Volcano/>} path="/melee/volcano"/>
            <Route element={<TrueNightsEdge/>} path="/melee/pre-plantera/trueNightsEdge"/>
            <Route element={<Excalibur/>} path="/melee/pre-plantera/excalibur"/>
            <Route element={<TurtleArmor/>} path="/melee/turtleArmor"/>
            <Route element={<FireGauntlet/>} path="/melee/fireGauntlet"/>
            <Route element={<TerraBlade/>} path="/melee/TerraBlade"/>
            <Route element={<TrueExcalibur/>} path="/melee/TrueExcalibur"/>
            <Route element={<BeetleArmor/>} path="/melee/BeetleArmor"/>
            <Route element={<SolarEruption/>} path="/melee/pre-moonlord/SolarEruption"/>
            <Route element={<Daybreak/>} path="/melee/pre-moonlord/Daybreak"/>


            {/* melee stages */}
            <Route element={<MeleePreBosses/>} path="/melee/pre-bosses"/>
            <Route element={<MeleePreHardMode/>} path="/melee/pre-hardmode"/>
            <Route element={<MeleePreMechBosses/>} path="/melee/pre-mechbosses"/>
            <Route element={<MeleePrePlantera/>} path="/melee/pre-plantera"/>
            <Route element={<MeleePreGolem/>} path="/melee/pre-golem"/>
            <Route element={<MeleePreLunarEvents/>} path="/melee/pre-lunarevents"/>
            <Route element={<MeleePreMoonLord/>} path="/melee/pre-moonlord"/>

            {/* ranged */}
            <Route element={<Minishark/>} path="/ranged/Minishark"/>
            <Route element={<ArcheryPotion/>} path="/ranged/ArcheryPotion"/>
            <Route element={<TheBeesKnees/>} path="/ranged/pre-hardmode/TheBeesKnees"/>
            <Route element={<NecroArmor/>} path="/ranged/pre-hardmode/NecroArmor"/>
            <Route element={<DaedalusStormbow/>} path="/ranged/DaedalusStormbow"/>
            <Route element={<OnyxBlaster/>} path="/ranged/pre-mechbosses/OnyxBlaster"/>
            <Route element={<RangerEmblem/>} path="/ranged/RangerEmblem"/>
            <Route element={<Megashark/>} path="/ranged/Megashark"/>
            <Route element={<HallowedArmor/>} path="/classes/HallowedArmor"/>
            <Route element={<ShroomiteArmor/>} path="/ranged/ShroomiteArmor"/>
            <Route element={<Tsunami/>} path="/ranged/pre-lunarevents/Tsunami"/>
            <Route element={<SniperScope/>} path="/ranged/SniperScope"/>
            <Route element={<Phantasm/>} path="/ranged/pre-moonlord/Phantasm"/>
            <Route element={<Quivers/>} path="/ranged/Quivers"/>

            {/* ranger stages */}
            <Route element={<RangedPreBosses/>} path="/ranged/pre-bosses"/>
            <Route element={<RangedPreHardMode/>} path="/ranged/pre-hardmode"/>
            <Route element={<RangedPreMechBosses/>} path="/ranged/pre-mechbosses"/>
            <Route element={<RangedPrePlantera/>} path="/ranged/pre-plantera"/>
            <Route element={<RangedreGolem/>} path="/ranged/pre-golem"/>
            <Route element={<RangedPreLunarEvents/>} path="/ranged/pre-lunarevents"/>
            <Route element={<RangedPreMoonLord/>} path="/ranged/pre-moonlord"/>

            {/* mage */}
            <Route element={<ThunderZapper/>} path="/mage/pre-bosses/ThunderZapper"/>
            <Route element={<ManaRegenerationPotion/>} path="/mage/buffs/ManaRegenerationPotion"/>
            <Route element={<MagicPowerPotion/>} path="/mage/buffs/MagicPowerPotion"/>
            <Route element={<BeeGun/>} path="/mage/pre-hardmode/BeeGun"/>
            <Route element={<JungleArmor/>} path="/mage/pre-hardmode/JungleArmor"/>
            <Route element={<SkyFracture/>} path="/mage/SkyFracture"/>
            <Route element={<ScorcererEmblem/>} path="/mage/acs/ScorcererEmblem"/>
            <Route element={<CelestialEmblem/>} path="/mage/acs/CelestialEmblem"/>
            <Route element={<Razorpine/>} path="/mage/Razorpine"/>
            <Route element={<SpectreArmor/>} path="/mage/SpectreArmor"/>
            <Route element={<NebulaBlaze/>} path="/mage/pre-moonlord/NebulaBlaze"/>
      
            {/* mage stages */}
            <Route element={<MagePreBosses/>} path="/mage/pre-bosses"/>
            <Route element={<MagePreHardmode/>} path="/mage/pre-hardmode"/>
            <Route element={<MagePreMechBosses/>} path="/mage/pre-mechbosses"/>
            <Route element={<MagePrePlantera/>} path="/mage/pre-plantera"/>
            <Route element={<MagePreGolem/>} path="/mage/pre-golem"/>
            <Route element={<MagePreLunarEvents/>} path="/mage/pre-lunarevents"/>
            <Route element={<MagePreMoonLord/>} path="/mage/pre-moonlord"/>

            {/* summoner */}
            <Route element={<Snapthorn/>} path="/sum/pre-bosses/Snapthorn"/>
            <Route element={<FlinxStaff/>} path="/sum/pre-bosses/FlinxStaff"/>
            <Route element={<FlinxFurCoat/>} path="/sum/pre-bosses/FlinxFurCoat"/>
            <Route element={<SummoningPotion/>} path="/sum/buffs/SummoningPotion"/>
            <Route element={<FeralClaws/>} path="/sum/acs/FeralClaws"/>
            <Route element={<SpinalTap/>} path="/sum/pre-hardmode/SpinalTap"/>
            <Route element={<ImpStaff/>} path="/sum/pre-hardmode/ImpStaff"/>
            <Route element={<ObsidianArmor/>} path="/sum/pre-hardmode/ObsidianArmor"/>
            <Route element={<PygmyNecklace/>} path="/sum/acs/PygmyNecklace"/>
            <Route element={<CoolWhip/>} path="/sum/pre-mechbosses/CoolWhip"/>
            <Route element={<SpiderArmor/>} path="/sum/pre-mechbosses/SpiderArmor"/>
            <Route element={<SummonerEmblem/>} path="/sum/acs/SummonerEmblem"/>
            <Route element={<Durendal/>} path="/sum/pre-plantera/Durendal"/>
            <Route element={<SpiderStaff/>} path="/sum/pre-mechbosses/SpiderStaff"/>
            <Route element={<OpticStaff/>} path="/sum/pre-plantera/OpticStaff"/>
            <Route element={<MorningStar/>} path="/sum/MorningStar"/>
            <Route element={<Terraprisma/>} path="/sum/Terraprisma"/>
            <Route element={<TikiArmor/>} path="/sum/TikiArmor"/>
            <Route element={<HerculesBeetle/>} path="/sum/acs/HerculesBeetle"/>
            <Route element={<NecromanticScroll/>} path="/sum/acs/NecromanticScroll"/>
            <Route element={<PapyrusScarab/>} path="/sum/acs/PapyrusScarab"/>



            {/* summoner stages */} 
            <Route element={<SumPreBosses/>} path="/sum/pre-bosses"/>
            <Route element={<SumPreGolem/>} path="/sum/pre-golem"/>
            <Route element={<SumPreHardmode/>} path="/sum/pre-hardmode"/>
            <Route element={<SumreLunarEvents/>} path="/sum/pre-lunarevents"/>
            <Route element={<SumPreMechBosses/>} path="/sum/pre-mechbosses"/>
            <Route element={<SumPreMoonlord/>} path="/sum/pre-moonlord"/>
            <Route element={<SumPrePlantera/>} path="/sum/pre-plantera"/>


            {/* acs */}
            <Route element={<HermesBoots/>} path="/acs/HermesBoots"/>
            <Route element={<RocketBoots/>} path="/acs/RocketBoots"/>
            <Route element={<SpectreBoots/>} path="/acs/SpectreBoots"/>
            <Route element={<LightningBoots/>} path="/acs/LightningBoots"/>
            <Route element={<FrostsparkBoots/>} path="/acs/FrostsparkBoots"/>
            <Route element={<LavaWaders/>} path="/acs/LavaWaders"/>
            <Route element={<ObsidianWaterWalkingBoots/>} path="/acs/ObsidianWaterWalkingBoots"/>
            <Route element={<Magiluminescence/>} path="/acs/Magiluminescence"/>
            <Route element={<CloudInABottle/>} path="/acs/CloudInABottle"/>
            <Route element={<BandOfRegeneration/>} path="/acs/BandOfRegeneration"/>
            <Route element={<SharkToothNecklace/>} path="/acs/SharkToothNecklace"/>
            <Route element={<FledglingWings/>} path="/acs/FledglingWings"/>
            <Route element={<TerrasparkBoots/>} path="/acs/TerrasparkBoots"/>
            <Route element={<BrainOfConfusion/>} path="/acs/BrainOfConfusion"/>
            <Route element={<ShieldOfCthulhu/>} path="/acs/ShieldOfCthulhu"/>
            <Route element={<WormScarf/>} path="/acs/WormScarf"/>
            <Route element={<AnkhShied/>} path="/acs/AnkhShied"/>
            <Route element={<FrozenWings/>} path="/acs/FrozenWings"/>
            <Route element={<FlameWings/>} path="/acs/FlameWings"/>
            <Route element={<AvangerEmblem/>} path="/acs/AvangerEmblem"/>
            <Route element={<MoonStone/>} path="/acs/MoonStone"/>
            <Route element={<CelestialStone/>} path="/acs/CelestialStone"/>
            <Route element={<CelestialShell/>} path="/acs/CelestialShell"/>Fera
            <Route element={<MoonShell/>} path="/acs/MoonShell"/>
            <Route element={<DestroyerEmblem/>} path="/acs/DestroyerEmblem"/>


            {/* Wiki */}
            <Route element={<HardModeAnvils/>} path="/wiki/items/hardModeAnvils"/>
            <Route element={<Jungle_Spores/>} path="/wiki/items/jungle_Spore"/>
            <Route element={<Stingers/>} path="/wiki/items/stinger"/>
            <Route element={<Vine/>} path="/wiki/items/vine"/>
            <Route element={<PreHardModeAnvils/>} path="/wiki/preHardMode/preHardModeAnvils"/>
            <Route element={<IronBar/>} path="/wiki/preHardMode/ironBar"/>
            <Route element={<LeadBar/>} path="/wiki/preHardMode/leadBar"/>

            {/* calamity classes */}
            <Route element={<CalMeleeMain/>} path="/cal/melee"/>
            <Route element={<MageMain/>} path="/cal/mage"/>
            <Route element={<RangedMain/>} path="/cal/ranged"/>
            <Route element={<SummonerMain/>} path="/cal/summoner"/>
            <Route element={<SummonerMain/>} path="/cal/rogue"/>

            {/* calamity stages */}
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreEater_of_Worlds/>} path="/cal/melee/Pre_Eater_of_Worlds"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>
            <Route element={<CalMeleePreBosses/>} path="/cal/melee/pre-bosses"/>

            {/* calamity melee  */}
            <Route element={<BurntSienna/>} path="/cal/melee/pre-bosses/BurntSienna"/>
            <Route element={<CalBladeOfGrass/>} path="/cal/melee/pre-eater_of_worlds/BladeOfGrass"/>
            <Route element={<RedtideSpear/>} path="/cal/melee/pre-eater_of_worlds/RedtideSpear"/>
            <Route element={<SummonerMain/>} path="/cal/melee/pre-bosses/BurntSienna"/>
            <Route element={<SummonerMain/>} path="/cal/melee/pre-bosses/BurntSienna"/>
            <Route element={<SummonerMain/>} path="/cal/melee/pre-bosses/BurntSienna"/>
            <Route element={<SummonerMain/>} path="/cal/melee/pre-bosses/BurntSienna"/>
            <Route element={<SummonerMain/>} path="/cal/melee/pre-bosses/BurntSienna"/>


            {/* calamity acs */}
            <Route element={<GladiatorsLocket/>} path="/cal/acs/GladiatorsLocket"/>
            <Route element={<FrogLeg/>} path="/cal/acs/FrogLeg"/>
            <Route element={<CalFeralClaws/>} path="/cal/acs/FeralClaws"/>
            <Route element={<Rover_Drive/>} path="/cal/acs/RoverDrive"/>
            <Route element={<FrogLeg/>} path="/cal/acs/FrogLeg"/>
            <Route element={<FrogLeg/>} path="/cal/acs/FrogLeg"/>
            <Route element={<FrogLeg/>} path="/cal/acs/FrogLeg"/>


            {/* <Route element={} path=""/> */}
        </Routes>
    </BrowserRouter>
  )
}
