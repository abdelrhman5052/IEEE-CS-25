// src/components/MemberCard.tsx
import React from "react";
import type { Memberinterface } from "./interfaces/memberinterface";

type Props = {
  member: Memberinterface;
};

const MemberCard: React.FC<Props> = ({ member }) => {
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 space-y-4 hover:border-1 border-blue-600">
        <img
          className="h-24 w-24 rounded-full object-cover border-2 border-blue-500"
          src={member.avatarUrl}
          alt={member.name}
        />
        <div className="text-center space-y-1">
          <p className="text-lg font-semibold text-black">{member.name}</p>
          <p className="text-[14px] text-gray-500">
            {member.role} — {member.department}
          </p>
          <p className="text-[15px] text-gray-700">{member.bio}</p>
          <p className="text-sm text-gray-400">Joined on {member.joinedDate}</p>
        </div>
        <div className="flex gap-1">
          <a
            href={`mailto:${member.email}`}
            className="border bg-blue-600 text-white hover:text-white px-5 py-2 rounded-full"
          >
            Email
          </a>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              className=" text-blue-600 hover:no-underline px-4 py-2"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
