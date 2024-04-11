import { Link, useNavigate } from 'react-router-dom';

export default function TermsOfUse() {
    const nav = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Terms of Use</h1>
        <p className="mb-4">Welcome to our email system with chat and video options (the "Service"). These Terms of Use ("Terms") govern your access and use of the Service. Please read these Terms carefully before using the Service.</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Acceptance of Terms</strong>
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use the Service.</p>
          </li>
          <li className="mb-2">
            <strong>Account Creation</strong>
            <p>You may need to create an account to use certain features of the Service. You are responsible for maintaining the confidentiality of your account information, including your password. You are also responsible for all activities that occur under your account.</p>
          </li>
          <li className="mb-2">
            <strong>Content Use</strong>
            <p>You agree not to use the Service for any unlawful or prohibited purpose. Respect intellectual property rights and refrain from sharing harmful content.</p>
          </li>
          <li className="mb-2">
            <strong>User Conduct</strong>
            <p>Be respectful and follow community guidelines. Do not engage in abusive behavior.</p>
          </li>
          <li className="mb-2">
            <strong>Privacy</strong>
            <p>Our privacy policy outlines how we collect, use, and protect your data.</p>
          </li>
          <li className="mb-2">
            <strong>Termination</strong>
            <p>We may terminate or suspend your access to the Service for any reason, at any time, without notice. We may also terminate or suspend your access if you violate any of these Terms.</p>
          </li>
        </ol>
        <p className="mb-4">These Terms of Use were last updated on April 1, 2024.</p>
        <button onClick={()=>{nav('/register')}} className="bg-teal-500 text-white px-4 py-2 rounded-md mb-4">Approve and continue</button>
        <button onClick={()=>{console.log("נשליך אותך לאריות")}} className="text-teal-500">Cancel</button>
      </div>
    </div>
  );
}
