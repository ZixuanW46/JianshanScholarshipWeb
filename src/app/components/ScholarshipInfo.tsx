"use client";

import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "./ui/dialog";

export default function ScholarshipInfo() {
    const [showVisaDialog, setShowVisaDialog] = useState(false);

    return (
        // NOT using <Section> because its overflow-hidden kills position:sticky.
        // Using a plain <section> tag directly instead.
        <section className="w-full bg-[#FCFBF8] py-32 relative border-b border-black/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
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
                                Scholarship opens for current Cambridge members (undergrads, postgrads, fellows etc) as well as recent Cambridge graduates. All majors are welcomed and we aim to include a wide range of subjects!
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
                                P.S. Meals are not included. As scholars may have diverse dietary requirements and personal preferences, we keep food arrangements flexible. The good news is that food in China is generally very affordable and offers excellent value for money.
                            </p>
                            <a href="/chinatrip" className="inline-flex items-center gap-3 pb-1 border-b border-black text-[#1A1A1A] font-medium hover:opacity-50 transition-all duration-300">
                                Learn more <ArrowRight className="w-5 h-5 -rotate-45" />
                            </a>
                        </div>

                        {/* Item 3 */}
                        <div className="group border-t border-black/10 py-16 transition-colors hover:border-black/30">
                            <span className="text-xs font-mono text-gray-400 mb-6 block tracking-widest">03</span>
                            <h3 className="text-4xl font-sans tracking-tight text-[#1A1A1A] mb-8 font-medium">Flights</h3>
                            <div className="text-gray-600 font-sans text-[1.1rem] leading-relaxed max-w-xl space-y-6">
                                <p>
                                    As a Jianshan Scholar, you are responsible for arranging and covering the cost of your round-trip international flights to and from China.
                                </p>
                                <p>
                                    For the 2026 programme, you must <strong className="text-[#1A1A1A] font-medium">arrive in Hangzhou on August 1st</strong> and <strong className="text-[#1A1A1A] font-medium">depart from Beijing on August 18th</strong>.
                                </p>
                                <p>
                                    Please research flight options and prices in advance.
                                </p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="group border-t border-black/10 py-16 transition-colors hover:border-black/30">
                            <span className="text-xs font-mono text-gray-400 mb-6 block tracking-widest">04</span>
                            <h3 className="text-4xl font-sans tracking-tight text-[#1A1A1A] mb-8 font-medium">Visas</h3>
                            <div className="text-gray-600 font-sans text-[1.1rem] leading-relaxed max-w-xl space-y-6 mb-10">
                                <p>
                                    It is your sole responsibility to ensure you have the legal right to enter China.
                                </p>
                                <p>
                                    Please check carefully if you meet the <strong className="text-[#1A1A1A] font-medium">visa-free entry requirements</strong> and permitted duration for your nationality. 
                                </p>
                                <p>
                                    If your stay requires a visa, you must apply for one independently and bear the associated application costs. We will gladly provide an official invitation letter to support your application if needed.
                                </p>
                            </div>
                            <button 
                                onClick={() => setShowVisaDialog(true)}
                                className="inline-flex items-center gap-2 pb-1 border-b border-black text-[#1A1A1A] font-medium hover:opacity-50 transition-all duration-300"
                            >
                                <Info className="w-4 h-4" /> Check Visa-free entry guidelines
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={showVisaDialog} onOpenChange={setShowVisaDialog}>
                <DialogContent className="max-w-2xl bg-[#FCFBF8] border-black/10 text-[#1A1A1A] rounded-2xl p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-sans font-bold tracking-tight mb-4">
                            Visa-Free Entry Guidelines
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 font-sans text-base leading-relaxed space-y-4">
                            <p>
                                China has expanded its visa-free entry policies significantly in recent years, and scholars from a number of countries may be able to enter without a visa. Countries currently included in China's visa-free arrangements include the United Kingdom, France, Germany, Italy, Spain, the Netherlands, Switzerland, Ireland, Hungary, Austria, Belgium, and several others. Nationals of these countries may enter China for a limited period without prior visa application, though the exact conditions and permitted length of stay vary by country.
                            </p>
                            <p>
                                Regardless of your nationality, we strongly recommend that you read the current visa-free policy carefully and confirm whether it applies to your specific situation, as policies can change. If you are not eligible for visa-free entry, please refer to our guidance on the standard visa application process and the support we provide.
                            </p>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    );
}
