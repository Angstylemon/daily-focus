import React, { useEffect, useState } from "react";
import { Fab } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import style from "./style.module.scss";
import SwitchCategory from "./SwitchCategory";

export default function QuoteOfTheDay() {
    const [text, setText] = useState("");
    const [isSwitchingSubject, setIsSwitchingSubject] = useState(false);
    const [category, setCategory] = useState("Taylor Swift");
    const [author, setAuthor] = useState("Taylor Swift");

    useEffect(() => {
        if (category === "Taylor Swift") {
            fetchTaylorSwiftQuote();
        } else if (category === "Programming") {
            fetchProgrammingQuote();
        } else if (category === "Anime") {
            fetchAnimeQuote();
        } else if (category === "Chuck Norris") {
            fetchChuckNorrisQuote();
        } else if (category === "Kanye West") {
            fetchKanyeQuote();
        } else {
            setText("Sorry, could not get quote");
        }
    }, [category]);

    async function fetchKanyeQuote() {
        fetch("https://api.kanye.rest")
            .then((res) => {
                res.json().then((jsonRes) => {
                    const newQuote = jsonRes.quote;
                    if (newQuote) {
                        setText('"' + newQuote + '"');
                        setAuthor("Kanye West");
                    } else {
                        setText("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setText("Sorry, could not get quote");
            });
    }
    async function fetchChuckNorrisQuote() {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => {
                res.json().then((jsonRes) => {
                    const newQuote = jsonRes.value;
                    if (newQuote) {
                        setText('"' + newQuote + '"');
                        setAuthor("Anonymous");
                    } else {
                        setText("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setText("Sorry, could not get quote");
            });
    }

    async function fetchAnimeQuote() {
        fetch("https://animechan.vercel.app/api/random")
            .then((res) => {
                res.json().then((jsonRes) => {
                    const newQuote = jsonRes.quote;
                    if (newQuote) {
                        setText('"' + newQuote + '"');
                        setAuthor(jsonRes.character + ", " + jsonRes.anime);
                    } else {
                        setText("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setText("Sorry, could not get quote");
            });
    }

    async function fetchProgrammingQuote() {
        fetch("http://quotes.stormconsultancy.co.uk/random.json")
            .then((res) => {
                res.json().then((jsonRes) => {
                    const newQuote = jsonRes.quote;
                    if (newQuote) {
                        setText('"' + newQuote + '"');
                        setAuthor(jsonRes.author);
                    } else {
                        setText("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setText("Sorry, could not get quote");
            });
    }

    async function fetchTaylorSwiftQuote() {
        fetch("https://api.taylor.rest/")
            .then((res) => {
                res.json().then((jsonRes) => {
                    const newQuote = jsonRes.quote;
                    if (newQuote) {
                        setText('"' + newQuote + '"');
                        setAuthor("Taylor Swift");
                    } else {
                        setText("Sorry, could not get quote");
                    }
                });
            })
            .catch((err) => {
                setText("Sorry, could not get quote");
            });
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <span className={style.title__text}>Quote of the day</span>
            </div>
            {isSwitchingSubject ? (
                <SwitchCategory
                    cancelClicked={() => setIsSwitchingSubject(false)}
                    updateCategory={setCategory}
                    currentCategory={category}
                />
            ) : (
                <div>
                    <p className={style.content}>{text}</p>
                    <p className={style.author}>{"- " + author}</p>
                    <div className={style.settingButtonDiv}>
                        <Fab
                            className={style.settingButton}
                            color="primary"
                            size="medium"
                            onClick={() => setIsSwitchingSubject(true)}
                        >
                            <SettingsIcon />
                        </Fab>
                    </div>
                </div>
            )}
        </div>
    );
}
