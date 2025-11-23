import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#1a1a1a");
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = "#1a1a1a";
      document.head.appendChild(meta);
    }

    // Set viewport with safe area insets
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, viewport-fit=cover"
      );
    }

    // Set application name
    const metaAppName = document.querySelector('meta[name="application-name"]');
    if (metaAppName) {
      metaAppName.setAttribute("content", "Knowlia");
    } else {
      const meta = document.createElement("meta");
      meta.name = "application-name";
      meta.content = "Knowlia";
      document.head.appendChild(meta);
    }

    // Set apple mobile web app title
    const metaAppleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (metaAppleTitle) {
      metaAppleTitle.setAttribute("content", "Knowlia");
    } else {
      const meta = document.createElement("meta");
      meta.name = "apple-mobile-web-app-title";
      meta.content = "Knowlia";
      document.head.appendChild(meta);
    }

    // Set description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Your cross-platform learning companion. Download Knowlia for Windows, macOS, or Linux.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Your cross-platform learning companion. Download Knowlia for Windows, macOS, or Linux.";
      document.head.appendChild(meta);
    }

    // Set author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute("content", "Knowlia");
    } else {
      const meta = document.createElement("meta");
      meta.name = "author";
      meta.content = "Knowlia";
      document.head.appendChild(meta);
    }

    // Set Apple mobile web app status bar style
    const metaAppleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (metaAppleStatusBar) {
      metaAppleStatusBar.setAttribute("content", "black-translucent");
    } else {
      const meta = document.createElement("meta");
      meta.name = "apple-mobile-web-app-status-bar-style";
      meta.content = "black-translucent";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;