import './App.css';
import {Grid} from "@mui/material";
import './Herbst-14.jpg';
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import QuiltedImageList from "./QuiltedImageList";
import ContactForm from "./contactForm";
import NinaNitzscheIcon from "./NinaNitzscheIcon.png";
import Navbar from "./Navbar";
import Section from "./section";
import Appbar from "./Appbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-scroll";


function App() {

  return (
    <div className="App">

       <Appbar className="appbar"/>
      <Box sx={{ display: 'flex' }} className="box">
        <div className="heading"  >
            <img src={NinaNitzscheIcon} alt="Nina Nitzscge Photography" width="200" />
            <p>Nina Nitzsche Photography</p>
        <h1>Familienfotograf aus Johannisthal</h1>
        </div>
      </Box>

      <header className="App-header">
        <container>

          <Grid container spacing={2} className="information-text">
            <Grid item xs={12} md={4}>
                <h3>Die Summe unseres Lebens sind die Stunden, in denen wir liebten.
                  <p>- William
                      Busch</p></h3>
            </Grid>
            <Grid item  xs={12} md={4}>
              <p>
                Wisst ihr was ich liebe? Ich liebe meine Familie, "natürliches Outdoor-Licht" und glückliche Menschen noch glücklicher zu machen.

                Deshalb bin ich Familienfotografin in Johannisthal. Denn ich glaube, dass wir uns die Natur nicht nur das schönste Licht, sondern auch die schönste Individualität schenkt.
              </p>            </Grid>
            <Grid item  xs={12} md={4}>
              <p>
                Was mache ich als Familienfotografin?
                  <ul>
                      <li><strong>Kinderfotos</strong>, die beim Spielen & Lachen entstehen</li>
                      <li><strong>Paarbilder</strong>, die euch so zeigen wie ihr seid</li>
                      <li><strong>Familienfotos</strong> - Völlig unverkrampft & mit viel Spaß</li>
                      <li><strong>Baby- & Babybauchbilder</strong></li>
                  </ul>
              </p>
            </Grid>
          </Grid>

          <Grid container  spacing={2} className="informationText aboutMe"  id="AboutMe">
            <Grid item xs={12} sm={6} className="about">

            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>
                Hi ihr Lieben,
  ich bin Nina!
              </h2>
              <p>
                Als zweifache Mama habe ich schnell gemerkt, wie wichtig es ist die kleinen Momente aufzufangen. Denn das sind genau die Momente, die viel zu schnell verblassen.


                Ich bin davon überzeugt, dass besonders bei der Arbeit mit Familien eine besondere Empathie gefragt ist und freue mich, wenn ich euch mit dieser Empathie begleiten darf wertvolle Familienfotos zu schaffen.


                Als Familienfotografin ist es mir wichtig, dass jeder von euch auf den Fotos zu sehen ist.
                Schiefe Zähne, krumme Nase, Brille - Das interessiert die Kinder null.
                Eure Kinder interessieren sich aber für euch und lieben euch so wie ihr seid. Also ab vor die Linse. Lasst uns eure Emotionen, Momente und Geschichten festhalten.
              </p>

                  <Button variant="outlined" >KONTAKTIEREN</Button>
            </Grid>
          </Grid>
<div className="backgroundPadding">
    <div className="transparent">
        <h1 className="largeImage schnorkel">
            Verzaubernde Familienbilder aus Berlin Treptow
        </h1>
    </div>
            <Grid container  spacing={2} className="aboutMe treptow">
            <Grid item xs={12} md={6} className="location">
            </Grid>
            <Grid item xs={12} md={6} className="backgroundPadding" >
                <h3 className=" schnorkel darkFont" color="black">Warum ich so gern in Treptows Bezirken Familienfotos mache...</h3>

                <p>

                  Wusstet ihr, dass Berlin-Treptow jede Menge zu bieten hat? Wer an Treptow denkt, der denkt zu erst an die Wuhlheide (FEZ) und den Treptower Park. Beides ist toll & ich freu mich jedes mal, wenn ich die Fotografin bin, die euch dort mit eurer Familie fotografieren darf. Keine Frage. Aber wirklich verliebt habe ich mich als Familienfotografin in den Plänterwald. Auch hier lassen sich tolle Familienfotos am Wasser machen. Nur eben mit weniger Publikumsverkehr. Aber auch in Baumschulenweg gibt es tolle Spielplätze, die direkt am Wasser münden. Perfekt um die Kleinsten bei Laune zu halten ;)

                  In Johannisthal freue ich mich jedes Mal über den Landschaftspark, die Königsheide und den Johannisthaler Park. Ihr seht also, Treptow hat so viel mehr zu bieten.
              </p>
            </Grid>
          </Grid>
</div>
            <div className="near">
                <h3 className="schnorkel">Natürlichkeit & Nähe</h3>
                <p>
                    Eine möglichst entspannte Atmosphäre liegt mir sehr am Herzen. Ein besonderer Fokus liegt bei mir darauf die echten Momente aufzufangen. Denn dieses echte Herzklopfen ist, dass was die Bilder zu Erinnerungen werden lässt.

                    Ich versuche meinen Kunden möglichst wenig Anweisungen zu geben und stattdessen ihre Persönlichkeiten und Geschichten einzubringen. Ich fotografiere die Familien draußen und/oder in der von der Familie vertrauten Umgebung.

                    Bei mir sollen die Kinder sich auch wie Kinder benehmen. Egal, ob sie fasziniert einen Grashalm anschauen oder voller Energie durch die Gegend springen. Mit all dieser kindlichen Begeisterung entstehen die tollsten Kinderfotos.
                </p>
            </div>

            <Grid container  spacing={2} className="aboutMe" alignItems="center">
                <h2>
                    Ihr macht den Moment &
                    Ich die Fotos</h2>
                <Grid item xs={12} sm={6} className="momentFotos">
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p >

                        Lasst uns gemeinsam die schönsten Foto-Erinnerungen schaffen.

                        Als grünster Bezirk liefert Treptow-Köpenick die schönsten Ecken für einmalige Fotos. Mit vielen Spielplätzen, Parks, der Spree und auch kleinen Waldecken lassen sich wunderschöne Familienbilder zaubern.
  </p>
                    <Button variant="outlined">Mein Portfolio</Button>
                    <Link
                        activeClass="active"
                        to="Portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Typography textAlign="center">Mein Portfolio</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex' }} className="winter box">
                <div>
                    <p>Kinder halten uns nicht von Wichtigerem ab.</p>
                    <p className="bold-paragraph">Sie sind das Wichtigste.</p>
                    <p className="cursiv-paragraph">C.V. Levis</p>
                </div>
            </Box>
            <QuiltedImageList id="Portfolio"/>
        </container>
      </header>
        <Grid container id="Kontakt">
            <Grid item xs={12} sm={4}>
                <ContactForm/>
            </Grid>
            <Grid item xs={12} sm={8} className="pregnancy">
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
