// UserPage.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navigation from "../components/Navigation";

const UserPage = () => {
  const initialValues = {
    count: "",
    tokenLastDigit: "",
  };

  const validationSchema = Yup.object({
    count: Yup.string().required("Count is required"),
    tokenLastDigit: Yup.string().required("Token Last Digit is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        // Send data to the server
        const response = await axios.post(
          "http://localhost:3001/api/user/data",
          values
        );
        if (response) {
          alert("hai all")
        }

        console.log("Server response:", response.data);
      } catch (error) {
        console.error("Error storing data:", error);
      }
    },
  });

  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">User Page</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Count
              </label>
              <input
                type="text"
                id="count"
                name="count"
                value={formik.values.count}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input mt-1 block w-full rounded-md border ${
                  formik.touched.count && formik.errors.count
                    ? "border-red-500"
                    : "border-gray-300"
                } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              />
              {formik.touched.count && formik.errors.count && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.count}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Token Last Digit
              </label>
              <input
                type="text"
                id="tokenLastDigit"
                name="tokenLastDigit"
                value={formik.values.tokenLastDigit}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-input mt-1 block w-full rounded-md border ${
                  formik.touched.tokenLastDigit && formik.errors.tokenLastDigit
                    ? "border-red-500"
                    : "border-gray-300"
                } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              />
              {formik.touched.tokenLastDigit && formik.errors.tokenLastDigit && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.tokenLastDigit}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserPage;
