'use client';

import React, { useState } from 'react';
import AuthFlow from '@/components/auth/AuthFlow';
import PortalDashboard from '@/components/portal/PortalDashboard';

// ইউজারের প্রোফাইল ইন্টারফেস টাইপ ডেফিনিশন
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  nid: string;
  city: string;
  nationality: string;
  address: string;
  avatar: string;
  maritalStatus: string;
}

export default function Home() {
  // 🎯 এখানে false করে দেওয়া হয়েছে, তাই প্রজেক্ট রান করলে প্রথমে লগইন ফর্মটাই আসবে
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // এডিট মোডাল হ্যান্ডল করার স্টেট
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // ইনিশিয়াল বা ডেমো ইউজার প্রোফাইল স্টেট (লগইন বা গুগল সাইন-ইন এর পর আপডেট হবে)
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Md. Redwanul Islam Saikot',
    email: 'redwanul15-3333@diu.edu.bd',
    phone: '+880 1794-448469',
    gender: 'Male',
    dob: '24 January 2000',
    nid: '111 111 1111',
    city: 'Dhaka',
    nationality: 'Bangladeshi',
    address: 'Savar Cantonment, Savar, Dhaka',
    avatar: '/Saikot.jpg', // আপনার প্রজেক্টের পাবলিক ফোল্ডারের ইমেজ পাথ
    maritalStatus: 'Unmarried',
  });

  // লগআউট ফাংশন - যা ক্লিক করলে আবার লগইন ফর্মে ব্যাক করবে
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#FDFBF9] flex items-center justify-center p-0 md:p-4">
      {isLoggedIn ? (
        /* যদি ইউজার লগইন অবস্থায় থাকে, তবে ড্যাশবোর্ড দেখাবে */
        <PortalDashboard
          userProfile={userProfile}
          setUserProfile={setUserProfile}
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          handleLogout={handleLogout}
        />
      ) : (
        /* প্রজেক্ট রান করার পর প্রথমে এই ফর্মটিই রেন্ডার হবে */
        <AuthFlow 
          setIsLoggedIn={setIsLoggedIn} 
          setUserProfile={setUserProfile} 
        />
      )}
    </div>
  );
}