import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Misael!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aprendiz de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou com meu irmão que já era especializado nessa área. A partir daí, comecei a surgir um interesse e foi onde comecei a fazer alguns cursos na ALura.
            </p>
            <p className={styles.paragrafo}>
                Ainda cursando o Ensino Médio, já estava estudando para um dia me tornar um programador e empreendedor.
            </p>
            <p className={styles.paragrafo}>
                Com isso, estou tendo várias experiência para um dia cumprir minhas metas e conquistar meus objetivos. Espero que você um dia, assim como eunaorenda bastante!
            </p>
        </PostModelo>
    )
}