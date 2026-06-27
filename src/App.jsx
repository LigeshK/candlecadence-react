import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <main className="flex-grow-1">main</main>
      <Footer />
    </div>
  );
}
export default App;
