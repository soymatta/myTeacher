import Header from "../components/Header";
import TeacherInfoCard from "../components/TeacherInfoCard";
import AboutTeacher from "../components/AboutTeacher";
import ClassDetails from "../components/ClassDetails";
import ReviewCard from "../components/ReviewCard";
import PriceTable from "../components/PriceTable";
import SimilarTeachers from "../components/SimilarTeachers";
import Footer from "../components/Footer";

export default function TeacherProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8">
          <AboutTeacher />
          <ClassDetails />
          <ReviewCard />
          <PriceTable />
        </section>

        <aside>
          <TeacherInfoCard />
        </aside>
      </main>

      <SimilarTeachers />
      <Footer />
    </div>
  );
}
