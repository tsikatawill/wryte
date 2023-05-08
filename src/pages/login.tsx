import { AnimatedPenHead, Container, Layout } from "../components";
import { firebaseAuth, googleProvider } from "../lib/firebase";
import { useEffect, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { userT } from "../types";

export const Login = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { user, login } = useUser();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleLogin = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then(({ user }) => {
        const userData: userT = {
          displayName: String(user.displayName),
          email: String(user.email),
          id: user.uid,
          photoURL: String(user.photoURL),
        };

        login(userData);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login unsuccessful");
      });
  };

  return (
    <Layout>
      <Container>
        <div className="wrapper max-w-xl mx-auto bg-white dark:bg-slate-950 my-10 p-5 md:p-10 shadow-lg shadow-[rgba(0,0,0,0.25)]">
          <AnimatedPenHead parentRef={ref} type="small" />

          <h1 className="text-center font-bold text-xl dark:text-white text-slate-500 md:text-3xl mb-5">
            Login to your Wryte Account
          </h1>

          <button
            className="flex text-white items-center gap-2 bg-blue-500 hover:bg-blue-600 duration-200 transition-all p-2 px-4 mx-auto"
            onClick={handleLogin}
          >
            <FaGoogle />

            <span className="md:text-xl">Login with Google</span>
          </button>
        </div>
      </Container>
    </Layout>
  );
};
