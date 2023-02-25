'use client' //No SSR for now
import styles from './page.module.css'
import React, {createContext} from "react";
import { Button } from '@material-ui/core';

const Context = createContext({})

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
            <p><a href="/testroute">This link tests folder routes</a></p>
            <Button variant="contained"> This button is from Material UI core </Button>
        </div>
    </main>
  )
}
