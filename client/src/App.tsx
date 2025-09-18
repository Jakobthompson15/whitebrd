import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LoadingScreen } from "@/components/loading-screen";
import { WhiteboardToggle } from "@/components/whiteboard-toggle";
import { MarkerCursorContinuous } from "@/components/marker-cursor";
import { useMarkerCursor } from "@/hooks/use-marker-cursor";
import Home from "@/pages/home";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import IndustriesIndex from "@/pages/industries";
import IndustryPage from "@/pages/industry";
import SEOServices from "@/pages/seo-services";
import WebsiteDesign from "@/pages/website-design";
import PPCManagement from "@/pages/ppc-management";
import ContentMarketing from "@/pages/content-marketing";
import SocialMediaManagement from "@/pages/social-media-management";
import TechnicalSEO from "@/pages/seo-tech";
import GoogleAdsManagement from "@/pages/google-ads";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/seo-services" component={SEOServices} />
      <Route path="/website-design" component={WebsiteDesign} />
      <Route path="/ppc-management" component={PPCManagement} />
      <Route path="/content-marketing" component={ContentMarketing} />
      <Route path="/social-media-management" component={SocialMediaManagement} />
      <Route path="/seo-tech" component={TechnicalSEO} />
      <Route path="/google-ads" component={GoogleAdsManagement} />
      <Route path="/industries" component={IndustriesIndex} />
      <Route path="/industries/:slug">
        {(params) => <IndustryPage slug={(params as { slug: string }).slug} />}
      </Route>
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isEnabled: isMarkerEnabled } = useMarkerCursor();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <LoadingScreen />}
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Toaster />
          <WhiteboardToggle />
          {isMarkerEnabled && <MarkerCursorContinuous />}
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
