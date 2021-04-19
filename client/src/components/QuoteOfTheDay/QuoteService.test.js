import {
    fetchKanyeQuote,
    fetchInspirationalQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
} from "./quoteService";

let text;
let author;
function setText(newText) {
    text = newText;
}
function setAuthor(newAuthor) {
    author = newAuthor;
}

beforeEach(() => {
    text = "";
    author = "";
});

test("It fetches Kanye West quotes correctly", () => {
    fetchKanyeQuote(setText, setAuthor).then(() => {
        expect(text).toBeInstanceOf(String);
        expect(author).toBeInstanceOf(String);
        expect(text).not.toEqual("");
        expect(text).not.toEqual("Sorry, could not get quote");
        expect(author).toEqual("Kanye West");
    });
});

test("It fetches inspirational quotes correctly", () => {
    fetchInspirationalQuote(setText, setAuthor).then(() => {
        expect(text).toBeInstanceOf(String);
        expect(author).toBeInstanceOf(String);
        expect(text).not.toEqual("");
        expect(text).not.toEqual("Sorry, could not get quote");
        expect(author).not.toEqual("");
    });
});

test("It fetches Taylor Swift quotes correctly", () => {
    fetchTaylorSwiftQuote(setText, setAuthor).then(() => {
        expect(text).toBeInstanceOf(String);
        expect(author).toBeInstanceOf(String);
        expect(text).not.toEqual("");
        expect(text).not.toEqual("Sorry, could not get quote");
        expect(author).toEqual("Taylor Swift");
    });
});

test("It fetches programming quotes correctly", () => {
    fetchProgrammingQuote(setText, setAuthor).then(() => {
        expect(text).toBeInstanceOf(String);
        expect(author).toBeInstanceOf(String);
        expect(text).not.toEqual("");
        expect(text).not.toEqual("Sorry, could not get quote");
        expect(author).not.toEqual("");
    });
});

test("It fetches anime quotes correctly", () => {
    fetchAnimeQuote(setText, setAuthor).then(() => {
        expect(text).toBeInstanceOf(String);
        expect(author).toBeInstanceOf(String);
        expect(text).not.toEqual("");
        expect(text).not.toEqual("Sorry, could not get quote");
        expect(author).not.toEqual("");
    });
});
