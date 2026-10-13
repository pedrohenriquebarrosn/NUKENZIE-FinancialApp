import { useLanguage } from "../../i18n";
export const TotalValue = ({ totalMoney }) => {
  const { t, lang } = useLanguage();
  return (
    <div className="total__value">
      <div className="total__value--text">
        <h4>{t("Valor total:")}</h4>
        <p>{t("O valor se refere ao saldo")}</p>
      </div>
      <h3>{new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", { style: "currency", currency: "BRL" }).format(totalMoney)}</h3>
    </div>
  );
};
