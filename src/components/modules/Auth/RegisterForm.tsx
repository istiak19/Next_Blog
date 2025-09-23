import Form from "next/form";
import Link from "next/link";

const RegisterForm = () => {
    return (
        <Form
            action="/register"
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
            <h2 className="text-xl font-semibold mb-4 text-center">Create Register</h2>

            {/*Name */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="content">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="content">
                    Phone Number
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
            >
                Submit
            </button>

            <div className="mt-5">
                <Link href="/login">Login Page</Link>
            </div>
        </Form>
    );
};

export default RegisterForm;