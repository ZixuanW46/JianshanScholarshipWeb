"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ScholarshipInfo() {
    return (
        // NOT using <Section> because its overflow-hidden kills position:sticky.
        // Using a plain <section> tag directly instead.
        <section className="w-full bg-[#FCFBF8] py-32 relative border-b border-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-start relative">

                    {/* Left Column: Sticky — stays pinned while right scrolls past */}
                    <div className="w-full md:w-5/12 md:sticky md:top-32 self-start">
                        <h2 className="text-6xl md:text-7xl lg:text-[7rem] font-serif leading-[0.85] text-[#1A1A1A] tracking-tighter">
                            The<br />
                            <span className="italic text-gray-400">Details.</span>
                        </h2>
                        <p className="mt-8 text-lg font-sans text-gray-500 max-w-sm leading-relaxed">
                            A fully-funded immersive journey, covering everything you need for the Capy China Trip experience.
                        </p>
                    </div>

                    {/* Right Column: Scrolls normally, creating the parallax illusion */}
                    <div className="w-full md:w-7/12 flex flex-col">
                        {/* Item 1 */}
                        <div className="group border-t border-black/10 py-16 transition-colors hover:border-black/30">
                            <span className="text-xs font-mono text-gray-400 mb-6 block tracking-widest">01</span>
                            <h3 className="text-4xl font-sans tracking-tight text-[#1A1A1A] mb-8 font-medium">Who can apply</h3>
                            <p className="text-gray-600 font-sans text-[1.1rem] leading-relaxed max-w-xl">
                                Scholarship opens for current Cambridge members (undergrads, postgrads, fellows etc). All majors are welcomed and we aim to include a wide range of subjects!
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="group border-t border-black/10 py-16 transition-colors hover:border-black/30">
                            <span className="text-xs font-mono text-gray-400 mb-6 block tracking-widest">02</span>
                            <h3 className="text-4xl font-sans tracking-tight text-[#1A1A1A] mb-8 font-medium">Fully-Funded Hubs</h3>
                            <p className="text-gray-600 font-sans text-[1.1rem] leading-relaxed max-w-xl mb-10">
                                Everything included in the Capy China Trip package is covered by the scholarship. Your time in China is fully supported.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Accommodation', 'Domestic Travel', 'Attraction Tickets', 'Local Tours', 'Cultural Activities', 'Professional Guides'].map(tag => (
                                    <span key={tag} className="px-5 py-2.5 rounded-full border border-black/10 text-sm font-medium text-black/70 hover:bg-black/5 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-600 font-sans text-[1rem] leading-relaxed max-w-xl mt-8 mb-8 italic">
                                P.S. Meals are not included. Since scholars have diverse dietary requirements and personal preferences, we keep food choices flexible. The good news: food in China is generally very affordable and offers strong value for money.
                            </p>
                            <a href="#" className="inline-flex items-center gap-3 pb-1 border-b border-black text-[#1A1A1A] font-medium hover:opacity-50 transition-all duration-300">
                                Learn more <ArrowRight className="w-5 h-5 -rotate-45" />
                            </a>
                        </div>

                        {/* Item 3 */}
                        <div className="group border-t border-black/10 py-16 transition-colors hover:border-black/30">
                            <span className="text-xs font-mono text-gray-400 mb-6 block tracking-widest">03</span>
                            <h3 className="text-4xl font-sans tracking-tight text-[#1A1A1A] mb-8 font-medium">Flights & Visas</h3>
                            <p className="text-gray-600 font-sans text-[1.1rem] leading-relaxed max-w-xl mb-10">
                                Scholars are responsible for managing their own return flight ticket and Visa fee if needed.
                            </p>
                            <a href="#" className="inline-flex items-center gap-3 pb-1 border-b border-black text-[#1A1A1A] font-medium hover:opacity-50 transition-all duration-300">
                                Check Visa-free entry <ArrowRight className="w-5 h-5 -rotate-45" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
