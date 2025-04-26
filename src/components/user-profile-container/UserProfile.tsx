import { Styles } from "./UserProfileStyle";
import IMAGES from "../../assets/images";

const UserProfile = () => {
  return (
    <div>
      {/* Profile Card */}
      <div className={Styles.profileCard}>
        <div className={Styles.coverImage}>
          <img src={IMAGES.cover} alt="" />
        </div>
        <div className={Styles.profileImage}>
          <img src={IMAGES.profile} alt="" />
        </div>
        <div className={Styles.userDetail}>
          <p className="font-bold">Albert Flores</p>
          <p className="font-medium">Senior Product Designer | UI/UX</p>
          <p className="font-medium">
            Designer | Graphic Designer | Web Developer
          </p>
          <p title="Clinton, MaryLand" className="font-light">
            Clinton, MaryLand
          </p>
        </div>
      </div>

      {/* Stats Card */}
      <div className={Styles.StatsCard}>
        <div>
          <p>Profile Visitors</p>
          <p>140</p>
        </div>
        <div>
          <p>Resume Viewvers</p>
          <p>20</p>
        </div>
        <div>
          <p>My Jobs</p>
          <p>88</p>
        </div>
      </div>

      {/* Calendar Card */}
      <div className={Styles.CalenderCard}>
        <div>
          <p className="font-semibold">My Calendar</p>
          <p className="text-sm text-gray-500">Upcoming Interview</p>
        </div>
        <div>
          <img
            src={IMAGES.arrowdown}
            className="w-4 h-4 object-contain text-red-500 fill-red-500"
          />
        </div>
        {/* <MenuButton
          title="Ma Calender"
          list={jobTypes}
          style={"bg-transparent md:px-0"}
        /> */}
      </div>
    </div>
  );
};

export default UserProfile;
