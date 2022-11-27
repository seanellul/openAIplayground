import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>Fuck Standardisation</title>
        <link rel="icon" href="/dog.jpg" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.jpg" className={styles.icon} />
        <h4>Because we were destined for more than just simple regurgitation</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="You are amazing."
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Fuck Standardisation" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
