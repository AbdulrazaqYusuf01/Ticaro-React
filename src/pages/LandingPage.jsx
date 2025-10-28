import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import FeatureCard from "../components/landing/FeatureCard";
import StatBox from "../components/landing/StatBox";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />

      <section className="relative overflow-hidden bg-linear-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-[1440px] mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Streamline Your Support with Ticaro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Manage, track, and resolve customer tickets efficiently. Built for
              teams that care about exceptional support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#/auth/signup"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#/auth/login"
                className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border-2 border-indigo-500"
              >
                Login
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full"></div>

        <div className="absolute bottom-20 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full"></div>

        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#F0F4FF"
          />
        </svg>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Everything You Need to Manage Tickets
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-time Tracking"
            description="Monitor ticket status in real-time with instant updates and notifications."
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            title="Smart Organization"
            description="Categorize and prioritize tickets with flexible status management."
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            title="Seamless Workflow"
            description="Create, update, and resolve tickets with an intuitive interface."
            gradient="from-orange-500 to-red-500"
          />
        </div>
      </section>

      <section className="relative bg-linear-to-br from-indigo-100 to-purple-100 py-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-300 opacity-30 rounded-full blur-2xl"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <StatBox number="10K+" label="Tickets Resolved" />
            <StatBox number="500+" label="Happy Teams" />
            <StatBox number="99.9%" label="Uptime" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
