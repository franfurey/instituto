import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import NossaVisao from "@/pages/nossa-visao";
import QuemSomos from "@/pages/quem-somos";
import Manifesto from "@/pages/manifesto";
import Boletins from "@/pages/boletins";
import Noticias from "@/pages/noticias";
import Contato from "@/pages/contato";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre/nossa-visao" component={NossaVisao} />
      <Route path="/sobre/quem-somos" component={QuemSomos} />
      <Route path="/projetos/manifesto" component={Manifesto} />
      <Route path="/projetos/boletins" component={Boletins} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/contato" component={Contato} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
