import { useLanguage } from "../../i18n";
import { formatBRL } from "../../finance";

export const TotalValue = ({ totalMoney }) => {
  const { t, lang } = useLanguage();
  return (
    <div className="total__value">
      <div className="total__value--text">
        <h4>{t("Valor total:")}</h4>
        <p>{t("O valor se refere ao saldo")}</p>
      </div>
      <h3>{formatBRL(totalMoney, lang)}</h3>
    </div>
  );
};
