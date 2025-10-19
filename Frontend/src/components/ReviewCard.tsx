import { reviews } from "../data/teacherData";

export default function ReviewCard() {
  return (
    <section>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold">Opiniones</h2>
        <i className="bx  bx-info-circle bx-sm"></i>
      </div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border border-[#D9D9D9] p-4 rounded-xl mt-3 shadow-sm"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img
                src=""
                alt="Profile Photo"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">{review.name}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#FFF5CE] px-3 py-px rounded-2xl">
              <i className="bx bxs-star bx-xs text-[#E7C817]"></i>
              <span className="font-light text-xs">{review.rating}</span>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{review.comment}</p>
        </div>
      ))}
    </section>
  );
}
