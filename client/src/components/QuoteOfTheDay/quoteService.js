async function fetchKanyeQuote(setText, setAuthor) {
    await fetch("https://api.kanye.rest")
        .then((res) => {
            res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor("Kanye West");
                    return { text: '"' + newQuote + '"', author: "Kanye West" };
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchInspirationalQuote(setText, setAuthor) {
    await fetch("https://type.fit/api/quotes")
        .then((res) => {
            res.json().then((jsonRes) => {
                const quoteIndex = Math.floor(Math.random() * jsonRes.length);
                const newQuote = jsonRes[quoteIndex];
                if (newQuote) {
                    setText('"' + newQuote.text + '"');
                    setAuthor(newQuote.author);
                    return { text: '"' + newQuote.text + '"', author: newQuote.author };
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchProgrammingQuote(setText, setAuthor) {
    await fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then((res) => {
            res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor(jsonRes.author);
                    return { text: '"' + newQuote + '"', author: jsonRes.author };
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchTaylorSwiftQuote(setText, setAuthor) {
    await fetch("https://api.taylor.rest/")
        .then((res) => {
            res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor("Taylor Swift");
                    return { text: '"' + newQuote + '"', author: "Taylor Swift" };
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

async function fetchAnimeQuote(setText, setAuthor) {
    await fetch("https://animechan.vercel.app/api/random")
        .then((res) => {
            res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor(jsonRes.character + ", " + jsonRes.anime);
                    return {
                        text: '"' + newQuote + '"',
                        author: jsonRes.character + ", " + jsonRes.anime,
                    };
                } else {
                    setText("Sorry, could not get quote");
                    setAuthor("");
                }
            });
        })
        .catch(() => {
            setText("Sorry, could not get quote");
            setAuthor("");
        });
}

export {
    fetchKanyeQuote,
    fetchInspirationalQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
};
