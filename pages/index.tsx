import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
const AceEdit=dynamic(()=>import('../components/AceEdit'),{ssr:false});

const languages = [
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "handlebars",
  "golang",
  "csharp",
  "elixir",
  "typescript",
  "css"
];
 const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];

const defaultValue = `function sayHi() {
  console.log("hello world");
}`;

const Home: NextPage = () => {
  const [lang, setLang] = useState('javascript');
  const [theme, setTheme] = useState('github');
  const [readOnly, setReadOnly] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>React Ace Edit</title>
        <meta name="description" content="react-ace edit demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.control}>
          <span className={styles.select}>
            <select
              name="mode"
              onChange={e => setLang(e.target.value)}
              value={lang}
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </span>
          <span className={styles.select}>
            <select
              name="theme"
              onChange={e => setTheme(e.target.value)}
              value={theme}
            >
              {themes.map(theme => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </span>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={readOnly}
              onChange={e =>
                setReadOnly(
                  e.target.checked
                )
              }
            />
            readOnly
          </label>
        </p>
        <AceEdit
          mode={lang}
          theme={theme}
          defaultValue={defaultValue}
          readOnly={readOnly}
          height="400px"
          width="400px"
        />
      </main>
    </div>
  )
}

export default Home
