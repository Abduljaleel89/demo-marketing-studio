import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppContent from "./AppContent";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
