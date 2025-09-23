import Form from "next/form";
import Link from "next/link";

const LoginForm = () => {
    return (
        <Form
            action="/login"
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
            <h2 className="text-xl font-semibold mb-4">Create Login</h2>

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

            {/* Content */}
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

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
            >
                Submit
            </button>

            <div className="mt-5">
                <Link href="/register">Register Page</Link>
            </div>
        </Form>
    );
};

export default LoginForm;