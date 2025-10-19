import Header from "../components/Header";

import Footer from "../components/Footer";
import TeachersList from "../components/TeachersList";

export default function SearchingTeacher() {
  return (
    <div className="min-h-screen">
      <Header />

      <TeachersList/>
      <Footer />
    </div>
  );
}
