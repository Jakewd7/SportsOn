"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { push } = useRouter();
    return (
        <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
            <div className="max-w-136 w-full bg-white rounded-x1 border-t-4 border-primary py-12 px-18">
                <Image
                    src="/icon/logo-admin.svg"
                    alt="admin"
                    width={304}
                    height={51}
                    className="mx-auto mb-4"
                />
                <p className="opacity-50 text-sm text-center mb-9">
                    Enter your credentials to access the dashboard
                </p>

                <div className="input-group-admin mb-5">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="please type your email"
                        className="rounded-lg!"
                    />
                </div>
                <div className="input-group-admin mb-12">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••••••••••••••"
                        className="rounded-lg!"
                    />
                </div>
                <button
                    className="w-full rounded-lg! mb-8"
                    onClick={() => push("/admin/products")}
                >
                    Sign In
                </button>
            </div>
        </main>
    );
};

export default LoginPage;