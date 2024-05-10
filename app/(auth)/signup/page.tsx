import Navbar from "@/app/components/Navbar";
import SignUpForm from "@/app/components/SignUpForm";

const Signup = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/bg-image.jpg')] bg-no-repeat bg-cover bg-fiexd bg-center">
      <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <Navbar />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup;
