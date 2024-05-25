import { Package } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <main className="w-full -translate-y-20 lg:px-14 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-md p-4 h-40 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Orders</h3>
            <div className="flex justify-center items-center size-8 bg-secondary rounded-md">
              <Package size={20} className="text-primary" />
            </div>
          </div>
          <h2 className="mt-10">200</h2>
        </div>
        <div className="bg-white rounded-md p-4 h-40 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Orders</h3>
            <div className="flex justify-center items-center size-8 bg-secondary rounded-md">
              <Package size={20} className="text-primary" />
            </div>
          </div>
          <h2 className="mt-10">200</h2>
        </div>
        <div className="bg-white rounded-md p-4 h-40 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Orders</h3>
            <div className="flex justify-center items-center size-8 bg-secondary rounded-md">
              <Package size={20} className="text-primary" />
            </div>
          </div>
          <h2 className="mt-10">200</h2>
        </div>
        <div className="bg-white rounded-md p-4 h-40 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Orders</h3>
            <div className="flex justify-center items-center size-8 bg-secondary rounded-md">
              <Package size={20} className="text-primary" />
            </div>
          </div>
          <h2 className="mt-10">200</h2>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
