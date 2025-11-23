import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Apple, Monitor, Laptop, Check } from "lucide-react";
import CourseCard from "@/components/DownloadCard";

interface DownloadPlatform {
  platform: string;
  icon: any;
  versions: Array<{
    arch: string;
    url: string;
    recommended: boolean;
  }>;
}

const Index = () => {
  const version = "0.1.0";
  const currentYear = new Date().getFullYear();
  
  const downloads: DownloadPlatform[] = [
    {
      platform: "Windows",
      icon: Monitor,
      versions: [
        { arch: "64-bit", url: "/tauri-build-windows-x64/setup.exe", recommended: true },
        { arch: "32-bit", url: "/tauri-build-windows-x86/setup.exe", recommended: false }
      ]
    },
    {
      platform: "macOS",
      icon: Apple,
      versions: [
        { arch: "Apple Silicon (M1/M2)", url: "/tauri-build-macos-arm64/installer.dmg", recommended: true },
        { arch: "Intel 64-bit", url: "/tauri-build-macos-x64/installer.dmg", recommended: false }
      ]
    },
    {
      platform: "Linux",
      icon: Laptop,
      versions: [
        { arch: "64-bit (.deb)", url: "/tauri-build-linux-x64/installer.deb", recommended: true },
        { arch: "AppImage", url: "/tauri-build-linux-x64/installer.AppImage", recommended: false }
      ]
    }
  ];

  const changelog: Array<any> = [
    {
      version: "0.1.0",
      date: "2025-11-23",
      changes: [
        "Initial release: Knowlia app – cross-platform Tauri export for Windows, macOS, and Linux.",
        "Bundled image/resource: vcontexst."
      ]
    }
  ];

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          background-color: #1a1a1a;
        }
        body {
          padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen w-full items-center justify-center flex flex-col bg-[#1a1a1a] relative overflow-hidden">
        {/* ==== Background Grid Overlay - Now positioned to respect safe area ==== */}
        <div 
          className="absolute z-0 bg-[linear-gradient(to_right,#fafafa,transparent_1px),linear-gradient(to_bottom,#fafafa33_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
          style={{
            top: 'env(safe-area-inset-top)',
            left: 'env(safe-area-inset-left)',
            right: 'env(safe-area-inset-right)',
            bottom: 'env(safe-area-inset-bottom)',
          }}
        />
        
        {/* Hero Section */}
        <section className="w-full text-center z-10 relative pt-16 px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 text-[#fafafa] tracking-tight font-luckiest">
            K N O W L I A
          </h1>
          <span {...{variant: "secondary", className: "mb-6 text-sm inline-block text-[#fafafa] bg-[#3a6ea4] px-3 py-1 rounded-full mt-2"} as any}>
            Version {version}
          </span>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mt-6 mb-8 px-4">
            Your cross-platform learning companion. Download Knowlia for Windows, macOS, or Linux and experience seamless education across all your devices.
          </p>
        </section>
        
        {/* Download Cards */}
        <section className="w-full flex justify-center mb-8">
          <div className="grid gap-y-8 gap-x-6 max-w-7xl w-full pl-6 grid-cols-1 md:grid-cols-3 place-items-center">
            {(downloads as DownloadPlatform[]).map((platform, idx) => (
              <CourseCard
                key={platform.platform}
                platform={platform.platform}
                icon={platform.icon}
                versions={platform.versions}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 mt-auto z-10 relative">
          <div className="text-center text-gray-400 text-sm">
            © {currentYear} Knowlia. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;