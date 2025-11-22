import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Apple, Monitor, Laptop, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const version = "2.1.0";
  
  const downloads = [
    {
      platform: "Windows",
      icon: Monitor,
      versions: [
        { arch: "64-bit", url: "#", recommended: true },
        { arch: "32-bit", url: "#", recommended: false }
      ]
    },
    {
      platform: "macOS",
      icon: Apple,
      versions: [
        { arch: "Apple Silicon (M1/M2)", url: "#", recommended: true },
        { arch: "Intel 64-bit", url: "#", recommended: false }
      ]
    },
    {
      platform: "Linux",
      icon: Laptop,
      versions: [
        { arch: "64-bit (.deb)", url: "#", recommended: true },
        { arch: "64-bit (.rpm)", url: "#", recommended: false },
        { arch: "AppImage", url: "#", recommended: false }
      ]
    }
  ];

  const changelog = [
    {
      version: "2.1.0",
      date: "2025-11-15",
      changes: [
        "Enhanced performance with 40% faster load times",
        "New unified search experience across all platforms",
        "Improved dark mode with better contrast ratios",
        "Fixed memory leak in background processes"
      ]
    },
    {
      version: "2.0.5",
      date: "2025-10-28",
      changes: [
        "Added support for ARM-based processors",
        "Security updates and bug fixes",
        "Improved compatibility with latest OS versions"
      ]
    },
    {
      version: "2.0.0",
      date: "2025-09-15",
      changes: [
        "Complete UI redesign with modern interface",
        "Native Apple Silicon support",
        "Cross-platform sync capabilities",
        "Enhanced plugin ecosystem"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center animate-fade-in">
        <Badge variant="secondary" className="mb-6 text-sm">
          Version {version} • Latest Release
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Download for Every Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Get started in seconds. Available for Windows, macOS, and Linux with native support for all architectures.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
          <Download className="mr-2 h-5 w-5" />
          Download Now
        </Button>
      </section>

      {/* Download Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {downloads.map((platform, idx) => (
            <Card 
              key={platform.platform}
              className="p-8 hover:shadow-glow transition-all duration-300 animate-slide-up border-2"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl">
                  <platform.icon className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6">{platform.platform}</h3>
              <div className="space-y-3">
                {platform.versions.map((version) => (
                  <Button
                    key={version.arch}
                    variant="download"
                    className="w-full justify-between group"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="h-4 w-4 group-hover:text-primary transition-colors" />
                      {version.arch}
                    </span>
                    {version.recommended && (
                      <Badge variant="default" className="ml-2">
                        Recommended
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-card">
          <h2 className="text-3xl font-bold mb-8 text-center">System Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                Windows
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Windows 10 or later</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>4GB RAM minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>500MB disk space</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Apple className="h-5 w-5 text-primary" />
                macOS
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>macOS 11.0 or later</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>4GB RAM minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>500MB disk space</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Laptop className="h-5 w-5 text-primary" />
                Linux
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Ubuntu 20.04+ or equivalent</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>4GB RAM minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>500MB disk space</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Changelog */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Release Notes</h2>
          <p className="text-muted-foreground text-center mb-12">
            Stay up to date with the latest improvements and features
          </p>
          <div className="space-y-8">
            {changelog.map((release, idx) => (
              <Card 
                key={release.version} 
                className="p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="text-sm">
                      v{release.version}
                    </Badge>
                    {idx === 0 && (
                      <Badge variant="secondary" className="text-sm">
                        Latest
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{release.date}</span>
                </div>
                <ul className="space-y-2">
                  {release.changes.map((change, changeIdx) => (
                    <li key={changeIdx} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
