import { CardsDashBoard, ChartsDashBoard } from '../../components';
import styles from './Dashboard.module.css';
import { useQuery } from '@tanstack/react-query';

const Dashboard: React.FC = () => {
  const fetchFn = async () => {
    const res = await fetch('/api/CardsMeses');
    return res.json();
  };
  const QueryData = useQuery({
    queryKey: ['cards'],
    queryFn: fetchFn,
  });

  return (
    <main className={styles.DashBoardContainer}>
      <ChartsDashBoard QueryData={QueryData} />
      <CardsDashBoard QueryData={QueryData} />
    </main>
  );
};

export default Dashboard;
