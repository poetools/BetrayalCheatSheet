import React from 'react';
import './BetrayalCheatSheet.css';

class BetrayalCheatSheet extends React.Component {
    render() {
        return (
            <div className="BetrayalCheatSheet">
                <section id="Landing-Description">
                    <h1>
                        Path of Exile - Syndicate Cheat Sheet
                    </h1>
                    <h2>
                        An interactive tool that lets you highlight syndicate rewards for easy reference. Click a square below to get started.
                    </h2>
                </section>
                <section id="Cheatsheet-Table">
                    <this.BetrayalTable />
                </section>
            </div>
        );
    }

    BetrayalTable() {
        return (
            <table id="SyndicateTable" className="SyndicateTable">
                <thead>
                <tr>
                    <td/>
                    <td>
                        <img src={"assets/members/Aisling.png"} alt="Aisling"/>
                        <h1>Aisling</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Cameria.png"} alt="Cameria"/>
                        <h1>Cameria</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Elreon.png"} alt="Elreon"/>
                        <h1>Elreon</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Gravicius.png"} alt="Gravicius"/>
                        <h1>Gravicius</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Guff.png"} alt="Guff"/>
                        <h1>Guff</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Haku.png"} alt="Haku"/>
                        <h1>Haku</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Hillock.png"} alt="Hillock"/>
                        <h1>Hillock</h1>
                    </td>
                    <td>
                        <img src={"assets/members/It_That_Fled.png"} alt="It That Fled"/>
                        <h1>It That Fled</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Janus.png"} alt="Janus"/>
                        <h1>Janus</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Jorgin.png"} alt="Jorgin"/>
                        <h1>Jorgin</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Korell.png"} alt="Korell"/>
                        <h1>Korell</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Leo.png"} alt="Leo"/>
                        <h1>Leo</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Riker.png"} alt="Riker"/>
                        <h1>Riker</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Rin.png"} alt="Rin"/>
                        <h1>Rin</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Tora.png"} alt="Tora"/>
                        <h1>Tora</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Vagan.png"} alt="Vagan"/>
                        <h1>Vagan</h1>
                    </td>
                    <td>
                        <img src={"assets/members/Vorici.png"} alt="Vorici"/>
                        <h1>Vorici</h1>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src={"assets/locations/1transport.png"} alt="Transport"/></td>
                    <td><img src={"assets/encounters/aisling/1transport.png"} alt="Transport"/><p>1/2/3 Weapons with Veiled mods</p></td>
                    <td><img src={"assets/encounters/cameria/1transport.png"} alt="Transport"/><p>1 Timeworn Unique</p></td>
                    <td><img src={"assets/encounters/elreon/1transport.png"} alt="Transport"/><p>1/2/3 Unique Weapons</p></td>
                    <td><img src={"assets/encounters/gravicius/1transport.png"} alt="Transport"/><p>1 Full Stack of Div. Cards</p></td>
                    <td><img src={"assets/encounters/guff/1transport.png"} alt="Transport"/><p>8/12/16 Timed Craft</p></td>
                    <td><img src={"assets/encounters/haku/1transport.png"} alt="Transport"/><p>Random Items</p></td>
                    <td><img src={"assets/encounters/hillock/1transport.png"} alt="Transport"/><p>24/26/28 Quality to Weapon</p></td>
                    <td><img src={"assets/encounters/it_that_fled/1transport.png"} alt="Transport"/><p>Breach Splinters</p></td>
                    <td><img src={"assets/encounters/janus/1transport.png"} alt="Transport"/><p>Quality Currency</p></td>
                    <td><img src={"assets/encounters/jorgin/1transport.png"} alt="Transport"/><p>1/2/3 Talismans</p></td>
                    <td><img src={"assets/encounters/korell/1transport.png"} alt="Transport"/><p>Random Essences</p></td>
                    <td><img src={"assets/encounters/leo/1transport.png"} alt="Transport"/><p>Silver Coins</p></td>
                    <td><img src={"assets/encounters/riker/1transport.png"} alt="Transport"/><p>Currency - Timed Take One</p></td>
                    <td><img src={"assets/encounters/rin/1transport.png"} alt="Transport"/><p>Normal Maps</p></td>
                    <td><img src={"assets/encounters/tora/1transport.png"} alt="Transport"/><p>Items - Timed Take One</p></td>
                    <td><img src={"assets/encounters/vagan/1transport.png"} alt="Transport"/><p>Legion Splinters</p></td>
                    <td><img src={"assets/encounters/vorici/1transport.png"} alt="Transport"/><p>Gems with Random Quality</p></td>
                </tr>
                <tr>
                    <td><img src={"assets/locations/2fortification.png"} alt="Fortification"/></td>
                    <td><img src={"assets/encounters/aisling/2fort.png"} alt="Fortification"/><p>1/2/3 Armours with Veiled mods</p></td>
                    <td><img src={"assets/encounters/cameria/2fort.png"} alt="Fortification"/><p>Harbinger and Horizon Orbs</p></td>
                    <td><img src={"assets/encounters/elreon/2fort.png"} alt="Fortification"/><p>1/2/3 Unique Armours</p></td>
                    <td><img src={"assets/encounters/gravicius/2fort.png"} alt="Fortification"/><p>Random Div. Cards</p></td>
                    <td><img src={"assets/encounters/guff/2fort.png"} alt="Fortification"/><p>10/15/20 Timed Craft</p></td>
                    <td><img src={"assets/encounters/haku/2fort.png"} alt="Fortification"/><p>Magic/Rare/Unique Strongbox</p></td>
                    <td><img src={"assets/encounters/hillock/2fort.png"} alt="Fortification"/><p>24/26/28 Quality to Armour</p></td>
                    <td><img src={"assets/encounters/it_that_fled/2fort.png"} alt="Fortification"/><p>Abyss Jewels</p></td>
                    <td><img src={"assets/encounters/janus/2fort.png"} alt="Fortification"/><p>Currency Shards</p></td>
                    <td><img src={"assets/encounters/jorgin/2fort.png"} alt="Fortification"/><p>1/2/3 Rares with Aspect mods</p></td>
                    <td><img src={"assets/encounters/korell/2fort.png"} alt="Fortification"/><p>Map Fragments</p></td>
                    <td><img src={"assets/encounters/leo/2fort.png"} alt="Fortification"/><p>Random Currency</p></td>
                    <td><img src={"assets/encounters/riker/2fort.png"} alt="Fortification"/><p>Unique - Timed Take One</p></td>
                    <td><img src={"assets/encounters/rin/2fort.png"} alt="Fortification"/><p>Rare Maps</p></td>
                    <td><img src={"assets/encounters/tora/2fort.png"} alt="Fortification"/><p>Glove/Boot/Helms with Lab Enchant</p></td>
                    <td><img src={"assets/encounters/vagan/2fort.png"} alt="Fortification"/><p>Legion Chests</p></td>
                    <td><img src={"assets/encounters/vorici/2fort.png"} alt="Fortification"/><p>Socket Currency</p></td>
                </tr>
                <tr>
                    <td><img src={"assets/locations/3research.png"} alt="Research"/></td>
                    <td><img src={"assets/encounters/aisling/3research.png"} alt="Research"/><p>Add 1-2 Veiled mods to Rare Item</p></td>
                    <td><img src={"assets/encounters/cameria/3research.png"} alt="Research"/><p>Sextants</p></td>
                    <td><img src={"assets/encounters/elreon/3research.png"} alt="Research"/><p>1/2/3 Unique Jewellery</p></td>
                    <td><img src={"assets/encounters/gravicius/3research.png"} alt="Research"/><p>Swap your Div. Card for a random one</p></td>
                    <td><img src={"assets/encounters/guff/3research.png"} alt="Research"/><p>10/15/20 Timed Craft</p></td>
                    <td><img src={"assets/encounters/haku/3research.png"} alt="Research"/><p>Random Items with Quality</p></td>
                    <td><img src={"assets/encounters/hillock/3research.png"} alt="Research"/><p>22/24/26 Quality to Flask</p></td>
                    <td><img src={"assets/encounters/it_that_fled/3research.png"} alt="Research"/><p>T1/T2/T3 Upgrade Breachstone</p></td>
                    <td><img src={"assets/encounters/janus/3research.png"} alt="Research"/><p>Perandus Coins and Cadiro</p></td>
                    <td><img src={"assets/encounters/jorgin/3research.png"} alt="Research"/><p>Tier 1/2/3 Corrupt Amulet to Talisman</p></td>
                    <td><img src={"assets/encounters/korell/3research.png"} alt="Research"/><p>Fossils</p></td>
                    <td><img src={"assets/encounters/leo/3research.png"} alt="Research"/><p>Blessed/Divine/Exalt on an Item</p></td>
                    <td><img src={"assets/encounters/riker/3research.png"} alt="Research"/><p>Veiled Rare - Timed Take One</p></td>
                    <td><img src={"assets/encounters/rin/3research.png"} alt="Research"/><p>Unique Maps</p></td>
                    <td><img src={"assets/encounters/tora/3research.png"} alt="Research"/><p>20/70/200M XP to a Gem</p></td>
                    <td><img src={"assets/encounters/vagan/3research.png"} alt="Research"/><p>Incubators</p></td>
                    <td><img src={"assets/encounters/vorici/3research.png"} alt="Research"/><p>1/1-2/1-3 White Sockets on an Item</p></td>
                </tr>
                <tr>
                    <td><img src={"assets/locations/4intervention.png"} alt="Intervention"/></td>
                    <td><img src={"assets/encounters/aisling/4intervention.png"} alt="Intervention"/><p>Jewellery with Veiled mod</p></td>
                    <td><img src={"assets/encounters/cameria/4intervention.png"} alt="Intervention"/><p>Sulphite<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/elreon/4intervention.png"} alt="Intervention"/><p>Reliquary<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/gravicius/4intervention.png"} alt="Intervention"/><p>Divination<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/guff/4intervention.png"} alt="Intervention"/><p>10/15/20 Timed Craft</p></td>
                    <td><img src={"assets/encounters/haku/4intervention.png"} alt="Intervention"/><p>Ambush<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/hillock/4intervention.png"} alt="Intervention"/><p>25/30/35 Quality to Map</p></td>
                    <td><img src={"assets/encounters/it_that_fled/4intervention.png"} alt="Intervention"/><p>Breach<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/janus/4intervention.png"} alt="Intervention"/><p>Perandus<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/jorgin/4intervention.png"} alt="Intervention"/><p>Bestiary<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/korell/4intervention.png"} alt="Intervention"/><p>Elder<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/leo/4intervention.png"} alt="Intervention"/><p>Torment<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/riker/4intervention.png"} alt="Intervention"/><p>Div. Card - Timed Take One</p></td>
                    <td><img src={"assets/encounters/rin/4intervention.png"} alt="Intervention"/><p>Cartography<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/tora/4intervention.png"} alt="Intervention"/><p>Harbinger<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/vagan/4intervention.png"} alt="Intervention"/><p>Legion<br/>Scarab</p></td>
                    <td><img src={"assets/encounters/vorici/4intervention.png"} alt="Intervention"/><p>Shaper<br/>Scarab</p></td>
                </tr>
                </tbody>
            </table>
        );
    }

}

export default BetrayalCheatSheet;
