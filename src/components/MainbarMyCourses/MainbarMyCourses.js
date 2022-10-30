import { useContext, useEffect, useState } from "react";
import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import { getItem } from "./../../api/storage/storage";
import { getStudentById } from "./../../api/Core/Student_Manage";
import "./MainbarMyCourses.css";
import { GeneralContext } from "../../providers/GeneralContext";
import { removeStudentToCourse } from "../../api/Core/Course";


const MainbarMyCourses = () => {
  const userId = JSON.parse(getItem('id'));
  const [currentPage_MainbarMyCourses, setCurrentPage_MainbarMyCourses] = useState(1);
  const [studentInfo, setStudentInfo] = useState();
  const { setConfirmPopupOpen, onConfirmSetter } = useContext(GeneralContext)

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    let response = await getStudentById(userId);
    if (response) {
      setStudentInfo(response.data.result);
    }
  }

  const handlePagination_MainbarMyCourses = (e, value) => {
    setCurrentPage_MainbarMyCourses(value);
  };

  return (
    <div className="MainbarContainer MainbarContainerInTable">
      <div className="mainbarCourses">
        <div className="mainbarCoursesTopic">
          <p> دوره‌های من </p>
          <hr></hr>
        </div>
        <div className="mainbarCoursesFilter">
          {studentInfo ? "yes" : "no"}
        </div>
        <div className="mainbarCoursesTable">
          <TableCom
            lastColumnTitle={'حذف دوره'}
            myData={studentInfo ? studentInfo.courses : ""}
            currentPage={currentPage_MainbarMyCourses}
            rowsCount={5}
            onClick={(courseId) => {
              onConfirmSetter('آیا برای حذف دوره اطمینان دارید؟',
                async () => {
                  const updateCourse = {
                    userId: userId,
                    courseId: courseId
                  }
                  let response = await removeStudentToCourse(updateCourse)
                  if (response.data.result) {
                    getUserId()
                  }
                }, () => { setConfirmPopupOpen(false) })
              setConfirmPopupOpen(true)
            }}
          />
        </div>
        <div className="mainbarCoursesPaginatin">
          <Paginate
            allItem={studentInfo ? studentInfo.courses.length : 5}
            eachPageTtem={5}
            handlePagination={handlePagination_MainbarMyCourses}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarMyCourses };
