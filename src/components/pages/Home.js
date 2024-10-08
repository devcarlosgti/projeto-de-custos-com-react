import styles from './Home.module.css'
import savinds from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savinds} alt="Costs"/>
        </section>
    )
}
export default Home