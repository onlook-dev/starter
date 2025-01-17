'use client';

import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <CTA />
        </main>
    );
}
