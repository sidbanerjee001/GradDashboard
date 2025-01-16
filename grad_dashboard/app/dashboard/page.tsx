'use client'

import NavBar from '@/app/Components/NavBar'
import TypingText from '../Components/TypingText';
import ProfileCard from '../Components/UI/ProfileCard';

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

export default function Schools() {
  return (
    <div className="bg-dark_background min-h-screen">
      <div className="m-auto w-7/12 py-5 text-white">
        <NavBar dark={true}/>
        <div id="hero" className="mt-[150px]">
            <TypingText text="Alumni Profiles" speed={15} classes="text-5xl" />
        </div>
        <div id="profiles" className="flex flex-row justify-content flex-wrap justify-between content-between">
            <ProfileCard tags={["Chemical Engineering", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2", "test5"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2", "test5", "test5", "test5"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1"]}/>
        </div>
      </div>
    </div>
  )
}
