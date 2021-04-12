import React, { useState } from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import {
    fetchKanyeQuote,
    fetchChuckNorrisQuote,
    fetchTaylorSwiftQuote,
    fetchProgrammingQuote,
    fetchAnimeQuote,
} from "./quoteService";

import QuoteOfTheDay from ".";

let component;

function setText(text) {
    console.log(text);
}

function setAuthor(author) {
    console.log(author);
}

beforeEach(() => {
    component = shallow(<QuoteOfTheDay />);
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<QuoteOfTheDay />);
    expect(snapshotComponent).toMatchSnapshot();
});

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
