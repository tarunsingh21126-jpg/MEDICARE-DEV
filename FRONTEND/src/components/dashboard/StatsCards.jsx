import { statsData } from "../../data/dashboardData";

export default function StatsCards({product}) {
  return (
    // <div className="row g-3">
    //   {statsData.map((item, index) => (
    //     <div className="col-md-3 col-sm-6" key={index}>
    //       <div className="card p-3 rounded-4 shadow-sm">
    //         <div className="text-muted small">{item.title}</div>
    //         <div className="fs-4 fw-bold">{item.value}</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="border rounded-xl p-3 bg-white shadow-sm" >

            <div className="absolute mt-3 ml-3">
                <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    {product.badge}
                </span>
            </div>

            <div className="w-full h-full overflow-hidden bg-gray-100 rounded-lg">
                <img src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src =
                            "https://via.placeholder.com/300?text=Image+Not+Found";
                    }}
                />
            </div>
            <h3 style={{ marginBottom: "6px" }}>{product.title}</h3>
            <p style={{ marginBottom: "10px" }}>₹ {product.price}</p>
            <div className="flex items-center gap-2 mt-1">
                <div className="flex text-yellow-500 text-sm">
                    {"★".repeat(Math.floor(product.rating))}
                    <span className="text-gray-300">
                        {"★".repeat(5 - Math.floor(product.rating))}
                    </span>
                </div>
                <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                    ({product.reviews})
                </span>
            </div>
            <p className="text-xs text-gray-500 mt-1"> FREE Delivery by Tomorrow </p>
            <div style={{ display: "flex", gap: "10px" }}>

                
                <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition">
                    Add to Cart
                </button>
            </div>
        </div>
  );
}