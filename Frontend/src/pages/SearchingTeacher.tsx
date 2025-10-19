import Header from "../components/Header";

import Footer from "../components/Footer";
import TeachersList from "../components/TeachersList";
import UserAccountPage from "../components/UserAccount";
import UserProfileView from "../components/UserProfile";

export default function SearchingTeacher() {
  return (
    <div className="min-h-screen">
      <Header />
        <div className="Searching_body">
          <TeachersList/>
        </div>
        <UserAccountPage/>
        <UserProfileView/>
      <Footer />
    </div>
  );
}
