import React from 'react'
import { Image } from 'semantic-ui-react'
import LogoSW from '../../assets/logoStarWars.svg'
import styles from './home.module.css'

function Home() {
   return (
      <Image className={styles.star_wars_logo} src={LogoSW} alt="Logotipo" fluid />
   )
}

export default Home;