import { CardsDashBoard, ChartsDashBoard } from "../../components";
import styles from "./Dashboard.module.css"


const Dashboard: React.FC = () => {
    return (
        <main className={styles.DashBoardContainer}>
            <ChartsDashBoard/>
            <CardsDashBoard />
        </main>
    );
}

export default Dashboard;