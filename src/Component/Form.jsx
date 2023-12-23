import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const myValidation = Yup.object().shape({
    email: Yup.string().email().required("Email is needed for registration"),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted successfully", values);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white text-xl bg-slate-600 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl flex items-center justify-center font-bold">Sign in</h1>
        <h2 className="mb-6 flex items-center justify-center font-bold">Use your Account</h2>

        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={myValidation}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => {
              const { isValid, touched, errors } = props;
              return (
                <Form className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-white mb-1">Email ID</label>
                    <Field
                      className="border text-black p-2 rounded-md focus:outline-none focus:border-blue-500"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <ErrorMessage name="email" component="span" className="text-red-500 mt-1" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-white">Password</label>
                    <Field
                      className="border p-2 text-black rounded-md focus:outline-none focus:border-blue-500"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <ErrorMessage name="password" component="span" className="text-red-500 mt-1" />
                  </div>

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={!isValid}
                  >
                    Submit Form
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;