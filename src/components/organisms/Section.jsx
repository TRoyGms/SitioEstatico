import Cards from "../molecules/Cards";
import mysql from "../../data/mysql";
import './Section.css'

function Section() {
    return (
        <>
        <div id="cards_section1">
            <h1 id="S1">Mis Juegos Favs</h1>
                {mysql.section1.map(section1 => 
                <Cards image={section1.image} text={section1.text}></Cards>)}
        </div>
        <div id="cards_section2">
            <h1 id="S2">Mis Canales de Youtube Favs</h1>
            {mysql.section2.map(section2 => 
                <Cards image={section2.image} text={section2.text}></Cards>)}
        </div>
        <div id="cards_section3">
            <h1 id="S3">Mis Canciones Favs</h1>
            {mysql.section3.map(section3 => 
                <Cards image={section3.image} text={section3.text}></Cards>)}
        </div>
        </>
    );
}

export default Section;