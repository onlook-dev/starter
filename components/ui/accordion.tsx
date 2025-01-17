"use client"

// This file is no longer used as we've implemented a custom FAQ component
// Keeping the file to maintain project structure but removing Radix UI dependencies

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder components - not used in the current implementation
export const Accordion = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const AccordionItem = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const AccordionContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
