import {
    fetchKanyeQuote,
    fetchInspirationalQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
} from "./quoteService";

function setText(text) {
    return text;
}

function setAuthor(author) {
    return author;
}

test("It fetches Kanye West quotes correctly", () => {
    let { text, author } = fetchKanyeQuote(setText, setAuthor);
    expect(text !== "");
    expect(author === "Kanye West");
});

test("It fetches inspirational quotes correctly", () => {
    let { text, author } = fetchInspirationalQuote(setText, setAuthor);
    expect(text !== "");
    expect(author != "");
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
