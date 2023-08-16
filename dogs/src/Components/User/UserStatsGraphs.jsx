import React from "react";
import styles from "./UserStatsGraphs.module.css";
const UserStatsGraphs = ({ data }) => {
  const [graphs, setGraphs] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if(data) {
      setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b))
    }
    

  }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total}`}>
        <p>Pics Views : {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
