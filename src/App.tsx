import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Page1 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page1"));
const Page2 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page2"));
const Page3 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page3"));
const Page4 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page4"));
const Page5 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page5"));
const Page6 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page6"));
const Page7 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page7"));
const Page8 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page8"));
const Page9 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page9"));
const Page10 = lazy(() => import(/* webpackChunkName: "page-1-10" */ "./pages/Page10"));
const Page11 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page11"));
const Page12 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page12"));
const Page13 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page13"));
const Page14 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page14"));
const Page15 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page15"));
const Page16 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page16"));
const Page17 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page17"));
const Page18 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page18"));
const Page19 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page19"));
const Page20 = lazy(() => import(/* webpackChunkName: "page-11-20" */ "./pages/Page20"));
const Page21 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page21"));
const Page22 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page22"));
const Page23 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page23"));
const Page24 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page24"));
const Page25 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page25"));
const Page26 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page26"));
const Page27 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page27"));
const Page28 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page28"));
const Page29 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page29"));
const Page30 = lazy(() => import(/* webpackChunkName: "page-21-30" */ "./pages/Page30"));
const Page31 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page31"));
const Page32 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page32"));
const Page33 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page33"));
const Page34 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page34"));
const Page35 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page35"));
const Page36 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page36"));
const Page37 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page37"));
const Page38 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page38"));
const Page39 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page39"));
const Page40 = lazy(() => import(/* webpackChunkName: "page-31-40" */ "./pages/Page40"));
const Page41 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page41"));
const Page42 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page42"));
const Page43 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page43"));
const Page44 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page44"));
const Page45 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page45"));
const Page46 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page46"));
const Page47 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page47"));
const Page48 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page48"));
const Page49 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page49"));
const Page50 = lazy(() => import(/* webpackChunkName: "page-41-50" */ "./pages/Page50"));
const Page51 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page51"));
const Page52 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page52"));
const Page53 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page53"));
const Page54 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page54"));
const Page55 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page55"));
const Page56 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page56"));
const Page57 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page57"));
const Page58 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page58"));
const Page59 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page59"));
const Page60 = lazy(() => import(/* webpackChunkName: "page-51-60" */ "./pages/Page60"));
const Page61 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page61"));
const Page62 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page62"));
const Page63 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page63"));
const Page64 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page64"));
const Page65 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page65"));
const Page66 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page66"));
const Page67 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page67"));
const Page68 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page68"));
const Page69 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page69"));
const Page70 = lazy(() => import(/* webpackChunkName: "page-61-70" */ "./pages/Page70"));
const Page71 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page71"));
const Page72 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page72"));
const Page73 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page73"));
const Page74 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page74"));
const Page75 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page75"));
const Page76 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page76"));
const Page77 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page77"));
const Page78 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page78"));
const Page79 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page79"));
const Page80 = lazy(() => import(/* webpackChunkName: "page-71-80" */ "./pages/Page80"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/page/1" element={<Page1 />} />
            <Route path="/page/2" element={<Page2 />} />
            <Route path="/page/3" element={<Page3 />} />
            <Route path="/page/4" element={<Page4 />} />
            <Route path="/page/5" element={<Page5 />} />
            <Route path="/page/6" element={<Page6 />} />
            <Route path="/page/7" element={<Page7 />} />
            <Route path="/page/8" element={<Page8 />} />
            <Route path="/page/9" element={<Page9 />} />
            <Route path="/page/10" element={<Page10 />} />
            <Route path="/page/11" element={<Page11 />} />
            <Route path="/page/12" element={<Page12 />} />
            <Route path="/page/13" element={<Page13 />} />
            <Route path="/page/14" element={<Page14 />} />
            <Route path="/page/15" element={<Page15 />} />
            <Route path="/page/16" element={<Page16 />} />
            <Route path="/page/17" element={<Page17 />} />
            <Route path="/page/18" element={<Page18 />} />
            <Route path="/page/19" element={<Page19 />} />
            <Route path="/page/20" element={<Page20 />} />
            <Route path="/page/21" element={<Page21 />} />
            <Route path="/page/22" element={<Page22 />} />
            <Route path="/page/23" element={<Page23 />} />
            <Route path="/page/24" element={<Page24 />} />
            <Route path="/page/25" element={<Page25 />} />
            <Route path="/page/26" element={<Page26 />} />
            <Route path="/page/27" element={<Page27 />} />
            <Route path="/page/28" element={<Page28 />} />
            <Route path="/page/29" element={<Page29 />} />
            <Route path="/page/30" element={<Page30 />} />
            <Route path="/page/31" element={<Page31 />} />
            <Route path="/page/32" element={<Page32 />} />
            <Route path="/page/33" element={<Page33 />} />
            <Route path="/page/34" element={<Page34 />} />
            <Route path="/page/35" element={<Page35 />} />
            <Route path="/page/36" element={<Page36 />} />
            <Route path="/page/37" element={<Page37 />} />
            <Route path="/page/38" element={<Page38 />} />
            <Route path="/page/39" element={<Page39 />} />
            <Route path="/page/40" element={<Page40 />} />
            <Route path="/page/41" element={<Page41 />} />
            <Route path="/page/42" element={<Page42 />} />
            <Route path="/page/43" element={<Page43 />} />
            <Route path="/page/44" element={<Page44 />} />
            <Route path="/page/45" element={<Page45 />} />
            <Route path="/page/46" element={<Page46 />} />
            <Route path="/page/47" element={<Page47 />} />
            <Route path="/page/48" element={<Page48 />} />
            <Route path="/page/49" element={<Page49 />} />
            <Route path="/page/50" element={<Page50 />} />
            <Route path="/page/51" element={<Page51 />} />
            <Route path="/page/52" element={<Page52 />} />
            <Route path="/page/53" element={<Page53 />} />
            <Route path="/page/54" element={<Page54 />} />
            <Route path="/page/55" element={<Page55 />} />
            <Route path="/page/56" element={<Page56 />} />
            <Route path="/page/57" element={<Page57 />} />
            <Route path="/page/58" element={<Page58 />} />
            <Route path="/page/59" element={<Page59 />} />
            <Route path="/page/60" element={<Page60 />} />
            <Route path="/page/61" element={<Page61 />} />
            <Route path="/page/62" element={<Page62 />} />
            <Route path="/page/63" element={<Page63 />} />
            <Route path="/page/64" element={<Page64 />} />
            <Route path="/page/65" element={<Page65 />} />
            <Route path="/page/66" element={<Page66 />} />
            <Route path="/page/67" element={<Page67 />} />
            <Route path="/page/68" element={<Page68 />} />
            <Route path="/page/69" element={<Page69 />} />
            <Route path="/page/70" element={<Page70 />} />
            <Route path="/page/71" element={<Page71 />} />
            <Route path="/page/72" element={<Page72 />} />
            <Route path="/page/73" element={<Page73 />} />
            <Route path="/page/74" element={<Page74 />} />
            <Route path="/page/75" element={<Page75 />} />
            <Route path="/page/76" element={<Page76 />} />
            <Route path="/page/77" element={<Page77 />} />
            <Route path="/page/78" element={<Page78 />} />
            <Route path="/page/79" element={<Page79 />} />
            <Route path="/page/80" element={<Page80 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
