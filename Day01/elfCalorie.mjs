import { readFileSync } from "node:fs";

const input = readFileSync("Day01/day01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline

const elfCalories = input.map(elf=>{
	return elf.split('\n').reduce((total, current) => total + Number(current.trim()), 0)
}).sort((a,b)=>b-a)

const puzzleSolution = elfCalories[0]
console.log(puzzleSolution)

// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

const puzzleSolution2 = elfCalories[0]+elfCalories[1]+elfCalories[2]
console.log(puzzleSolution2)