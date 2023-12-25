import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table'
import { useTranslation } from "react-i18next";

const Single = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">{t("Edit")}</div>
            <h1 className="title">{t("Information")}</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemKey">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={t("User Spending (Last 6 Months)")}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">{t("Last Transactions")}</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
