import "./featured.scss";
import MoreVerIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useTranslation } from "react-i18next";

const Featured = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">{t("Total Revenue")}</h1>
        <MoreVerIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">{t("Total sales made today")}</p>
        <p className="amount">$420</p>
        <p className="desc">
          {t("Previous transactions processing. Last payments may not be inclued.")}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">{t("Target")}</div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">{t("Last Week")}</div>
            <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">{t("Last Month")}</div>
            <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
