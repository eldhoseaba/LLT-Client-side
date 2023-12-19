// // import React, { useState } from "react";
// // import axios from "axios";
// // import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// // import { Link } from "react-router-dom";

// // const AdminPage = () => {
// //   const [user, setUser] = useState({
// //     firstName: "",
// //     lastName: "",
// //     contact: "",
// //     address: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleRegistration = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:3001/api/auth/register",
// //         user
// //       );

// //       console.log("User registered:", response.data);
// //     } catch (error) {
// //       console.error("Error registering user:", error);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUser((prevUser) => ({
// //       ...prevUser,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <form className="space-y-12" onSubmit={handleRegistration}>
// //       <div className=" pb-12 m-10">
// //         <h2 className="text-base font-semibold leading-7 text-gray-900">
// //           Profile
// //         </h2>

// //         {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
// //         <div className=" pb-12">
// //           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
// //             <div className="sm:col-span-3">
// //               <label
// //                 htmlFor="first-name"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 First name
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   type="text"
// //                   name="first-name"
// //                   id="first-name"
// //                   autoComplete="given-name"
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div className="sm:col-span-3">
// //               <label
// //                 htmlFor="last-name"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Last name
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   type="text"
// //                   name="last-name"
// //                   id="last-name"
// //                   autoComplete="family-name"
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div className="sm:col-span-3">
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Email address
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>
// //             <div className="sm:col-span-3">
// //               <label
// //                 htmlFor="city"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Contact
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   type="text"
// //                   name="city"
// //                   id="city"
// //                   autoComplete="address-level2"
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div className="sm:col-span-3">
// //               <label
// //                 htmlFor="Password"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Password
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   type="password"
// //                   name="Password"
// //                   id="Password"
// //                   autoComplete="address-level2"
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>
// //             <div className="sm:col-span-3">
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Confirm Password
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   type="password"
// //                   name="confirmPassword"
// //                   id="confirmPassword"
// //                   autoComplete="address-level2"
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div className="col-span-full">
// //               <label
// //                 htmlFor="about"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Adress
// //               </label>
// //               <div className="mt-2">
// //                 <textarea
// //                   id="about"
// //                   name="about"
// //                   rows={3}
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                   defaultValue={""}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-6 flex items-center justify-end gap-x-6">
// //         <button
// //           type="button"
// //           className="text-sm font-semibold leading-6 text-gray-900"
// //         >
// //           Cancel
// //         </button>
// //         <button
// //           type="submit"
// //           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //         >
// //           Save
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default AdminPage;
// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   contact: Yup.string().required("Contact is required"),
//   password: Yup.string().required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//   address: Yup.string().required("Address is required"),
// });

// const AdminPage = () => {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     contact: "",
//     address: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const handleSubmit = async (values, { setSubmitting }) => {
//     console.log(values);
//     try {
//       // Perform registration logic here
//       const response = await axios.post(
//         "http://localhost:3001/api/auth/register",
//         values
//       );

//       console.log("User registered:", response.data);
//     } catch (error) {
//       console.error("Error registering user:", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="space-y-12 m-10">
//       <h2 className="text-base font-semibold leading-7 text-gray-900">
//         Profile
//       </h2>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <div className="sm:col-span-3">
//             <label
//               htmlFor="firstName"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               First name
//             </label>
//             <Field
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="First name"
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//             <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
//           </div>

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Email address
//             </label>
//             <Field
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email address"
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//             <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//           </div>

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="contact"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Contact
//             </label>
//             <Field
//               type="text"
//               id="contact"
//               name="contact"
//               placeholder="Contact"
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//             <ErrorMessage name="contact" component="div" className="text-red-500 text-sm" />
//           </div>

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Password
//             </label>
//             <Field
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Password"
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//             <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
//           </div>

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Confirm Password
//             </label>
//             <Field
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//             <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
//           </div>

//           <div className="col-span-full">
//             <label
//               htmlFor="about"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Address
//             </label>
//             <Field
//               as="textarea"
//               id="about"
//               name="address"
//               rows={3}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//             <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
//           </div>

//           <div className="mt-6 flex items-center justify-end gap-x-6">
//             <button
//               type="button"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Save
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default AdminPage;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useRegisterUserMutation } from "../redux/features/api";

const RegisterForm = () => {
  // const [registerUserApiCall] = useRegisterUserMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
      // userRole: "Agent",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      contact: Yup.string().required("Contact number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
        // userRole: Yup.string().required("UserRole is required"),
    }),

    onSubmit: async (values) => {
      console.log("btn click",values);
      try {
        const response = await axios.post(
          "http://localhost:3001/api/auth/register",
          values
        );

          alert("User registered successfully!");
        
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <div className="lg:flex lg:justify-center">
        <form className="w-full lg:w-1/2" onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-input border border-black-300 rounded px-3 py-2"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form-input border border-black-300 rounded px-3 py-2"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              className="form-input border border-black-300 rounded px-3 py-2"
              {...formik.getFieldProps("contact")}
            />
            {formik.touched.contact && formik.errors.contact && (
              <div className="text-red-500 text-sm">{formik.errors.contact}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-input border border-black-300 rounded px-3 py-2"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input border border-black-300 rounded px-3 py-2"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input border border-black-300 rounded px-3 py-2"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          {/* <div className="mb-4">
            <label
              htmlFor="userRole"
              className="block text-sm font-medium text-gray-700"
            >
              UserRole
            </label>
            <div className="mt-2">
              
            </div>
            {formik.touched.userRole && formik.errors.userRole && (
              <div className="text-red-500 text-sm">{formik.errors.userRole}</div>
            )}
          </div> */}


          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Register
            </button>
            <Link to={"/login"}>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-2 transition duration-300 ease-in-out"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
