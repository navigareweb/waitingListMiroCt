import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import copertina from "../../public/web.png";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          Aperta dal <strong>20 Gennaio</strong> al <strong>7 Luglio</strong> a
          Catania, al <strong>Palazzo della cultura</strong>, la mostra, che si
          avvale di prestiti provenienti da importanti musei spagnoli e francesi
          conta la presenza di circa 80 opere tra dipinti, tempere, acquerelli,
          disegni, sculture e ceramiche, oltre ad una serie di opere grafiche,
          libri e documenti.
        </p>
        <p>
          La mostra intende proporre un percorso attraverso il mondo creativo di
          uno dei maggiori artisti dell’arte del novecento,
          <strong>Joan Miró</strong>, artista esponente della
          <strong> corrente surrealista </strong>, assieme a Picasso e Dalì.
        </p>
        <Link
          href={"https://www.navigaresrl.com/mostra/miro-la-gioia-del-colore/"}
          className={styles.link}
        >
          Info Mostra
        </Link>
      </div>
      <div className={styles.iscrizione}>
        <h4>
          Iscriviti entro il 15 Gennaio alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h4>
        <h5>
          * per ricevere lo sconto devi inviarci il NOMINATIVO, lo sconto verrà
          applicato SOLO per il biglietto INTERO FERIALE acquistato in
          biglietteria
        </h5>
        <Link
          href={
            "mailto:web@navigaresrl.com?subject=Iscrizione Waiting List Miró Catania"
          }
        >
          <p>SCRIVICI NOME E COGNOME</p>
        </Link>
        <h6>N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati</h6>
      </div>
      <div className={styles.footer}>
        Una produzione di
        <Link href={"https://www.navigaresrl.com/"}>NavigareSrl</Link>
      </div>
    </main>
  );
}
