import React from 'react';
import './BetrayalCheatSheet.css';

class BetrayalCheatSheet extends React.Component {
    render() {
        return (
            <div id="BetrayalCheatSheet" className="BetrayalCheatSheet">
                <section id="Landing-Description">
                    <h1>
                        Path of Exile - Syndicate Cheat Sheet
                    </h1>
                    <h2>
                        An interactive tool that lets you highlight syndicate rewards for easy reference. Click a square below to get started.
                    </h2>
                </section>
                <section id="Cheatsheet-Table">
                    <BetrayalTable />
                </section>
            </div>
        );
    }

    BetrayalTableCell(imageLoc, altText, infoText) {
        return (
            <td><img src={imageLoc} alt={altText}/><p>{infoText}</p></td>
        );
    }

}

class BetrayalTable extends React.Component {
    render() {
        return (
            <table id="SyndicateTable" className="SyndicateTable">
                <thead>
                <tr>
                    <td/>
                    <BetrayalTableHeader img={"assets/members/Aisling.png"} alt={"Aisling"} description={"Aisling"}/>
                    <BetrayalTableHeader img={"assets/members/Cameria.png"} alt={"Cameria"} description={"Cameria"}/>
                    <BetrayalTableHeader img={"assets/members/Elreon.png"} alt={"Elreon"} description={"Elreon"}/>
                    <BetrayalTableHeader img={"assets/members/Gravicius.png"} alt={"Gravicius"} description={"Gravicius"}/>
                    <BetrayalTableHeader img={"assets/members/Guff.png"} alt={"Guff"} description={"Guff"}/>
                    <BetrayalTableHeader img={"assets/members/Haku.png"} alt={"Haku"} description={"Haku"}/>
                    <BetrayalTableHeader img={"assets/members/Hillock.png"} alt={"Hillock"} description={"Hillock"}/>
                    <BetrayalTableHeader img={"assets/members/It_That_Fled.png"} alt={"It That Fled"} description={"It That Fled"}/>
                    <BetrayalTableHeader img={"assets/members/Janus.png"} alt={"Janus"} description={"Janus"}/>
                    <BetrayalTableHeader img={"assets/members/Jorgin.png"} alt={"Jorgin"} description={"Jorgin"}/>
                    <BetrayalTableHeader img={"assets/members/Korell.png"} alt={"Korell"} description={"Korell"}/>
                    <BetrayalTableHeader img={"assets/members/Leo.png"} alt={"Leo"} description={"Leo"}/>
                    <BetrayalTableHeader img={"assets/members/Riker.png"} alt={"Riker"} description={"Riker"}/>
                    <BetrayalTableHeader img={"assets/members/Rin.png"} alt={"Rin"} description={"Rin"}/>
                    <BetrayalTableHeader img={"assets/members/Tora.png"} alt={"Tora"} description={"Tora"}/>
                    <BetrayalTableHeader img={"assets/members/Vagan.png"} alt={"Vagan"} description={"Vagan"}/>
                    <BetrayalTableHeader img={"assets/members/Vorici.png"} alt={"Vorici"} description={"Vorici"}/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <BetrayalTableCell img={"assets/locations/1transport.png"} alt={"Transport"} description={""}/>
                    <BetrayalTableCell img={"assets/encounters/aisling/1transport.png"} alt={"Transport"} description={"1/2/3 Weapons with Veiled mods"}/>
                    <BetrayalTableCell img={"assets/encounters/cameria/1transport.png"} alt={"Transport"} description={"1 Timeworn Unique"}/>
                    <BetrayalTableCell img={"assets/encounters/elreon/1transport.png"} alt={"Transport"} description={"1/2/3 Unique Weapons"}/>
                    <BetrayalTableCell img={"assets/encounters/gravicius/1transport.png"} alt={"Transport"} description={"1 Full Stack of Div. Cards"}/>
                    <BetrayalTableCell img={"assets/encounters/guff/1transport.png"} alt={"Transport"} description={"8/12/16 Timed Craft"}/>
                    <BetrayalTableCell img={"assets/encounters/haku/1transport.png"} alt={"Transport"} description={"Random Items"}/>
                    <BetrayalTableCell img={"assets/encounters/hillock/1transport.png"} alt={"Transport"} description={"24/26/28 Quality to Weapon"}/>
                    <BetrayalTableCell img={"assets/encounters/it_that_fled/1transport.png"} alt={"Transport"} description={"Breach Splinters"}/>
                    <BetrayalTableCell img={"assets/encounters/janus/1transport.png"} alt={"Transport"} description={"Quality Currency"}/>
                    <BetrayalTableCell img={"assets/encounters/jorgin/1transport.png"} alt={"Transport"} description={"1/2/3 Talismans"}/>
                    <BetrayalTableCell img={"assets/encounters/korell/1transport.png"} alt={"Transport"} description={"Random Essences"}/>
                    <BetrayalTableCell img={"assets/encounters/leo/1transport.png"} alt={"Transport"} description={"Silver Coins"}/>
                    <BetrayalTableCell img={"assets/encounters/riker/1transport.png"} alt={"Transport"} description={"Currency - Timed Take One"}/>
                    <BetrayalTableCell img={"assets/encounters/rin/1transport.png"} alt={"Transport"} description={"Normal Maps"}/>
                    <BetrayalTableCell img={"assets/encounters/tora/1transport.png"} alt={"Transport"} description={"Items - Timed Take One"}/>
                    <BetrayalTableCell img={"assets/encounters/vagan/1transport.png"} alt={"Transport"} description={"Legion Splinters"}/>
                    <BetrayalTableCell img={"assets/encounters/vorici/1transport.png"} alt={"Transport"} description={"Gems with Random Quality"}/>
                </tr>
                <tr>
                    <BetrayalTableCell img={"assets/locations/2fortification.png"} alt={"Fortification"} description={""}/>
                    <BetrayalTableCell img={"assets/encounters/aisling/2fort.png"} alt={"Fortification"} description={"1/2/3 Armours with Veiled mods"}/>
                    <BetrayalTableCell img={"assets/encounters/cameria/2fort.png"} alt={"Fortification"} description={"Harbinger and Horizon Orbs"}/>
                    <BetrayalTableCell img={"assets/encounters/elreon/2fort.png"} alt={"Fortification"} description={"1/2/3 Unique Armours"}/>
                    <BetrayalTableCell img={"assets/encounters/gravicius/2fort.png"} alt={"Fortification"} description={"Random Div. Cards"}/>
                    <BetrayalTableCell img={"assets/encounters/guff/2fort.png"} alt={"Fortification"} description={"10/15/20 Timed Craft"}/>
                    <BetrayalTableCell img={"assets/encounters/haku/2fort.png"} alt={"Fortification"} description={"Magic/Rare/Unique Strongbox"}/>
                    <BetrayalTableCell img={"assets/encounters/hillock/2fort.png"} alt={"Fortification"} description={"24/26/28 Quality to Armour"}/>
                    <BetrayalTableCell img={"assets/encounters/it_that_fled/2fort.png"} alt={"Fortification"} description={"Abyss Jewels"}/>
                    <BetrayalTableCell img={"assets/encounters/janus/2fort.png"} alt={"Fortification"} description={"Currency Shards"}/>
                    <BetrayalTableCell img={"assets/encounters/jorgin/2fort.png"} alt={"Fortification"} description={"1/2/3 Rares with Aspect mods"}/>
                    <BetrayalTableCell img={"assets/encounters/korell/2fort.png"} alt={"Fortification"} description={"Map Fragments"}/>
                    <BetrayalTableCell img={"assets/encounters/leo/2fort.png"} alt={"Fortification"} description={"Random Currency"}/>
                    <BetrayalTableCell img={"assets/encounters/riker/2fort.png"} alt={"Fortification"} description={"Unique - Timed Take One"}/>
                    <BetrayalTableCell img={"assets/encounters/rin/2fort.png"} alt={"Fortification"} description={"Rare Maps"}/>
                    <BetrayalTableCell img={"assets/encounters/tora/2fort.png"} alt={"Fortification"} description={"Glove/Boot/Helms with Lab Enchant"}/>
                    <BetrayalTableCell img={"assets/encounters/vagan/2fort.png"} alt={"Fortification"} description={"Legion Chests"}/>
                    <BetrayalTableCell img={"assets/encounters/vorici/2fort.png"} alt={"Fortification"} description={"Socket Currency"}/>
                </tr>
                <tr>
                    <BetrayalTableCell img={"assets/locations/3research.png"} alt={"Research"} description={""}/>
                    <BetrayalTableCell img={"assets/encounters/aisling/3research.png"} alt={"Research"} description={"Add 1-2 Veiled mods to Rare Item"}/>
                    <BetrayalTableCell img={"assets/encounters/cameria/3research.png"} alt={"Research"} description={"Sextants"}/>
                    <BetrayalTableCell img={"assets/encounters/elreon/3research.png"} alt={"Research"} description={"1/2/3 Unique Jewellery"}/>
                    <BetrayalTableCell img={"assets/encounters/gravicius/3research.png"} alt={"Research"} description={"Swap your Div. Card for a random one"}/>
                    <BetrayalTableCell img={"assets/encounters/guff/3research.png"} alt={"Research"} description={"10/15/20 Timed Craft"}/>
                    <BetrayalTableCell img={"assets/encounters/haku/3research.png"} alt={"Research"} description={"Random Items with Quality"}/>
                    <BetrayalTableCell img={"assets/encounters/hillock/3research.png"} alt={"Research"} description={"22/24/26 Quality to Flask"}/>
                    <BetrayalTableCell img={"assets/encounters/it_that_fled/3research.png"} alt={"Research"} description={"T1/T2/T3 Upgrade Breachstone"}/>
                    <BetrayalTableCell img={"assets/encounters/janus/3research.png"} alt={"Research"} description={"Perandus Coins and Cadiro"}/>
                    <BetrayalTableCell img={"assets/encounters/jorgin/3research.png"} alt={"Research"} description={"Tier 1/2/3 Corrupt Amulet to Talisman"}/>
                    <BetrayalTableCell img={"assets/encounters/korell/3research.png"} alt={"Research"} description={"Fossils"}/>
                    <BetrayalTableCell img={"assets/encounters/leo/3research.png"} alt={"Research"} description={"Blessed/Divine/Exalt on an Item"}/>
                    <BetrayalTableCell img={"assets/encounters/riker/3research.png"} alt={"Research"} description={"Veiled Rare - Timed Take One"}/>
                    <BetrayalTableCell img={"assets/encounters/rin/3research.png"} alt={"Research"} description={"Unique Maps"}/>
                    <BetrayalTableCell img={"assets/encounters/tora/3research.png"} alt={"Research"} description={"20/70/200M XP to a Gem"}/>
                    <BetrayalTableCell img={"assets/encounters/vagan/3research.png"} alt={"Research"} description={"Incubators"}/>
                    <BetrayalTableCell img={"assets/encounters/vorici/3research.png"} alt={"Research"} description={"1/1-2/1-3 White Sockets on an Item"}/>
                </tr>
                <tr>
                    <BetrayalTableCell img={"assets/locations/4intervention.png"} alt={"Intervention"} description={""}/>
                    <BetrayalTableCell img={"assets/encounters/aisling/4intervention.png"} alt={"Intervention"} description={"Jewellery with Veiled mod"}/>
                    <BetrayalTableCell img={"assets/encounters/cameria/4intervention.png"} alt={"Intervention"} description={"Sulphite\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/elreon/4intervention.png"} alt={"Intervention"} description={"Reliquary\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/gravicius/4intervention.png"} alt={"Intervention"} description={"Divination\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/guff/4intervention.png"} alt={"Intervention"} description={"10/15/20 Timed Craft"}/>
                    <BetrayalTableCell img={"assets/encounters/haku/4intervention.png"} alt={"Intervention"} description={"Ambush\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/hillock/4intervention.png"} alt={"Intervention"} description={"25/30/35 Quality to Map"}/>
                    <BetrayalTableCell img={"assets/encounters/it_that_fled/4intervention.png"} alt={"Intervention"} description={"Breach\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/janus/4intervention.png"} alt={"Intervention"} description={"Perandus\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/jorgin/4intervention.png"} alt={"Intervention"} description={"Bestiary\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/korell/4intervention.png"} alt={"Intervention"} description={"Elder\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/leo/4intervention.png"} alt={"Intervention"} description={"Torment\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/riker/4intervention.png"} alt={"Intervention"} description={"Div. Card - Timed Take One"}/>
                    <BetrayalTableCell img={"assets/encounters/rin/4intervention.png"} alt={"Intervention"} description={"Cartography\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/tora/4intervention.png"} alt={"Intervention"} description={"Harbinger\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/vagan/4intervention.png"} alt={"Intervention"} description={"Legion\nScarab"}/>
                    <BetrayalTableCell img={"assets/encounters/vorici/4intervention.png"} alt={"Intervention"} description={"Shaper\nScarab"}/>
                </tr>
                </tbody>
            </table>
        );
    }
}

class BetrayalTableCell extends React.Component {
    render() {
        const key = this.props.description;
        return (
            <td><img src={this.props.img} alt={this.props.alt}/>
                {this.props.description.split("\n").map(x => {
                    return <p key={key + x}>{x}</p>;
                })}
            </td>
        );
    }
}

class BetrayalTableHeader extends React.Component {
    render() {
        return (
            <td><img src={this.props.img} alt={this.props.alt}/>
                <h1>
                    {this.props.description}
                </h1>
            </td>
        );
    }
}



export default BetrayalCheatSheet;
