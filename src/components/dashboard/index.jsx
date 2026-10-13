import { Card } from "../card";
import { Form } from "../forms";
import { Header } from "../header";
import { TotalValue } from "../total";
import EmptyList from "../../assets/emptyList.svg";
import { useLanguage } from "../../i18n";

export const Dashboard = ({
  submit,
  format,
  setFormat,
  totalMoney,
  listTransactions,
  setPage,
  setListTransactions,
}) => {
  const { t } = useLanguage();
  return (
    <>
      <Header setPage={setPage} />
      <main className="main container">
        <section className="section__form">
          <Form submit={submit} format={format} setFormat={setFormat} />
          {listTransactions.length > 0 && <TotalValue totalMoney={totalMoney} />}
        </section>
        <aside className="aside__list">
          <h5 className="resume">{t("Resumo financeiro")}</h5>
          {listTransactions.length < 1 ? (
            <>
              <h1 className="empty__list">
                {t("Você ainda não possui nenhum lançamento")}
              </h1>
              <img className="empty__img" src={EmptyList} alt={t("Listas vazias")} />
            </>
          ) : (
            <ul>
              {listTransactions.map((transaction) => (
                <Card
                  transaction={transaction}
                  setListTransactions={setListTransactions}
                  key={transaction.id}
                />
              ))}
            </ul>
          )}
        </aside>
      </main>
    </>
  );
};
