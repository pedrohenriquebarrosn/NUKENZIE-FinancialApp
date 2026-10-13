/** Amounts are stored signed; the currency is BRL in both locales. */
export function buildTransaction(form, id) {
  const description = String(form.description ?? "").trim();
  const value = Number(form.value);
  if (!description || !["Entrada", "Despesa"].includes(form.type) || !Number.isFinite(value) || value <= 0) {
    throw new Error("invalid transaction");
  }
  return { id, description, type: form.type, value: form.type === "Despesa" ? -value : value };
}
export function calculateBalance(transactions) {
  return transactions.reduce((sum, item) => sum + item.value, 0);
}
export function formatBRL(amount, language) {
  return new Intl.NumberFormat(language === "en" ? "en-US" : "pt-BR", {style:"currency",currency:"BRL"}).format(amount);
}
