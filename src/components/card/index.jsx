import { Button } from "../button";
import trash from "../../assets/trash.svg";
import { useLanguage } from "../../i18n";
import { formatBRL } from "../../finance";

export const Card = ({ transaction, setListTransactions }) => {
  const { t, lang } = useLanguage();
  const removeTransaction = () => {
    setListTransactions(current => current.filter(item => item.id !== transaction.id));
  };
  return (
    <li className={transaction.type === "Entrada" ? "card__container" : "card__container-expense"}>
      <div className="div__title">
        <h4 className="card__description">{transaction.description}</h4>
        <p className="card__type">{t(transaction.type)}</p>
      </div>
      <div className="div__value">
        <span className="card__value">{formatBRL(transaction.value, lang)}</span>
        <Button className="card__btn" func={removeTransaction} aria-label={t("Excluir lançamento")}>
          <img src={trash} alt="" aria-hidden="true" />
        </Button>
      </div>
    </li>
  );
};
