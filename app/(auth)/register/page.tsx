import MultiStepForm from "@/components/auth/multi-step-form/multi-step-form";

const page = () => {
  return (
    <div className="flex min-h-screen">
      {/* Hide for sm devices */}
      <div className="hidden sm:block sticky top-0 h-screen w-1/3 bg-blue-400 bg-formImage bg-cover"></div>
      <MultiStepForm />
    </div>
  );
};

export default page;
