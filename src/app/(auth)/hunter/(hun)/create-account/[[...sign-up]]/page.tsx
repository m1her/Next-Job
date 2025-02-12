import { SignUpComponent } from "./SignUpComponent";

const CreateHunterAccount = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div id="clerk-captcha"></div>
      <SignUpComponent />
    </div>
  );
};

export default CreateHunterAccount;
