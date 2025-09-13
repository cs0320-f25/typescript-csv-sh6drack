import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const EMPTY_CSV_PATH = path.join(__dirname, "../data/empty.csv");
const MIXED_CSV_PATH = path.join(__dirname, "../data/mixed.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const TRAILING_CSV_PATH = path.join(__dirname, "../data/trailing.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV handles empty files", async () => {
  const results = await parseCSV(EMPTY_CSV_PATH)
  expect(results).toHaveLength(0);
  for (const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV handles quoted fields", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH)
  
  expect(results[0]).toEqual(["name", "quote"]);
  expect(results[1]).toEqual(["Caesar", "veni, vidi, vici"]); 
  expect(results[2]).toEqual(["Alice", "hello, world"]);
});

test("parseCSV handles quoted fields 2", async () => {
  const results = await parseCSV(MIXED_CSV_PATH)
  expect(results[0]).toEqual(["name", "age", "quote"]);
  expect(results[1]).toEqual(["Alice", "23", "Hello, world"]); // Should extract quoted content properly
  expect(results[2]).toEqual(["Bob", "25", "Simple text"]); 
});

test("parseCSV handles trailing commas", async () => {
  const results = await parseCSV(TRAILING_CSV_PATH)
  
  //  last one should be empty
  expect(results[0]).toEqual(["name", "age", ""]);
  expect(results[1]).toEqual(["Alice", "23", ""]);
  expect(results[2]).toEqual(["Bob", "25", ""]);
});