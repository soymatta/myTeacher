import { reviews } from "../data/teacherData";

export default function ReviewCard() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Opiniones</h2>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-4 rounded-xl bg-gray-50 mt-3 shadow-sm"
        >
          <h4 className="font-semibold">
            {review.name} ⭐{review.rating}
          </h4>
          <p className="text-gray-600 mt-2">{review.comment}</p>
        </div>
      ))}
    </section>
  );
}
