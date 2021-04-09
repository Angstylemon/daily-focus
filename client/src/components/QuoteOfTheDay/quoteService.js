async function fetchKanyeQuote(setText, setAuthor) {
    await fetch("https://api.kanye.rest")
        .then((res) => {
            res.json().then((jsonRes) => {
                const newQuote = jsonRes.quote;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor("Kanye West");
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

async function fetchChuckNorrisQuote(setText, setAuthor) {
    await fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => {
            res.json().then((jsonRes) => {
                const newQuote = jsonRes.value;
                if (newQuote) {
                    setText('"' + newQuote + '"');
                    setAuthor("Anonymous");
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
    fetchChuckNorrisQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
};
