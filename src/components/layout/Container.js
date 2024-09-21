import styles from './Container.module.css'

function Container(props){
    return(
        // vão meus route(meus conteudo) dentro dessa div(props.children)(fica encapsulada)
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}

export default Container