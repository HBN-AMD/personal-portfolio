import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowRight, MessageSquare, Send } from 'lucide-react';
import { teamMembers } from '../data/team';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('Web Development');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');

  const teamEmail = "sixpixels65@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(teamEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Inquiry: ${inquiryType}] from ${clientName || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Six Pixels Team,\n\nName: ${clientName}\nEmail: ${clientEmail}\nService Required: ${inquiryType}\n\nProject Overview:\n${clientMessage}\n\nBest regards,\n${clientName}`
    );
    window.location.href = `mailto:${teamEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pixel-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-pixel-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-cyan"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-cyan uppercase">
              LET'S TALK BUSINESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            “Have an idea, project, or problem that needs a digital solution? Let's talk.”
          </p>
        </div>

        {/* Contact Layout: Form + Direct Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Action & Team Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Box */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-7 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Start a Conversation
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Whether you need a full web platform, custom app, frontend rebuild, or database architecture, our team is ready to discuss your requirements.
              </p>

              {/* Email Copier */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-dark-surface border border-white/10 mb-5">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-pixel-cyan/15 text-pixel-cyan flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono uppercase text-slate-400">Direct Team Email</p>
                    <a href={`mailto:${teamEmail}`} className="text-sm font-mono text-white hover:text-pixel-cyan transition-colors truncate block">
                      {teamEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-pixel-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Direct Mail Link */}
              <a
                href={`mailto:${teamEmail}?subject=Client%20Inquiry%20-%20Six%20Pixels`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-pixel-cyan hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-950/40"
              >
                <span>Launch Email Client</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

            {/* Social & Channel Links */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                Official Channels
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/saeed-123-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5 text-xs font-medium"
                >
                  <Github className="w-4 h-4 text-pixel-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5 text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-pixel-emerald" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-dark-card border border-white/10 rounded-2xl p-7 sm:p-9 shadow-xl">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-pixel-cyan" />
                <h3 className="text-xl font-bold text-white">
                  Send Project Requirements
                </h3>
              </div>

              <form onSubmit={handleSendInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-pixel-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-pixel-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white text-xs focus:outline-none focus:border-pixel-cyan transition-colors"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend and Database Integration">Backend and Database Integration</option>
                    <option value="App Development">App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Full-Stack Solution">Full-Stack Solution (Complete Product)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Overview / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your product goals, timeline, or problem to solve..."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-pixel-cyan transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-200 transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Inquiry</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
