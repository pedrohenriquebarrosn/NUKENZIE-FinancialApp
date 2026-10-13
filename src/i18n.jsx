import { createContext, useContext, useEffect, useState } from "react";

const dictionary = {
  "Centralize o": "Bring your",
  "controle das suas": "financial life",
  "finanças": "together",
  "de forma rápida e segura": "in one simple place",
  "iniciar": "Get started",
  "Início": "Home",
  "Ilustração": "Illustration",
  "Descrição": "Description",
  "Digite aqui sua descrição": "Describe this transaction",
  "Ex: Compra de roupas": "E.g. Clothing purchase",
  "Valor": "Amount",
  "Tipo de valor": "Transaction type",
  "Selecione": "Choose a type",
  "Entrada": "Income",
  "Despesa": "Expense",
  "Depesa": "Expense",
  "Inserir valor": "Add transaction",
  "Resumo financeiro": "Financial summary",
  "Você ainda não possui nenhum lançamento": "You don't have any transactions yet",
  "Listas vazias": "Empty transaction list",
  "Lixinho": "Delete transaction",
  "Excluir lançamento": "Delete entry",
  "Valor total:": "Current balance:",
  "O valor se refere ao saldo": "Balance from your transactions",
  "Preencha todos os campos": "Please complete every field",
  "Projeto educacional; os dados não são salvos após recarregar.": "Educational demo; entries are not saved after a reload.",
};
const Context = createContext(null);
function initialLanguage() {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query === "pt" || query === "en") return query;
  try { const stored = localStorage.getItem("nukenzie_language"); if (stored === "pt" || stored === "en") return stored; } catch {}
  return "pt";
}
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = lang === "pt" ? "NuKenzie | Controle financeiro" : "NuKenzie | Financial tracker";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(window.history.state, "", url);
    try { localStorage.setItem("nukenzie_language", lang); } catch {}
  }, [lang]);
  const t = (message) => lang === "pt" ? message : (dictionary[message] ?? message);
  return <Context.Provider value={{ lang, setLang, t }}>{children}</Context.Provider>;
}
export const useLanguage = () => {
  const context = useContext(Context);
  if (!context) throw new Error("LanguageProvider missing");
  return context;
};
export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return <nav className="language-switcher" aria-label={lang === "pt" ? "Idioma" : "Language"}>
    {["pt","en"].map(code => <button key={code} type="button" onClick={() => setLang(code)}
      aria-pressed={lang === code} lang={code === "pt" ? "pt-BR" : "en"}
      aria-label={code === "pt" ? "Português" : "English"}>{code.toUpperCase()}</button>)}
  </nav>;
}
