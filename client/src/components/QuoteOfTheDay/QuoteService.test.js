import {
    fetchKanyeQuote,
    fetchChuckNorrisQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
} from "./quoteService";

function setText(text) {
    console.log(text);
}

function setAuthor(author) {
    console.log(author);
}

test("It fetches Kanye West quotes correctly", () => {
    let { text, author } = fetchKanyeQuote(setText, setAuthor);
    expect(text !== "");
    expect(author === "Kanye West");
});

test("It fetches Chuck Norris quotes correctly", () => {
    let { text, author } = fetchChuckNorrisQuote(setText, setAuthor);
    expect(text !== "");
    expect(author === "Anonymous");
});

test("It fetches Taylor Swift quotes correctly", () => {
    let { text, author } = fetchTaylorSwiftQuote(setText, setAuthor);
    expect(text !== "");
    expect(author === "Taylor Swift");
});

test("It fetches programming quotes correctly", () => {
    let { text, author } = fetchProgrammingQuote(setText, setAuthor);
    expect(text !== "");
    expect(author !== "");
});

test("It fetches anime quotes correctly", () => {
    let { text, author } = fetchAnimeQuote(setText, setAuthor);
    expect(text !== "");
    expect(author !== "");
});
