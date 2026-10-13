import { Button } from "../button";
import trash from "../../assets/trash.svg";
import { useLanguage } from "../../i18n";

export const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
}) => {
  const { t } = useLanguage();
  const removeTrasaction = () => {
    const newList = listTransactions.filter(
      (item) => item.id !== transaction.id
    );
    setListTransactions(newList);
  };

  return (
    <>
      {transaction.type == "Entrada" ? (
        <li className="card__container">
          <div className="div__title">
            <h4 className="card__description">{transaction.description}</h4>
            <p className="card__type">{t(transaction.type)}</p>
          </div>
          <div className="div__value">
            <span className="card__value">R$ {transaction.value}</span>
            <Button className={"card__btn"} func={() => removeTrasaction()}>
              <img src={trash} alt="" />
            </Button>
          </div>
        </li>
      ) : (
        <li className="card__container-expense">
          <div className="div__title">
            <h4 className="card__description">{transaction.description}</h4>
            <p className="card__type">{t(transaction.type)}</p>
          </div>
          <div className="div__value">
            <span className="card__value">R$ {transaction.value}</span>
            <Button className={"card__btn"} func={() => removeTrasaction()}>
              <img src={trash} alt={t("Lixinho")} />
            </Button>
          </div>
        </li>
      )}
    </>
  );
};
