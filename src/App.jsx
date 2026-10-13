import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard";
import { StartPage } from "./components/startPage";
import { v4 as uuidv4 } from "uuid";
import { LanguageProvider, LanguageSwitcher, useLanguage } from "./i18n";
import { buildTransaction, calculateBalance } from "./finance";

function AppContent() {
  const { t } = useLanguage();
  const [listTransactions, setListTransactions] = useState([]);

  const totalMoney = calculateBalance(listTransactions);

  const [format, setFormat] = useState({
    description: "",
    type: "",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    try {
      const transaction = buildTransaction(format, uuidv4());
      setListTransactions(current => [...current, transaction]);
      setFormat({ description: "", type: "", value: "" });
    } catch {
      alert(t("Preencha todos os campos"));
    }
  };

  const [page, setPage] = useState(false);

  return (
    <div className="App">
      <LanguageSwitcher />
      {page == false ? (
        <StartPage setPage={setPage} />
      ) : (
        <Dashboard
          setPage={setPage}
          submit={submit}
          format={format}
          setFormat={setFormat}
          totalMoney={totalMoney}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}

export default function App() { return <LanguageProvider><AppContent /></LanguageProvider>; }
