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
import CaseStudies from "@/pages/case-studies";
import FreeAudit from "@/pages/free-audit";
import LocalSEO from "@/pages/services/local-seo";
import NationalSEO from "@/pages/services/national-seo";
import EcommerceSEO from "@/pages/services/ecommerce-seo";
import MultiLocationSEO from "@/pages/services/multi-location-seo";
import WebDesign from "@/pages/services/web-design";
import PPCGoogleAds from "@/pages/services/ppc-google-ads";
import ReviewManagement from "@/pages/services/review-management";
import ConversionOptimization from "@/pages/services/conversion-optimization";
import ContentMarketing from "@/pages/services/content-marketing";
import SocialMedia from "@/pages/services/social-media";
import TechnicalSEO from "@/pages/services/technical-seo";
import CustomSolutions from "@/pages/services/custom-solutions";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/free-audit" component={FreeAudit} />
      <Route path="/services/local-seo" component={LocalSEO} />
      <Route path="/services/national-seo" component={NationalSEO} />
      <Route path="/services/ecommerce-seo" component={EcommerceSEO} />
      <Route path="/services/multi-location-seo" component={MultiLocationSEO} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/ppc-google-ads" component={PPCGoogleAds} />
      <Route path="/services/review-management" component={ReviewManagement} />
      <Route path="/services/conversion-optimization" component={ConversionOptimization} />
      <Route path="/services/content-marketing" component={ContentMarketing} />
      <Route path="/services/social-media" component={SocialMedia} />
      <Route path="/services/technical-seo" component={TechnicalSEO} />
      <Route path="/services/custom-solutions" component={CustomSolutions} />
      <Route path="/industries" component={IndustriesIndex} />
      <Route path="/industries/:slug">
        {(params) => <IndustryPage slug={(params as { slug: string }).slug} />}
      </Route>
      <Route path="/blog" component={Blog} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
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
