import { Button } from "../button";
import "/src/components/button/style.css";
import { useLanguage } from "../../i18n";

export const Form = ({ submit, format, setFormat }) => {
  const { t } = useLanguage();
  return (
    <form className="form__section" onSubmit={submit}>
      <label htmlFor="input__text">{t("Descrição")}</label>
      <input
        id="input__text"
        type="text"
        placeholder={t("Digite aqui sua descrição")}
        value={format.description}
        onChange={(event) =>
          setFormat({
            ...format,
            description: event.target.value,
          })
        }
      />
      <span className="example">{t("Ex: Compra de roupas")}</span>
      <div className="div__values">
        <div className="column">
          <label htmlFor="input__number">{t("Valor")}</label>
          <input
            id="input__number"
            type="number"
            placeholder="1"
            value={format.value}
            onChange={(event) =>
              setFormat({
                ...format,
                value: Number(event.target.value),
              })
            }
          />
        </div>
        <div className="column">
          <label htmlFor="select__type">{t("Tipo de valor")}</label>
          <select
            name="type"
            id="select__type"
            type="text"
            value={format.type}
            onChange={(event) =>
              setFormat({
                ...format,
                type: event.target.value,
              })
            }
          >
            <option value="">{t("Selecione")}</option>
            <option value="Entrada">{t("Entrada")}</option>
            <option value="Despesa">{t("Despesa")}</option>
          </select>
        </div>
      </div>
      <Button className={"button"} type="submit">
        {t("Inserir valor")}
      </Button>
    </form>
  );
};
