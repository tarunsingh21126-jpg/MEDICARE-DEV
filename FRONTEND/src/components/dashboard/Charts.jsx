import { chartData } from "../../data/dashboardData";

export default function Charts() {
  return (
    <div className="card p-4 rounded-4 shadow-sm">
      <h5 className="fw-bold mb-3">Weekly Messages</h5>

      <div className="d-flex gap-2 align-items-end" style={{ height: "180px" }}>
        {chartData.map((item, index) => (
          <div key={index} className="text-center w-100">
            <div
              className="rounded-3 bg-dark"
              style={{
                height: `${item.value * 6}px`,
                width: "100%",
              }}
            ></div>
            <div className="small text-muted mt-2">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}