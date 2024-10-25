import { t } from "i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CLEARUSERDATA } from "../../Redux/features/userData/userAction";

const HamburgerMenu = ({ handleSidebar }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem("yop-token");
    sessionStorage.removeItem("yop-phone");
    sessionStorage.removeItem("you-phone_code");
    dispatch(CLEARUSERDATA());
    navigate("/");
  };

  return (
    <>
        
      <div className="profile-sidebar border border-[#E3E3E3] rounded-md h-full flex flex-col justify-between">
        <div>
        <h2 className="text-lg p-3 border-b border-b-[#E3E3E3] font-bold flex gap-4 items-center">
          <svg
            onClick={handleSidebar}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M2.86442 0.802246L0.802246 2.86442L11.4378 13.5L0.802246 24.1356L2.86442 26.1978L13.5 15.5622L24.1356 26.1978L26.1978 24.1356L15.5622 13.5L26.1978 2.86442L24.1356 0.802246L13.5 11.4378L2.86442 0.802246Z"
              fill="black"
            />
          </svg>
          {"Settings"}
        </h2>
        <ul>
          <Link to="/profile">
            <li
              className={`flex gap-4 border-b border-b-[#E3E3E3] p-3 text-base font-semibold cursor-pointer hover:textBlue `}
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.6665 17C3.6665 16.0275 4.05281 15.0949 4.74045 14.4073C5.42808 13.7196 6.36071 13.3333 7.33317 13.3333H14.6665C15.639 13.3333 16.5716 13.7196 17.2592 14.4073C17.9469 15.0949 18.3332 16.0275 18.3332 17C18.3332 17.4862 18.14 17.9525 17.7962 18.2963C17.4524 18.6402 16.9861 18.8333 16.4998 18.8333H5.49984C5.01361 18.8333 4.54729 18.6402 4.20347 18.2963C3.85966 17.9525 3.6665 17.4862 3.6665 17Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 9.66666C12.5188 9.66666 13.75 8.43544 13.75 6.91666C13.75 5.39787 12.5188 4.16666 11 4.16666C9.48122 4.16666 8.25 5.39787 8.25 6.91666C8.25 8.43544 9.48122 9.66666 11 9.66666Z"
                  stroke="#000"
                  strokeWidth="2"
                />
              </svg>{" "}
              {t("Settings.profileDetails")}
            </li>
          </Link>
          <Link to="/my-order">
            <li
              className={`flex gap-4 border-b border-b-[#E3E3E3] p-3 text-base font-semibold cursor-pointer hover:textBlue  `}
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.916504 20.6667C0.916504 21.1617 1.329 21.5833 1.83317 21.5833H13.7498C14.2632 21.5833 14.6665 21.1617 14.6665 20.6667V19.75H0.916504V20.6667ZM7.7915 8.75C4.354 8.75 0.916504 10.5833 0.916504 14.25H14.6665C14.6665 10.5833 11.229 8.75 7.7915 8.75ZM3.31817 12.4167C4.33567 10.9958 6.499 10.5833 7.7915 10.5833C9.084 10.5833 11.2473 10.9958 12.2648 12.4167H3.31817ZM0.916504 16.0833H14.6665V17.9167H0.916504V16.0833ZM16.4998 5.08334V1.41667H14.6665V5.08334H10.0832L10.294 6.91667H19.0573L17.774 19.75H16.4998V21.5833H18.0765C18.8465 21.5833 19.479 20.9875 19.5707 20.2358L21.0832 5.08334H16.4998Z"
                  fill="#000"
                />
              </svg>{" "}
              {t("Settings.orders")}
            </li>
          </Link>
          <Link to="/my-address">
            <li
              className={`flex gap-4 border-b border-b-[#E3E3E3] p-3 text-base font-semibold cursor-pointer hover:textBlue`}
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1.41667C13.188 1.41667 15.2865 2.28587 16.8336 3.83304C18.3808 5.38022 19.25 7.47864 19.25 9.66667C19.25 13.0822 16.6467 16.6608 11.55 20.4833C11.3913 20.6023 11.1983 20.6667 11 20.6667C10.8017 20.6667 10.6087 20.6023 10.45 20.4833C5.35333 16.6608 2.75 13.0822 2.75 9.66667C2.75 7.47864 3.61919 5.38022 5.16637 3.83304C6.71354 2.28587 8.81196 1.41667 11 1.41667ZM11 3.25001C9.29819 3.25001 7.66609 3.92604 6.46273 5.1294C5.25937 6.33276 4.58333 7.96487 4.58333 9.66667C4.58333 12.1508 6.52483 15.0163 10.494 18.1972L11 18.5968L11.506 18.1972C15.4752 15.0163 17.4167 12.1508 17.4167 9.66667C17.4167 7.96487 16.7406 6.33276 15.5373 5.1294C14.3339 3.92604 12.7018 3.25001 11 3.25001ZM11 7.83334C11.4862 7.83334 11.9525 8.02649 12.2964 8.37031C12.6402 8.71413 12.8333 9.18044 12.8333 9.66667C12.8333 10.1529 12.6402 10.6192 12.2964 10.963C11.9525 11.3069 11.4862 11.5 11 11.5C10.5138 11.5 10.0475 11.3069 9.70364 10.963C9.35982 10.6192 9.16667 10.1529 9.16667 9.66667C9.16667 9.18044 9.35982 8.71413 9.70364 8.37031C10.0475 8.02649 10.5138 7.83334 11 7.83334Z"
                  fill="#000"
                />
              </svg>{" "}
              {t("Settings.myAddress")}
            </li>
          </Link>
        </ul>
        </div>
        <div className="fixed bottom-0 p-3 w-full">
          <p
            className={`text-center text-[#F00]  p-6 text-base font-semibold cursor-pointer `}
            onClick={handleLogout}
          >
            {"LogOut"}
          </p>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
