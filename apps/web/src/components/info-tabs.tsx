"use client";

import { useState } from "react";
import { BookOpen, Settings, Calendar, CreditCard, Search, FileText, Video, HelpCircle, ChevronRight } from "lucide-react";
import { INFO_CONTENTS } from "@/data/info-content";
import { Button } from "./ui/button";

const tabs = [
  { id: "pengantar", label: "Pengantar", icon: BookOpen, color: "from-blue-500 to-blue-600" },
  { id: "ketentuan", label: "Ketentuan", icon: Settings, color: "from-emerald-500 to-emerald-600" },
  { id: "jadwal", label: "Jadwal", icon: Calendar, color: "from-purple-500 to-purple-600" },
  { id: "biaya", label: "Biaya", icon: CreditCard, color: "from-orange-500 to-orange-600" },
  { id: "alur", label: "Alur", icon: Search, color: "from-pink-500 to-pink-600" },
  { id: "materiujian", label: "Materi Ujian", icon: FileText, color: "from-cyan-500 to-cyan-600" },
  { id: "tutorial", label: "Tutorial", icon: Video, color: "from-indigo-500 to-indigo-600" },
  { id: "faq", label: "FAQ", icon: HelpCircle, color: "from-red-500 to-red-600" },
];

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("pengantar");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="informasi" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informasi Lengkap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan semua informasi yang Anda butuhkan mengenai pendaftaran
            UM-PTKIN 2026
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedCard(tab.id);
                }}
                className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                  activeTab === tab.id
                    ? "shadow-xl ring-2 ring-blue-500 bg-white"
                    : "bg-white hover:shadow-lg shadow-sm"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${tab.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tab.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tab.label}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {INFO_CONTENTS[tab.id]?.title}
                  </p>
                  {activeTab === tab.id && (
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-3" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {activeTab && (
          <div
            id="info-content"
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500 ${
              expandedCard ? "animate-in fade-in slide-in-from-bottom-4" : ""
            }`}
          >
            <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tabs.find(t => t.id === activeTab)?.color} flex items-center justify-center flex-shrink-0`}
              >
                {(() => {
                  const Icon = tabs.find(t => t.id === activeTab)?.icon;
                  return Icon ? <Icon className="h-8 w-8 text-white" /> : null;
                })()}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {INFO_CONTENTS[activeTab]?.title}
                </h3>
                <p className="text-gray-600">
                  {tabs.find(t => t.id === activeTab)?.label}
                </p>
              </div>
            </div>

            <div
              className="prose prose-slate max-w-none [&_iframe]:w-full [&_div.relative]:w-full [&_div[style*='padding-bottom']]:h-0 [&_iframe[style*='position: absolute']]:border-0 prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-ol:text-gray-700 prose-ul:text-gray-700 prose-table:text-gray-700"
              dangerouslySetInnerHTML={{
                __html: INFO_CONTENTS[activeTab]?.content || "",
              }}
            />

            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  setExpandedCard(null);
                  const nextIndex = (tabs.findIndex(t => t.id === activeTab) + 1) % tabs.length;
                  setActiveTab(tabs[nextIndex].id);
                  setExpandedCard(tabs[nextIndex].id);
                  document.getElementById("info-content")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1"
              >
                Informasi Selanjutnya
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("register-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
