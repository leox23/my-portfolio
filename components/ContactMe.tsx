import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { IoLogoWhatsapp } from 'react-icons/Io'
import { useForm, SubmitHandler } from "react-hook-form"
import { Cursor } from "./Cursor";
import { PageInfo } from "../typings";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {
  pageInfo : PageInfo
};

function ContactMe({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        //todo pending to implement some mail server
        window.location.href = `mailto:${pageInfo?.adress}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
  return (
    <div className="h-screen w-screen flex relative flex-col justify-evenly mx-auto items-center
    text-center max-w-7xl px-4 space-y-4
    md:text-left md:flex-row">
      <div className="flex flex-col w-screen items-center
      px-2 space-y-5 mt-[calc(15vh-80px)]
      sm:mt-24 sm:space-y-6
      lg:mt-10 lg:space-y-4">
        <h3 className="uppercase tracking-[20px] text-gray-500 
        text-xl
        mx:text-2xl
        ">
          Contact
        </h3>
        <h4 className="font-semibold text-center 
        text-2xl px-6
        mx:text-3xl
        sm:text-4xl sm:px-10
        lg:">
          I{`'`}ve got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline first-letter 
          ">Let{`'`}s Talk</span>
          <Cursor cursorColor="#F7AB0A" />
        </h4>

        <div className="space-y-2  sm:space-y-6  lg:space-y-1">
          <div className="flex items-center space-x-5 justify-center">
            <IoLogoWhatsapp className="text-[#F7AB0A] animate-pulse 
              h-5 w-5
              mx:h-6 mx:w-6
              sm:h-7 sm:w-7" />
            <PhoneIcon className="text-[#F7AB0A] animate-pulse !ml-1
              h-5 w-5
              mx:h-6 mx:w-6
              sm:h-7 sm:w-7" />
            <a href={`https://api.whatsapp.com/send?phone=${pageInfo?.phoneNumber}&text=%F0%9F%96%90%F0%9F%8F%BC%20Hi%20Leonel!%20%20how%20are%20you?%20`} 
            className="decoration-[#F7AB0A]/50 underline underline-offset-4 decoration-2 animate-pulse
              text-lg 
              mx:text-xl
              sm:text-2xl"
            >+{pageInfo?.phoneNumber}<span className="text-[100%]"> ➚</span></a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] animate-pulse
              h-5 w-5
              mx:h-6 mx:w-6
              sm:h-7 sm:w-7" />
            <p className="text-lg  
              mx:text-xl
              sm:text-2xl"
            >{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] animate-pulse
              h-5 w-5
              mx:h-6 mx:w-6
              sm:h-7 sm:w-7" />
            <p className="text-lg  
              mx:text-xl
              sm:text-2xl"
            >{pageInfo?.adress}</p>
          </div>
        </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center 
      space-y-2 
      w-[100%]
      sm:w-[60%] sm:mx-auto
      lg:w-fit  ">
        <div className=" sm:flex flex-col items-center
        space-y-2 w-[100%] p-0 m-0
        lg:flex-row lg:space-y-0">
            <input {...register('name')} placeholder="Name" className="contactInput 
            w-[90%] h-10
            mx:h-16
            lg:w-[40%] lg:mr-2" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput  
            w-[90%] h-10
            mx:h-16
            lg:w-[60%]" type="email" />
        </div>

        <input {...register('subject')} placeholder="Subject"  className="contactInput  
            w-[90%] h-10
            mx:h-16
            sm:!mt-0
            lg:!mt-2 lg:w-[100%]" type="text" />
      
        <textarea {...register('message')} placeholder="Message" className="contactInput 
        w-[90%] h-24 
        mx:h-28
        lg:w-[100%]"></textarea>

        <button 
        type="submit"
            className="bg-[#F7AB0A] rounded-md text-black font-bold 
            text-lg py-2 px-10 
            w-[90%] h-12
            mx:!h-20 mx:py-5 mx:px-10 mx:text-xl
            lg:w-[100%]"
        >
            Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default ContactMe;
