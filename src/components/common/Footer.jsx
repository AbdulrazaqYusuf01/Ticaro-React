import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ticaro</h3>
          <p className="text-gray-400">
            Streamlining support for modern teams.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <div className="space-y-2 text-gray-400">
            <div>Features</div>
            <div>Pricing</div>
            <div>Security</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <div className="space-y-2 text-gray-400">
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        © 2025 Ticaro. All rights reserved. Built with ❤️ by{" "}
        <span className="font-bold">AbdulrazaqYM</span>
      </div>
    </div>
  </footer>
);

export default Footer;
