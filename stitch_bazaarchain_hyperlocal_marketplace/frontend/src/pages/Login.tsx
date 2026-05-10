import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [role, setRole] = useState<'customer' | 'seller'>('seller');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check if it's a gmail address
    if (!email.toLowerCase().includes('@gmail.com')) {
      setError('Please use a valid Gmail address (@gmail.com)');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Generate a special token
    const token = btoa(`${email}:${role}:${Date.now()}-SPECIAL-TOKEN`);
    localStorage.setItem('bazaarchain_token', token);
    localStorage.setItem('user_role', role);
    localStorage.setItem('user_email', email);

    // Redirect after successful login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row font-body-md text-on-background">
      {/* Left Side - Image and Branding */}
      <div className="hidden md:flex flex-col w-full md:w-5/12 lg:w-1/2 bg-inverse-surface text-inverse-on-surface relative overflow-hidden rounded-r-[2rem]">
        {/* Placeholder image that looks like the vibrant Indian market */}
        <img 
          src="https://i.pinimg.com/1200x/ab/d4/c3/abd4c3ce485f661949d167c86b1d1ca0.jpg" 
          alt="Indian Bazaar"
          className="absolute inset-0 w-full h-3/4 object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-inverse-surface via-inverse-surface/80 h-3/4 bottom-1/4 top-auto"></div>
        <div className="absolute bottom-0 w-full h-1/4 bg-inverse-surface"></div>
        
        <div className="relative z-10 flex flex-col justify-end h-full p-12 lg:p-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full w-fit mb-8 border border-white/20">
            <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
            <span className="font-display-bold text-headline-lg-mobile text-white tracking-tight">BazaarChain</span>
          </div>
          
          <h1 className="font-display-bold text-display-bold text-white mb-4">Modern Indian Bazaar</h1>
          <p className="font-body-md text-surface-variant max-w-md">
            Ekdum Asli Hyperlocal Commerce. Connect directly with your neighborhood's best sellers and trusted buyers.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md flex flex-col">
          <div className="mb-10">
            <h2 className="font-display-bold text-headline-lg text-primary mb-2">Welcome Back</h2>
            <p className="font-body-md text-on-surface-variant">Choose your role to continue your journey</p>
          </div>

          {/* Role Selection */}
          <div className="flex gap-4 mb-10">
            <button 
              onClick={() => setRole('customer')}
              className={`flex-1 flex flex-col items-center justify-center p-6 rounded-3xl border transition-all ${
                role === 'customer' 
                  ? 'border-primary-container bg-surface-container-lowest text-primary-container shadow-sm' 
                  : 'border-primary-container bg-surface-container-lowest text-primary-container hover:shadow-md'
              }`}
            >
              <span className="material-symbols-outlined text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_bag</span>
              <span className="font-title-md text-sm font-bold mb-1">Main Graahak Hoon</span>
              <span className="font-label-sm text-xs font-normal text-on-surface-variant">Shop locally</span>
            </button>
            
            <button 
              onClick={() => setRole('seller')}
              className={`flex-1 flex flex-col items-center justify-center p-6 rounded-3xl border transition-all ${
                role === 'seller' 
                  ? 'border-primary-container bg-primary-container text-on-primary shadow-lg shadow-primary-container/30' 
                  : 'border-primary-container bg-primary-container text-on-primary hover:shadow-lg'
              }`}
            >
              <span className="material-symbols-outlined text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              <span className="font-title-md text-sm font-bold mb-1">Main Dukandaar<br/>Hoon</span>
              <span className="font-label-sm text-xs font-normal opacity-90 mt-1">Manage your shop</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-outline-variant/30"></div>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[11px] font-bold">Secure Login</span>
            <div className="flex-1 h-px bg-outline-variant/30"></div>
          </div>

          {/* Form Box */}
          <form onSubmit={handleLogin} className="bg-[#fcfcff] rounded-[2rem] p-6 md:p-8 shadow-sm border border-outline-variant/20 mb-8">
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label className="block font-label-sm text-on-surface-variant mb-2">Gmail Address</label>
              <div className="flex">
                <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/60 rounded-l-lg px-4 py-3 border-r-0">
                  <span className="material-symbols-outlined text-on-surface-variant/70 text-[20px]">mail</span>
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your @gmail.com address" 
                  className="flex-1 bg-surface-container-lowest border border-outline-variant/60 rounded-r-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary-container placeholder:text-on-surface-variant/40"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-sm text-on-surface-variant">Password</label>
                <a href="#" className="font-label-sm text-secondary font-bold hover:underline">Forgot?</a>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/60 rounded-l-lg px-4 py-3 border-r-0">
                  <span className="material-symbols-outlined text-on-surface-variant/70 text-[20px]">lock</span>
                </div>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  className="flex-1 bg-surface-container-lowest border border-outline-variant/60 rounded-r-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary-container placeholder:text-on-surface-variant/40"
                  required
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-title-md font-bold flex justify-center items-center gap-2 hover:bg-primary/90 transition-colors shadow-md">
              Login to BazaarChain
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-sm text-xs">
            <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>verified_user</span>
            <span>100% Secure & Encrypted by BazaarChain</span>
          </div>

        </div>
      </div>
    </div>
  );
}
