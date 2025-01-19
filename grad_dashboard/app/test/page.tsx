'use client'

import NavBar from "@/app/Components/NavBar";
import myImage from './headshot_1.jpg';
import Image from "next/image";
import CareerExperience from "../Components/CareerExperience";

import { motion } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TestProps {
    tags?: string[];
}

const ProfilePage: React.FC<TestProps> = ({tags=["Greek Life", "Consulting", "Resume Building", "Networking", "Life after College"]}) => { 
    const router = useRouter();
    const profileID = 0;
    const name = "John Deere";

    return (
        <div key={profileID} className="bg-dark_background min-h-screen">
            <div className="m-auto w-[75%] py-5 text-white">
                <NavBar dark={true}/>
                <div id="header" className="h-[250px] w-[100%] mt-[75px] flex flex-row justify-start flex-grow relative">
                    <div className="relative h-[250px] w-[200px]">
                        <Image
                        src={myImage}
                        alt={`${name}'s profile picture`}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <div className="mx-10">
                        {/* Headings */}
                        <h1 className="text-[2rem]">{name}</h1>
                        <h2 className="text-[1.2rem] pt-3">B.S. Computer Science, 2013</h2>

                        {/* Location */}
                        <div className="mt-10 flex flex-row flex-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        <p className="text-xs mx-2">Denver, CO</p>
                        </div>

                        {/* Tags */}
                        <div id="tags" className="mt-10">
                            <h1>Tags:</h1>
                            <div id="card-tags" className="flex my-4 justify-start gap-x-3 gap-y-2 grow flex-wrap content-start">
                                {tags ? 
                                    <>
                                        {tags.slice(0, 10).map((tag, index) => 
                                        <div id="tag" key={index} className="text-[9px] font-semibold uppercase bg-[#303030] rounded-[10px] flex flex-row items-center">
                                        <div className="aspect-square w-[7px] h-[7px] rounded-full bg-[#6BC17B] mx-[8px]"></div>
                                        <p className="py-[4px] pr-[8px] text-[#6BC17B] font-bold">{tag}</p>
                                        </div>
                                        )}
                                        {tags.length > 10 ? <div id="tag" key={name + '_extra_tag'} className="text-[9px] font-semibold uppercase bg-[#1E1E1E] rounded-[10px]"><p className="py-[4px] px-[8px] text-[#6BC17B]">+{tags.length-10}</p></div> : <></>}
                                    </>    
                                    : <></>
                                }
                            </div>
                        </div>
                    </div>

                    {/* X button */}
                    <div className="absolute top-0 right-0">
                        <button onClick={() => router.push("/dashboard")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="content" className="grid grid-cols-2 mt-10 gap-y-[65px]">
                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">ABOUT</h3>
                            <hr className="my-3"/>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">DISCUSSION TOPICS</h3>
                            <hr className="my-3"/>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">CAREER PATHWAY</h3>
                            <hr className="my-3"/>
                            <CareerExperience start={"JAN 2025"} end={"PRESENT"} role={"Researcher"} company={"CNMAT @ UC Berkeley"} description={"Studying morphisms between semantic clustering and [music] feature clustering, in pursuit of parameter embedding and network bending for stable audiovisual generation. Permits fine tuning of gen AI in a multimodal medium."} link={"https://cnmat.berkeley.edu/"}/>
                            <CareerExperience start={"MAY"} end={"AUG 2024"} role={"SWE Intern"} company={"Tona AI"} description={"Full-stack developer for a startup integrating AI into the music production process. Cool work involving designing frontend UI/UX (React, Next.JS), developing backend ML models (PyTorch, LarsNet, Docker), and managing databases (AWS, Supabase)."} link={"https://www.tona.ai/"}/>
                            <CareerExperience start={"JUN 2021"} end={"AUG 2022"} role={"Research Intern"} company={"Four Eyes Lab @ UCSB"} description={"Cognitive-science informed mappings from music to sculpture (1) in pursuit of meaningful synaesthetic artwork & exploring deep reinforcement learning as an experience in extended reality (2) i.e. live ML training in AR/VR. "} link={"https://www.tona.ai/"}/>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.35,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">CONTACT INFO</h3>
                            <hr className="my-3"/>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{
                                        duration: 0.75,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}>
                                    <Link href="https://www.linkedin.com/in/sidbanerjee00/"><p className="transition ease-in-out duration:300 text-sm text-white hover:text-subtext">→ LinkedIn</p></Link>
                                </motion.div>

                            <br/>

                            <motion.div
                                whileHover={{ x: 10 }}
                                transition={{
                                    duration: 0.75,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <Link href="https://www.google.com"><p className="transition ease-in-out duration:300 text-sm text-white hover:text-subtext">→ Email</p></Link>
                            </motion.div>

                            <br/>

                            <motion.div
                                whileHover={{ x: 10 }}
                                transition={{
                                    duration: 0.75,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <Link href="https://www.calendly.com"><p className="transition ease-in-out duration:300 text-sm text-white hover:text-subtext">→ Calendly</p></Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );

}
  
export default ProfilePage;
  