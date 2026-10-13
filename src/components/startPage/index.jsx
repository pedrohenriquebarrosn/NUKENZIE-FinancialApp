import "/src/components/startPage/start.css";
import "/src/components/button/style.css";
import { Button } from "../button";
import LogoOne from "../../assets/Nu Kenzie first.svg";
import illustration from "../../assets/Illustration.svg";
import { useLanguage } from "../../i18n";

export const StartPage = ({ setPage }) => {
  const { t } = useLanguage();
  const switchToDash = () => {
    setPage(true);
  };
  return (
    <main className="start__container">
      <div className="div__slogan">
        <img src={LogoOne} alt="Nu Kenzie" />
        <h1>
          {t("Centralize o")} <br />
          {t("controle das suas")} <br />
          {t("finanças")}
        </h1>
        <p>{t("de forma rápida e segura")}</p>
        <Button className={"start__btn"} func={switchToDash}>
          {t("iniciar")}
        </Button>
      </div>
      <img className="img__Illus" src={illustration} alt={t("Ilustração")} />
    </main>
  );
};
