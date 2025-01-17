'use client';

import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Integrations from "@/components/sections/integrations";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col">
                <Hero />
                <Features />
                <Integrations />
                <Pricing />
                <FAQ />
                <CTA />
            </main>
        </>
    );
}
