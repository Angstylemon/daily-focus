import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import style from "./style.module.scss";

export default function QuoteOfTheDay() {
    const [text, setText] = useState("");

    useEffect(() => {
        fetchChuckNorrisQuote();
    }, []);

    async function fetchKanyeQuote() {
        fetch("https://api.kanye.rest")
            .then((res) => {
                res.json().then((jsonRes) => {
                    if (jsonRes.quote) {
                        setText(jsonRes.quote);
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
                        setText(newQuote);
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

            <p className={style.content}>{text}</p>
        </div>
    );
}
