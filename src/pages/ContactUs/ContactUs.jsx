import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // console.log(data);

    const contactInfo = {
      email: data.email,
      opinions: data.comment,
    };
    axiosPublic.post("/opinions", contactInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thanks For your Feedback");
      }
      reset();
    });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-8 mt-40">
      <div className="space-y-4 w-full mx-auto flex flex-col justify-center items-center">
        <div>
          <p>
            <FaLocationDot />
          </p>
          <h1 className="text-2xl text-[#353B6E] font-semibold">Address</h1>
          <p>76 Segunbagicha, Dhaka,1000</p>
          <hr className="w-48 h-1 mx-auto my-4 bg-[#353B6E] border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
        <div>
          <p>
            <FaPhone />
          </p>
          <h1 className="text-2xl text-[#353B6E] font-semibold">Phone</h1>
          <p>01712222222</p>
          <hr className="w-48 h-1 mx-auto my-4 bg-[#353B6E] border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
        <div>
          <p>
            <MdEmail />
          </p>
          <h1 className="text-2xl text-[#353B6E] font-semibold">Email</h1>
          <p>hrworkflowhub@gmail.com</p>
        </div>
      </div>
      <div className="w-full px-6 lg:px-0 mt-4 lg:mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-md flex-col gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              type="email"
              {...register("email", { required: true })}
              placeholder="Please Write Email"
              shadow
            />
            {errors.email && (
              <span className="font-bold text-red-700">
                Email field is required
              </span>
            )}
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              {...register("comment", { required: true })}
              placeholder="Leave a comment..."
              rows={4}
            />
            {errors.comment && (
              <span className="font-bold text-red-700">
                Comment field is required
              </span>
            )}
          </div>
          <Button className="bg-[#0c0833]" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
