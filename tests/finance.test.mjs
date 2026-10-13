import test from "node:test";
import assert from "node:assert/strict";
import { buildTransaction, calculateBalance, formatBRL } from "../src/finance.js";

test("expenses are signed before storage and never mutated afterward", () => {
  const income = buildTransaction({description:"Salary",type:"Entrada",value:120}, "i");
  const expense = buildTransaction({description:"Snack",type:"Despesa",value:20}, "e");
  assert.equal(expense.value,-20);
  assert.equal(calculateBalance([income,expense]),100);
  assert.equal(income.value,120);
});
test("empty, non-positive, invalid and incomplete entries are rejected",()=>{
  for(const form of [
    {description:" ",type:"Entrada",value:10},
    {description:"x",type:"Despesa",value:0},
    {description:"x",type:"Other",value:100},
    {description:"x",type:"Entrada",value:Infinity},
    {description:"x",type:"Entrada",value:"n/a"}
  ]) assert.throws(()=>buildTransaction(form,"id"));
});
test("language affects currency formatting not arithmetic",()=>{
  assert.equal(formatBRL(120.5,"pt").includes("120,50"),true);
  assert.equal(formatBRL(120.5,"en").includes("120.50"),true);
});
