import { recentActivity } from "../../data/dashboardData";

export default function RecentActivity() {
  return (
    <div className="card p-4 rounded-4 shadow-sm">
      <h5 className="fw-bold mb-3">Recent Activity</h5>

      <ul className="list-group list-group-flush">
        {recentActivity.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{item.text}</span>
            <span className="text-muted small">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}