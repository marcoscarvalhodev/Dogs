import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import AlternateText from "../Helper/AlternateText";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length > 0) {
      const graphData = data.map((item) => {
        const acessos = item.acessos < 1 ? 1 : Number(item.acessos);
        return {
          x: item.title,
          y: acessos
          
        };
        
      });
      

      setGraph(graphData);

      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
    }
  }, [data]);
  if (graph.length > 0)
    return (
      <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
          <p>Views : {total < 1 ? 1 : total}</p>
        </div>

        <div className={styles.graphItem}>
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
              labels: { fontSize: 14, fill: "#333" },
            }}
          />
        </div>
        
        <div className={styles.graphItem}>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph}></VictoryBar>
          </VictoryChart>
        </div>
      </section>
    );
  else return <AlternateText altText="Add pics so stats will be shown"/>;
};

export default UserStatsGraphs;
