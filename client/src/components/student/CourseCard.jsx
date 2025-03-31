import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import AppContext from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  if (!course) return null;

  const discountedPrice = course.coursePrice - (course.discount * course.coursePrice) / 100;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={course.courseThumbnail || assets.coursePlaceholder} 
        alt={course.courseTitle} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{course.courseTitle}</h3>
        <p className="text-gray-600 text-sm mb-2">By {course.educator?.name || 'Unknown Educator'}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <span className="text-sm text-gray-500">4.5 (22)</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold">
            {currency}{discountedPrice.toFixed(2)}
            {course.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {currency}{course.coursePrice.toFixed(2)}
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;