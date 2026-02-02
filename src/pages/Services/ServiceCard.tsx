// src/pages/Services/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  title: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
