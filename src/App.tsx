import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Page
import Page from "./components/Page";

// Header
import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Hero from "./components/Hero/Hero.tsx";

// Main
import Main from "./components/Main.tsx";
import Steps from "./components/Steps/Steps.tsx";
import Services from "./components/Services/Services.tsx";
import News from "./components/News/News.tsx";
import ExploreMore from "./components/ExploreMore/ExploreMore.tsx";
import FrequentTravelers from "./components/FrequentTravelers.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";

// Footer
import Footer from "./components/Footer.tsx";

// Mobile
import MobileMenu from "./components/Navigation/MobileMenu.tsx";
import MenuContextProvider from "./context/MobileMenuContext.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <MobileMenu />
          </Header>

          <Main>
            <Steps />
            <Services />
            <News />
            <ExploreMore />
            <FrequentTravelers />
            <Testimonials />
          </Main>

          <Footer />
        </Page>
        <ReactQueryDevtools />
      </MenuContextProvider>
    </QueryClientProvider>
  );
}

export default App;
