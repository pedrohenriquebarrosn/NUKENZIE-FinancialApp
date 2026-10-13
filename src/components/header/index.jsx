import { Button } from "../button";
import LogoTwo from "../../assets/Nu Kenzie second.svg";
import { useLanguage } from "../../i18n";

export const Header = ({ setPage }) => {
  const { t } = useLanguage();
  const switchToStart = () => {
    setPage(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <img src={LogoTwo} alt="Nu Kenzie" />
        <Button func={switchToStart}>{t("Início")}</Button>
      </nav>
    </header>
  );
};
