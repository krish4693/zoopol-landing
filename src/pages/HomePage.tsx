import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Button } from "../components/ui/button";
import { Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import appStoreButtons from 'figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto">
          {/* Main dark container */}
          <div className="bg-gray-900 rounded-[40px] p-8 lg:p-12 relative overflow-hidden min-h-[85vh] flex flex-col">
            
            {/* Decorative yellow lines */}
            <svg className="absolute top-1/2 left-0 w-full h-full pointer-events-none" style={{ transform: 'translateY(-30%)' }}>
              <path d="M 100 400 Q 300 350, 500 400" stroke="#156BFC" strokeWidth="3" fill="none" opacity="0.3"/>
              <path d="M 200 300 Q 400 250, 600 300" stroke="#156BFC" strokeWidth="3" fill="none" opacity="0.3"/>
              <path d="M 300 500 Q 500 450, 700 500" stroke="#156BFC" strokeWidth="3" fill="none" opacity="0.3"/>
            </svg>

            {/* Small decorative accent lines */}
            <div className="absolute top-1/3 right-1/4 hidden lg:block">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <line x1="10" y1="30" x2="50" y2="30" stroke="#156BFC" strokeWidth="3" strokeLinecap="round"/>
                <line x1="30" y1="10" x2="30" y2="50" stroke="#156BFC" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <line x1="5" y1="20" x2="35" y2="20" stroke="#156BFC" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="5" x2="20" y2="35" stroke="#156BFC" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Hero content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 py-8">
              {/* Small badge */}
              <div className="inline-flex rounded-full p-[2px] bg-gradient-to-r from-[#156BFC] via-[#4A90FF] to-[#156BFC] mb-6 md:mb-8">
                <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gray-900 text-white/70 text-xs md:text-sm">
                  <span className="hidden sm:inline">+10 thousands of workers ready to collaborate</span>
                  <span className="sm:hidden">+10k workers ready</span>
                </div>
              </div>

              {/* Main headline */}
              <div className="mb-6 md:mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-tight">
                  HIRE IN MINUTES.<br />WORK IN MINUTES.
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mb-8 md:mb-10 px-4" style={{ fontSize: '16px' }}>
                Zoopol connects employers and workers for household tasks, one-day jobs, and quick help — fast, simple, and fully transparent.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 w-full sm:w-auto px-4 sm:px-0">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={appStoreButtons} alt="Download on App Store and Google Play" className="h-12 md:h-14" />
                </a>
              </div>

              {/* Profile Cards - Below Text */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full max-w-5xl mx-auto">
                {/* Card 1 - Purple */}
                <div className="transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-3deg)' }}>
                  <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-4 lg:p-6 border-4 border-white shadow-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">4.9/5</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3 flex-wrap">
                      <span className="text-xs bg-white/90 rounded-full px-2 py-1">Cleaning</span>
                    </div>

                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1630325459372-36f3f86281cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMjI0MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Cleaner" 
                      className="w-full h-32 lg:h-40 object-cover rounded-2xl mb-2"
                    />
                    
                    <div className="bg-white/95 rounded-xl p-2 lg:p-3">
                      <h3 className="text-gray-900 text-sm lg:text-base">Sarah M.</h3>
                      <p className="text-xs text-gray-600">Professional Cleaner</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Pink */}
                <div className="transform hover:scale-105 transition-transform" style={{ transform: 'rotate(2deg)' }}>
                  <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl p-4 lg:p-6 border-4 border-white shadow-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">5.0/5</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3 flex-wrap">
                      <span className="text-xs bg-white/90 rounded-full px-2 py-1">Gardening</span>
                    </div>

                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1571732087973-f896c82489f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW5lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzIyNDExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Gardener" 
                      className="w-full h-32 lg:h-40 object-cover rounded-2xl mb-2"
                    />
                    
                    <div className="bg-white/95 rounded-xl p-2 lg:p-3">
                      <h3 className="text-gray-900 text-sm lg:text-base">Amy L.</h3>
                      <p className="text-xs text-gray-600">Expert Gardener</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Blue */}
                <div className="transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-2deg)' }}>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-4 lg:p-6 border-4 border-white shadow-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">4.8/5</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3 flex-wrap">
                      <span className="text-xs bg-white/90 rounded-full px-2 py-1">Handyman</span>
                    </div>

                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1716669373501-92a57f9b3d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMHBvcnRyYWl0JTIwd29ya2VyfGVufDF8fHx8MTc2MzIyNDExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Handyman" 
                      className="w-full h-32 lg:h-40 object-cover rounded-2xl mb-2"
                    />
                    
                    <div className="bg-white/95 rounded-xl p-2 lg:p-3">
                      <h3 className="text-gray-900 text-sm lg:text-base">Ben D.</h3>
                      <p className="text-xs text-gray-600">Senior Handyman</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Green */}
                <div className="transform hover:scale-105 transition-transform" style={{ transform: 'rotate(3deg)' }}>
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-4 lg:p-6 border-4 border-white shadow-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">4.9/5</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3 flex-wrap">
                      <span className="text-xs bg-white/90 rounded-full px-2 py-1">Painting</span>
                    </div>

                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1688372199140-cade7ae820fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVyJTIwd29ya2VyfGVufDF8fHx8MTc2MzIyNDExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Painter" 
                      className="w-full h-32 lg:h-40 object-cover rounded-2xl mb-2"
                    />
                    
                    <div className="bg-white/95 rounded-xl p-2 lg:p-3">
                      <h3 className="text-gray-900 text-sm lg:text-base">Rob B.</h3>
                      <p className="text-xs text-gray-600">Professional Painter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <Features />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />
    </>
  );
}
