import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/dashboard", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 50 }}>
      <h2>Dashboard</h2>
      <p>Total: {data.totalTasks}</p>
      <p>Completed: {data.completed}</p>
      <p>Pending: {data.pending}</p>
      <p>Overdue: {data.overdue}</p>
    </div>
  );
}