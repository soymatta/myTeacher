import { priceOptions } from "../data/teacherData";

export default function PriceTable() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Precios</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {priceOptions.map((p, i) => (
          <div
            key={i}
            className="border p-4 rounded-xl text-center bg-white shadow-sm"
          >
            <p className="text-gray-500 text-sm">{p.label}</p>
            <p className="font-semibold">{p.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
