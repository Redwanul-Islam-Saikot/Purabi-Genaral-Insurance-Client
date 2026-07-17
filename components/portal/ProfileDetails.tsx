'use client';

import React from 'react';

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

interface ProfileDetailsProps {
  userProfile: UserProfile;
  onEditClick: () => void;
}

export default function ProfileDetails({ userProfile, onEditClick }: ProfileDetailsProps) {
  return (
    <div className="bg-white border border-neutral-200 shadow-xs p-6 md:p-8 rounded-none">
      
      {/* HEADER WITH AVATAR AND DYNAMIC NAME */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-neutral-900 mb-4">My Details</h2>
        
        <div className="flex items-center gap-4">
          <img 
            src={userProfile.avatar || '/Saikot.jpg'} 
            alt={userProfile.name} 
            className="w-16 h-16 rounded-full object-cover border border-neutral-200"
          />
          <div>
            <h3 className="text-lg font-bold text-neutral-900 leading-tight">
              {userProfile.name}
            </h3>
            <button 
              type="button"
              onClick={onEditClick}
              className="mt-1.5 px-3 py-1 bg-[#A3371F] hover:bg-[#8A2E1A] text-white font-semibold text-[11px] uppercase tracking-wider rounded-none cursor-pointer transition-all active:scale-95"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <hr className="border-neutral-200/60 my-6" />

      {/* DYNAMIC ACCOUNT INFORMATION TABLE */}
      <div>
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-6">
          Account Information
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
          
          {/* COLUMN LEFT */}
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Name</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.name}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Email</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800 break-all">{userProfile.email}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">City</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.city}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Passport/NID</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.nid}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Gender</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.gender}</span>
            </div>
          </div>

          {/* COLUMN RIGHT */}
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Mobile Number</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.phone}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Address</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.address}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Nationality</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.nationality}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Date of Birth</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.dob}</span>
            </div>
            
            <div className="flex items-start">
              <span className="w-28 text-neutral-500 shrink-0">Marital Status</span>
              <span className="text-neutral-400 mr-2">:</span>
              <span className="font-semibold text-neutral-800">{userProfile.maritalStatus}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}