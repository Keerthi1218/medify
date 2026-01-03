import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/taskSlice";
import { Pie } from "react-chartjs-2";

export default function Dashboard() {
  const dispatch = useDispatch();
  const tasks = useSelector((s) => s.tasks);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchTasks(token));
  }, []);

  const data = {
    labels: ["Todo", "In Progress", "Completed"],
    datasets: [{
      data: [
        tasks.filter(t => t.status === "Todo").length,
        tasks.filter(t => t.status === "In Progress").length,
        tasks.filter(t => t.status === "Completed").length
      ]
    }]
  };

  return <Pie data={data} />;
}
