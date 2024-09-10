import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"
import { Classes } from "../screens/ClassesMain"
import {MeleeMain} from '../screens/Class/Melee/MeleeMain'
import {Magic} from '../screens/Class/Magic/Magic'
import {Ranged} from '../screens/Class/Ranged/Ranged'
import {Summoner} from '../screens/Class/Summoner/Summoner'
import { Starfury } from "../screens/Class/Melee/MeleeWeapons/PreBosses/Starfury"
import {BladeOfGrass} from '../screens/Class/Melee/MeleeWeapons/PreBosses/BladeOfGrass'
import { PlatinumArmor } from "../screens/Class/Melee/MeleeArmor/PlatinumArmor"
import { MoltenArmor } from "../screens/Class/Melee/MeleeArmor/MoltenArmor"
import {NightsEdge} from '../screens/Class/Melee/MeleeWeapons/PreHardMode/NightsEdge'
import { SharpeningStation } from "../screens/Class/Melee/MeleeBuffs/SharpeningStation"
import { IceSickle } from "../screens/Class/Melee/MeleeWeapons/Pre-MechBosses/IceSickle"
import { ShadowflameKnife } from "../screens/Class/Melee/MeleeWeapons/Pre-MechBosses/ShadowflameKnife"
import { TitaniumArmor } from "../screens/Class/Melee/MeleeArmor/TitaniumArmor"
import { Sake } from "../screens/Class/Melee/MeleeBuffs/Sake"
import { Ichor } from "../screens/Class/Melee/MeleeBuffs/Ichor"
import { CursedFlames } from "../screens/Class/Melee/MeleeBuffs/CursedFlames"
import { WarriorEmblem } from "../screens/Class/Melee/MeleeAcs/WarriorEmblem"
import { BerserkerGlove } from "../screens/Class/Melee/MeleeAcs/BerserkerGlove"
import { WrathPotion } from "../screens/Class/Melee/MeleeBuffs/WrathPotion"
import { Zenith } from "../screens/Class/Melee/MeleeWeapons/Zenith"
import { Rage } from "../screens/Class/Melee/MeleeBuffs/Rage"
import {HardModeAnvils} from '../screens/Wiki/Items/HardMode/From_underground/HardModeAnvils'
import { Jungle_Spores } from "../screens/Wiki/Items/PreHardMode/From_mobs/Jungle_Spores"
import { Stingers } from "../screens/Wiki/Items/PreHardMode/From_mobs/Stingers"
import { Vine } from "../screens/Wiki/Items/PreHardMode/From_mobs/Vine"
import { PreHardModeAnvils } from "../screens/Wiki/Items/PreHardMode/From_underground/PreHardModeAnvils"
import { IronBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/IronBar"
import { LeadBar } from "../screens/Wiki/Items/PreHardMode/From_underground/Bars/LeadBar"
import { Muramasa } from '../screens/Class/Melee/MeleeWeapons/CraftWeapons/Muramasa'
import { LightsBane } from '../screens/Class/Melee/MeleeWeapons/CraftWeapons/LightsBane'
import {Volcano} from '../screens/Class/Melee/MeleeWeapons/CraftWeapons/Volcano'
import { TrueNightsEdge } from "../screens/Class/Melee/MeleeWeapons/Pre-Plantera/TrueNightsEdge"

import { MeleePreBosses } from "../screens/Class/Melee/Guide/Pre-bosses/MeleePreBosses"
import { MeleePreHardMode } from "../screens/Class/Melee/Guide/Pre-hardmode/MeleePreHardMode"
import { MeleePreMechBosses } from "../screens/Class/Melee/Guide/Pre-MechBosses/MeleePreMechBosses"
import { MeleePrePlantera } from "../screens/Class/Melee/Guide/Pre-plantera/MeleePrePlantera"
import { MeleePreGolem } from "../screens/Class/Melee/Guide/Pre-Golem/MeleePreGolem"
import { MeleePreLunarEvents } from "../screens/Class/Melee/Guide/Pre-LunarEvents/MeleePreLunarEvents"
import { MeleeEndgame } from '../screens/Class/Melee/Guide/Endgame/MeleeEndgame'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
            <Route element={<Classes/>} path="/class" />

            {/* clases */}
            <Route element={<MeleeMain/>} path="/melee"/>
            <Route element={<Magic/>} path="/magic"/>
            <Route element={<Ranged/>} path="/ranged"/>
            <Route element={<Summoner/>} path="/summoner"/>

            {/* melee */}
            <Route element={<Starfury/>} path="/meleeWeapons/starfury"/>
            <Route element={<BladeOfGrass/>} path="/meleeWeapons/bladeofgrass"/>
            <Route element={<NightsEdge/>} path="/meleeWeapons/nightsEdge"/>
            <Route element={<PlatinumArmor/>} path="/meleeArmor/platinumArmor"/>
            <Route element={<MoltenArmor/>} path="/meleeArmor/moltenArmor"/>
            <Route element={<SharpeningStation/>} path="/meleeBafs/sharpeningStation" />
            <Route element={<Sake/>} path="/meleeBafs/sake"/>
            <Route element={<Ichor/>} path="/meleeBafs/ichor" />
            <Route element={<CursedFlames/>} path="/meleeBafs/cursedFlames" />
            <Route element={<IceSickle/>} path="/meleeWeapons/iceSickle" />
            <Route element={<ShadowflameKnife/>} path="/meleeWeapons/shadowflameKnife"/>
            <Route element={<TitaniumArmor/>} path="/meleeArmor/titanumArmor"/>
            <Route element={<WarriorEmblem/>} path="/meleeAcs/warriorEmblem"/>
            <Route element={<BerserkerGlove/>} path="/meleeAcs/berserkerGlove"/>
            <Route element={<WrathPotion/>} path="/meleeBafs/wrathPotion"/>
            <Route element={<Zenith/>} path="/meleeWeapons/zenith"/>
            <Route element={<Rage/>} path="/meleeBafs/rage"/>
            <Route element={<Muramasa/>} path="/meleeWeapons/muramasa"/>
            <Route element={<LightsBane/>} path="/meleeWeapons/lightsBane"/>
            <Route element={<Volcano/>} path="/meleeWeapons/volcano"/>

            {/* Wiki */}
            <Route element={<HardModeAnvils/>} path="/wiki/items/hardModeAnvils"/>
            <Route element={<Jungle_Spores/>} path="/wiki/items/jungle_Spore"/>
            <Route element={<Stingers/>} path="/wiki/items/stinger"/>
            <Route element={<Vine/>} path="/wiki/items/vine"/>
            <Route element={<PreHardModeAnvils/>} path="/wiki/preHardMode/preHardModeAnvils"/>
            <Route element={<IronBar/>} path="/wiki/preHardMode/ironBar"/>
            <Route element={<LeadBar/>} path="/wiki/preHardMode/leadBar"/>
            <Route element={<TrueNightsEdge/>} path="/meleeWeapons/trueNightsEdge"/>

            {/* melee stages */}
            <Route element={<MeleePreBosses/>} path="/melee/MeleePreBosses"/>
            <Route element={<MeleePreHardMode/>} path="/melee/MeleePreHardMode"/>
            <Route element={<MeleePreMechBosses/>} path="/melee/MeleePreMechBosses"/>
            <Route element={<MeleePrePlantera/>} path="/melee/MeleePrePlantera"/>
            <Route element={<MeleePreGolem/>} path="/melee/MeleePreGolem"/>
            <Route element={<MeleePreLunarEvents/>} path="/melee/MeleePreLunarEvents"/>
            <Route element={<MeleeEndgame/>} path="/melee/MeleeEndgame"/>

            {/* <Route element={} path=""/> */}
        </Routes>
    </BrowserRouter>
  )
}
